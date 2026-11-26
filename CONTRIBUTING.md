# Contributing to THOTH

THOTH is an **early prototype** with a documented long-term product direction. Contributions should advance dependable manual authoring, not add feature-shaped placeholders.

## Before opening a change

Read [PRODUCT.md](PRODUCT.md), [SPECIFICATIONS.md](SPECIFICATIONS.md), [ROADMAP.md](ROADMAP.md), [AGENTS.md](AGENTS.md). For an architecture change, review [architecture overview](docs/architecture/overview.md). Start with a bounded issue specifying a user problem, proposed behaviour, relevant requirement IDs and verifiable acceptance tests.

## Branches and pull requests

Use feature/<short-name>, fix/<short-name>, docs/<short-name> or foundation/<short-name>. Never commit directly to main. Prefer small PRs with one goal. Request review before merge. Keep concurrent agent work on separate branches; rebase carefully and never force-update another contributor's branch.

Include in each PR: purpose, linked requirement IDs, actual change vs planned, evidence, tests, known limitations, migration/data impact, docs updates, and UI screenshots if applicable. Do not merge unfinished behaviour based on screenshots alone.

## Checks

For application changes, plan to run the repository's scripts:

    npm run lint
    npm run test
    npm run build

Declare which checks were actually run and their outcomes. Dependency management is currently inconsistent (npm and Bun lockfiles); do not silently regenerate or delete locks in unrelated PRs. CI is not established and cannot be assumed.

For documentation-only work, check Markdown links, file paths, accurate present/planned states, and consistent requirement IDs. No runtime test claim follows from a docs-only change.

## Authoring and design conventions

- Keep the existing product name and logo intact; don't replace imagery with a generic AI mark.
- Use semantic structure, accessible labels and user-respectful language.
- Distinguish a formal standard from common convention and product recommendation.
- Ensure an edit affects only its declared scope, with undo or reversibility considered.
- Treat screenshots, documents and API keys as potentially private; do not commit secrets or customer data.
- Do not duplicate app architecture in informal prompts—record durable changes in relevant docs or ADRs.

Issues and pull requests can use the templates in .github/. Major capability claims require linked verification, not hopeful checkbox ticks.
