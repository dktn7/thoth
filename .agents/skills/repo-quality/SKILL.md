---
name: repo-quality
description: Audit and verify THOTH code changes or pull requests for scope, regressions, architecture alignment, accessibility, privacy, documentation accuracy, test coverage and concurrent-branch safety.
---

# Repository quality and PR review

## Repo contract

Read [AGENTS.md](../../../AGENTS.md), [PRODUCT.md](../../../PRODUCT.md), [SPECIFICATIONS.md](../../../SPECIFICATIONS.md) and [ROADMAP.md](../../../ROADMAP.md) before work. Current main is a prototype. Do not assert proposed functionality already works. Preserve THOTH name and existing ibis logo. Work on a bounded branch and PR, never directly on main.

## Common safety and evidence

- Define the user-visible task, scope, relevant requirement IDs, dependencies and a testable done condition.
- Inspect live repository code and existing tests before proposing edits; coordinate with open PRs and do not overwrite uncommitted or concurrent work.
- Prefer reversible, narrowly scoped modifications. Protect unrelated content, component IDs and user data. Never silently rewrite a whole document.
- Distinguish *planned*, *implemented*, *tested* and *verified*. Report test commands and real outcomes rather than inferred success.
- Explain unverified assumptions, data migration needs, privacy impact, accessibility and export impact in the PR.


## When to use

Any PR, dependency change, new integration, architecture decision, pre-merge audit, bug regression, accessibility/privacy check or handoff between coding agents. Relevant IDs depend on PR scope; use all linked SPECIFICATIONS.md requirements.

## Procedure

1. Establish base/head SHAs, current open PRs and exact changed files. Confirm no accidental changes to main, secrets, package locks, branding or other agent work.
2. Define the user scenario, intended invariant, linked requirement IDs, architectural boundaries and explicit exclusions.
3. Review diffs for hidden scope creep, hardcoded demonstration values, unverifiable feature claims, deletion or mutation of unrelated components and format/persistence compatibility.
4. Check data safety: uploads and external AI consent, secrets, access boundaries, injection handling and migration/recovery.
5. Check keyboard/focus, semantic structure, captions and page/export effects where relevant. If not tested, record it as a limitation.
6. Run and record applicable `npm run lint`, `npm run test`, `npm run build` plus focused regression and fixture checks. Never infer green CI from package scripts existing.
7. Verify relative Markdown links, evidence classification, README current-vs-planned statements, changed requirement statuses and any ADR updates.
8. Prepare a concise PR summary listing scope, files, tests, results, risks, decisions and outstanding verification; leave review and merge to an authorised human.

## Required review output

`Requirement ID | scenario | evidence | status | finding | risk | next action`, plus current commit SHA, commands executed, failed checks, and an explicit answer about runtime changes. Treat missing validation as **unverified**, not passed.

## Stop and ask

Before force-pushing, merging, modifying main, changing dependency management conventions, applying destructive migrations or modifying authentication/privacy boundaries without review. See [contributing](../../../CONTRIBUTING.md) and [architecture](../../../docs/architecture/overview.md).
