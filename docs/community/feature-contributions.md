# Feature requests and community contributions

**Status:** proposed operating policy. GitHub issue/PR templates exist in the Foundation PR but public contribution access, licensing and moderation decisions are still open.

## Requesting a feature

1. Explain the **user task** and a real scenario (e.g. creating a GDD containing balancing data, code and image-caption blocks).
2. Identify the desired manual workflow and whether optional AI assistance would improve it.
3. Include document family, illustrative non-sensitive examples, accessibility/export implications and acceptable alternatives.
4. Record related [SPECIFICATIONS.md](../../SPECIFICATIONS.md) requirement IDs or mark as a candidate new requirement.
5. Submit through the repository [feature-request issue template](../../.github/ISSUE_TEMPLATE/feature_request.md), **if repository permissions allow access**.

Maintainers triage requests as needs-information, under-review, accepted-for-research, planned, in-progress, delivered or declined. These are proposed process labels, **not** existing GitHub labels. Acceptance does not guarantee a release date.

## Contributing a feature

1. Locate a reviewed, bounded issue; ask the maintainer before working on major architecture or a breaking change.
2. Read [AGENTS.md](../../AGENTS.md), [CONTRIBUTING.md](../../CONTRIBUTING.md), the relevant architecture docs and any coding-agent skill.
3. Open a feature branch; never push directly to main. Keep unrelated changes out of the PR.
4. Implement manual-first behaviour with observable acceptance criteria; preserve IDs/content, undo, privacy and export semantics.
5. Add tests, representative fixtures, accurate feature documentation and migration notes when appropriate.
6. Submit the [PR template](../../.github/PULL_REQUEST_TEMPLATE.md) with requirement IDs, test outcomes, screenshots for UI changes and unverified limitations.
7. A maintainer reviews and decides whether to merge; no code contribution is automatically accepted.

## Safety and intellectual property

Do not submit private customer data, secrets, third-party copyrighted assets, unlicensed fonts or copied template collections. Include licence/attribution details for original content, images and code. Until the owner chooses a licence and contribution terms, prospective external contributors should **ask before submitting reusable code or substantial assets**.

## Community governance decisions to settle before launch

Repository visibility and source licence; possible contributor licence agreement/DCO; code of conduct; review roles and permissions; vulnerability reporting; moderation/reporting; feature voting safeguards; and release and compatibility policy. These are not settled by this document.
