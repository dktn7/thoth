# THOTH unattended development proof of concept

This folder contains a deliberately small, guarded Windows proof of concept for running one or more bounded development tasks in separate Git worktrees.

It is an operator-controlled experiment, not an autonomous software factory.

## Safety defaults

- Dry-run is the default; use -Apply to create worktrees and run tasks.
- The runner accepts only an explicit repository root and an explicit task file.
- Each task must use a unique branch and worktree path.
- File scopes are allowlists. A task cannot edit outside its declared paths.
- Tasks have explicit iteration, wall-clock, changed-file, and output budgets.
- Tests run in stages: inspect, task command, allowlist check, configured validation commands.
- Provider/API secrets are read only from environment variables and never stored in task files.
- No merge, force-push, or release action is performed.
- Draft PR creation is opt-in and requires GitHub CLI authentication.

## Quick start on Windows

Open PowerShell in a clone of THOTH and copy the example configuration:

    Copy-Item .\automation\windows\thoth-agent-poc.example.json .\automation\windows\thoth-agent-poc.json
    $env:THOTH_AGENT_PROVIDER = "ollama"
    $env:THOTH_AGENT_MODEL = "your-local-model"
    .\automation\windows\Invoke-ThothAgentPoc.ps1 -ConfigPath .\automation\windows\thoth-agent-poc.json

The first run only prints the plan. To apply one bounded task:

    .\automation\windows\Invoke-ThothAgentPoc.ps1 -ConfigPath .\automation\windows\thoth-agent-poc.json -TaskId "docs-proof" -Apply

Use -CreateDraftPr only after inspecting the worktree and local validation. The runner expects git, PowerShell 7+, and optionally gh for draft PRs. It does not install software, create credentials, or start a background service.

## Provider contract

The task command receives the task prompt through the THOTH_AGENT_TASK_PROMPT environment variable and must write changes only in the supplied worktree.

The example uses a generic command template so the provider can be swapped without changing the guardrails:

- ollama run $env:THOTH_AGENT_MODEL $env:THOTH_AGENT_TASK_PROMPT
- an OpenAI-compatible local gateway command
- another reviewed CLI that accepts a prompt from an environment variable

Do not put API keys in JSON. If a provider needs a secret, set its documented environment variable in the interactive session or a protected Windows secret mechanism.

## Task file rules

Each task has id, branch, worktree, a short prompt, an explicit list of allowed relative file/directory prefixes, a task command, validation commands, and maximum budgets.

Start with documentation-only tasks. Do not grant access to .git, .github/workflows, dependency manifests, lockfiles, credentials, deployment files, or broad repository roots until the proof of concept has been reviewed.

## What this does not do

It does not merge pull requests, resolve conflicts, push automatically, run indefinitely, rotate providers, or claim that a free provider is reliable or private. Multiple tasks may be run in separate worktrees, but this first version intentionally runs one selected task per invocation so the operator can inspect each result.

## Manual setup checklist

1. Clone https://github.com/dktn7/thoth.git locally.
2. Review the current main and any open foundation PRs before branching.
3. Copy the example JSON to an ignored local config file.
4. Set provider/model environment variables without committing them.
5. Run the dry-run and inspect the printed plan.
6. Run one documentation-only task with -Apply.
7. Inspect git diff, run the validations again manually, and review the branch.
8. Create a draft PR only if the result is intentional.
9. Merge only through normal human review after CI and security review.

## Recovery

The runner creates worktrees under the configured worktree root. If a task is abandoned, inspect the path and branch first, then remove the worktree using normal Git commands. Do not delete a worktree or branch while a provider process is still running.


## Freebuff integration

Freebuff is a full coding agent with its own interactive CLI, not merely an API model endpoint. Its documented Windows flow is to install the CLI, change into the project, and start the interactive agent. Current Freebuff CLI discussions indicate that headless, print, JSON, and piped-stdin execution are not supported as a stable interface.

For this reason, do not configure the POC to automate Freebuff by simulating terminal input. Use Freebuff manually inside the task worktree, or use Freebuff Desktop/Cloud with its own visible approval and workspace controls. After the supervised run, return to this runner for allowlist checks, validation, branch inspection, and optional draft PR creation.

Freebuff also documents project-level agent and MCP trust behavior. Keep those features disabled or explicitly reviewed for unattended experiments; a repository may contain code that would otherwise be loaded or executed by an agent.
