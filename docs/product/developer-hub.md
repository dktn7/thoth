# THOTH Developer Hub

**Status:** proposed product capability; **not implemented**. This document extends [PRODUCT.md](../../PRODUCT.md) without changing the core manual-first authoring mission.

## Purpose

Provide one discoverable place for users and developers to learn how THOTH works, request features, contribute code and share reusable templates. Participation is optional; contributions never grant automatic permission to change THOTH or execute untrusted code.

## Proposed areas

| Area | User experience | Initial mechanism | Later possibilities |
| --- | --- | --- | --- |
| Feature requests | Describe a problem, use case and desired outcome; discuss proposals | GitHub issues and feature-request template (already included in Foundation PR #1) | In-app form, triage workflow, feedback/voting with anti-abuse controls |
| Developer documentation | Browse architecture, requirements, examples and contribution rules | Versioned repo Markdown links and a documentation index | Searchable website integrated into app |
| Contribute code | Find bounded tasks, link requirement IDs, test, submit reviewed changes | GitHub issues, branches, reviewed pull requests and `AGENTS.md` | Contributor dashboard and release compatibility tooling |
| Templates | Browse official Signature, generic and community examples; duplicate and edit | Document template specification and manual review policy | Template gallery, signed/versioned packages, local import |
| Extensions | Discover compatible optional capabilities and API contracts | Research-only specification; **no loader or plugin API yet** | Manifest, capability permissions, SDK, sandbox, compatibility tests |
| Roadmap and changes | See what is planned, in progress, experimental and released | [ROADMAP.md](../../ROADMAP.md), commit/PR history | Published feature catalogue, versioned releases and changelog |

## Feature status language

Every page identifies **Available**, **In development**, **Experimental** or **Planned** and links to verification where available. Proposal accepted does not mean implemented; PR merged does not mean generally released. Never fabricate community activity, ratings or votes.

## Integration with Documentation Centre

Offer separate routes/concepts for:
- **User Guide:** task-by-task explanations with verified screenshots and steps.
- **Feature Reference:** behaviour, controls, defaults, compatibility, limitations and requirement IDs.
- **Developer Hub:** architecture, contributions, API contracts, approved extensions and community submissions.
- **What's New:** verified release notes and breaking changes.

A development feature should not be marked complete until its user-facing help and developer notes (if applicable) are updated.

## Trust and governance

- Maintainers approve issues, roadmap decisions, contributions, releases and official templates. User requests are suggestions, not commitments.
- Do not automatically merge community code or run embedded scripts/macros found in submitted templates.
- Before public contribution, choose a repository licence, contribution terms, code of conduct, moderation policy, vulnerability reporting contact and privacy policy. The current private project must not be described as open-source simply because a Developer Hub is planned.
- Display author attribution, content licence, review status, compatibility and permissions for published community work.
- All extensions must respect the canonical document model, data privacy, explicit capabilities and reversible edits. No unrestricted direct filesystem, network or document mutations.

## Phased development

1. **Repository first:** make a clear docs index, feature request path and contributor/template submission guidance with explicit planned-vs-real status.
2. **Read-only hub:** a THOTH-branded, searchable documentation/developer page listing genuine published information; no promises of live votes or uploads.
3. **Community templates:** moderated submissions and previews once the template format and imports are stable.
4. **Extension framework:** only after canonical model, persistence, permissions, editor adapter and export contract are proven.

## Acceptance criteria for the first hub release

A user can find documentation and submit a feature request using an actual functional endpoint; a developer can follow a bounded contribution journey; every displayed capability has a truthful status; links resolve; and the interface does not imply arbitrary community code is safe to install.

See [community contribution process](../community/feature-contributions.md), [template submissions](../community/template-submissions.md) and [extension strategy](../architecture/extensions.md).
