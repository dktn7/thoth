#requires -Version 7.0
[CmdletBinding()]
param(
  [Parameter(Mandatory = $true)]
  [string] $ConfigPath,
  [string] $TaskId,
  [switch] $Apply,
  [switch] $CreateDraftPr
)
Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
function Fail([string] $Message) { throw "THOTH POC: $Message" }
function Resolve-RepoRoot([string] $ConfiguredRoot) {
  $root = Resolve-Path -LiteralPath $ConfiguredRoot
  $git = git -C $root.Path rev-parse --show-toplevel 2>$null
  if ($LASTEXITCODE -ne 0) { Fail "repositoryRoot is not a Git worktree: $($root.Path)" }
  return (Resolve-Path -LiteralPath $git.Trim()).Path
}
function Assert-RelativeSafe([string] $Value, [string] $Field) {
  if ([string]::IsNullOrWhiteSpace($Value) -or [IO.Path]::IsPathRooted($Value) -or $Value -match '(^|[\\/])\.\.([\\/]|$)') { Fail "$Field must be a non-empty relative path without '..': $Value" }
}
function Get-ChangedFiles([string] $Worktree) {
  $lines = @(git -C $Worktree status --short --untracked-files=all)
  if ($LASTEXITCODE -ne 0) { Fail "could not inspect worktree status" }
  return @($lines | ForEach-Object { if ($_.Length -ge 4) { $_.Substring(3).Trim() } else { $_.Trim() } } | Where-Object { $_ })
}
function Test-Allowlisted([string] $File, [object[]] $Allowlist) {
  $normal = ($File -replace '\\','/').TrimStart('./')
  foreach ($prefix in $Allowlist) {
    $p = ($prefix -replace '\\','/').TrimStart('./')
    if ($normal -eq $p.TrimEnd('/') -or $normal.StartsWith($p.TrimEnd('/') + '/')) { return $true }
  }
  return $false
}
$config = Get-Content -LiteralPath (Resolve-Path $ConfigPath) -Raw | ConvertFrom-Json
if (-not $config.tasks) { Fail "configuration contains no tasks" }
$repoRoot = Resolve-RepoRoot $config.repositoryRoot
$tasks = @($config.tasks)
if ($TaskId) { $tasks = @($tasks | Where-Object id -eq $TaskId) }
if ($tasks.Count -ne 1) { Fail "select exactly one task with -TaskId; this POC does not fan out unattended work" }
$task = $tasks[0]
foreach ($field in @("id","branch","worktree","prompt","allowlist","validation","maxIterations","maxMinutes","maxChangedFiles")) { if ($null -eq $task.$field) { Fail "task is missing '$field'" } }
Assert-RelativeSafe $task.worktree "task.worktree"
if ($task.maxIterations -ne 1) { Fail "this POC supports exactly one provider iteration" }
if ($task.maxMinutes -lt 1 -or $task.maxMinutes -gt 30) { Fail "maxMinutes must be between 1 and 30" }
if ($task.maxChangedFiles -lt 1 -or $task.maxChangedFiles -gt 20) { Fail "maxChangedFiles must be between 1 and 20" }
if (@($task.allowlist).Count -eq 0) { Fail "allowlist must not be empty" }
$worktreeRoot = Join-Path $repoRoot $config.worktreeRoot
$worktreePath = Join-Path $worktreeRoot $task.worktree
git -C $repoRoot show-ref --verify --quiet ("refs/heads/" + $task.branch)
$branchExists = ($LASTEXITCODE -eq 0)
$pathExists = Test-Path -LiteralPath $worktreePath
Write-Host "THOTH unattended POC"
Write-Host "  repo:      $repoRoot"
Write-Host "  task:      $($task.id)"
Write-Host "  branch:    $($task.branch)"
Write-Host "  worktree:  $worktreePath"
Write-Host "  allowlist: $(@($task.allowlist) -join ', ')"
Write-Host "  limits:    1 iteration, $($task.maxMinutes) minute(s), $($task.maxChangedFiles) changed file(s)"
Write-Host "  mode:      $(if ($Apply) { 'APPLY' } else { 'DRY-RUN' })"
if (-not $Apply) { Write-Host "Dry-run complete. No branch, worktree, provider, or PR was changed."; exit 0 }
if ($pathExists) { Fail "worktree path already exists; inspect it before reusing: $worktreePath" }
if ($branchExists) { Fail "branch already exists; this POC will not reuse it: $($task.branch)" }
if ($CreateDraftPr -and -not (Get-Command gh -ErrorAction SilentlyContinue)) { Fail "gh is required for -CreateDraftPr" }
New-Item -ItemType Directory -Force -Path $worktreeRoot | Out-Null
git -C $repoRoot worktree add -b $task.branch $worktreePath $config.baseBranch
if ($LASTEXITCODE -ne 0) { Fail "git worktree creation failed" }
$env:THOTH_AGENT_TASK_PROMPT = $task.prompt
if (-not $env:THOTH_AGENT_MODEL) { Fail "set THOTH_AGENT_MODEL before -Apply" }
$providerArgs = @($config.provider.arguments | ForEach-Object {
  $arg = $_
  $arg = $arg.Replace('$env:THOTH_AGENT_MODEL', $env:THOTH_AGENT_MODEL)
  $arg.Replace('$env:THOTH_AGENT_TASK_PROMPT', $env:THOTH_AGENT_TASK_PROMPT)
})
$provider = $config.provider.command
$started = Get-Date
Push-Location $worktreePath
try {
  if (-not (Get-Command $provider -ErrorAction SilentlyContinue)) { Fail "provider command not found: $provider" }
  & $provider @providerArgs
  if ($LASTEXITCODE -ne 0) { Fail "provider exited with code $LASTEXITCODE" }
} finally { Pop-Location }
$elapsed = ((Get-Date) - $started).TotalMinutes
if ($elapsed -gt $task.maxMinutes) { Fail "wall-clock budget exceeded: $([math]::Round($elapsed,2)) minutes" }
$changed = @(Get-ChangedFiles $worktreePath)
if ($changed.Count -gt $task.maxChangedFiles) { Fail "changed-file budget exceeded: $($changed.Count) > $($task.maxChangedFiles)" }
$violations = @($changed | Where-Object { -not (Test-Allowlisted $_ @($task.allowlist)) })
if ($violations.Count -gt 0) { Fail "allowlist violation: $($violations -join ', ')" }
foreach ($command in @($task.validation)) {
  Write-Host "Validation: $command"
  & pwsh -NoProfile -NonInteractive -Command $command
  if ($LASTEXITCODE -ne 0) { Fail "validation failed: $command" }
}
if ($CreateDraftPr) {
  $title = "Draft: THOTH task $($task.id)"
  gh -C $worktreePath pr create --draft --base $config.baseBranch --head $task.branch --title $title --body "Automated proof-of-concept task. Human review required. No merge is performed."
  if ($LASTEXITCODE -ne 0) { Fail "draft PR creation failed" }
}
Write-Host "Task completed. Review the worktree and draft PR manually."
