# THOTH — Dependency-ordered roadmap

**Status:** proposed sequence for review. No dates or percentages imply delivery. Every milestone requires test evidence and an updated requirements status.

This is a professional document platform roadmap, not a staged retreat into an SOP-only app. The shared engine must support business, technical and creative workflows.

## Milestones

| Milestone | Purpose and major outputs | Explicitly out of scope / exit signal |
| --- | --- | --- |
| 01. Product foundation | README, product definition, requirements, architecture boundaries, branding, contributor rules and research register | No runtime changes in this PR. Exit: reviewed documentation; tracked open decisions |
| 02. Canonical document model | Versioned semantic components, IDs, relationships, JSON schema, fixtures, migration design and adapters | Not a commitment to one editor implementation. Exit: lossless canonical round trip |
| 03. Persistence and autosave | Local document store, create/open/save/reopen, recovery, failures and version conflict handling | No cloud sync promise. Exit: interruption/recovery tests pass |
| 04. Editor-engine evaluation | Compare BlockNote against Tiptap/ProseMirror via typography, custom nodes, large docs, accessibility, pagination and export spikes | No engine rewrite solely for appearance. Exit: documented ADR and migration strategy |
| 05. Styles and themes | Named paragraph/character/list/table styles, inheritance, theme tokens, document vs project scopes | No advanced AI styling required. Exit: style change propagates through saved/previews |
| 06. Templates and reusable components | Template library, blank document, saved building blocks, scoped authoring prompts | No universal template claimed. Exit: contrasting document families work |
| 07. Custom fonts | Installation/import policy, licensing, fallback, embedding and font consistency | No unlicensed bundling. Exit: font warnings and export tests |
| 08. Page layout and pagination | Page sizes, margins, breaks, headers/footers, figures/captions, actual thumbnails vs outline | No fake page-count proxies. Exit: laid-out pages agree with print fixture |
| 09. Import/export pipeline | PDF, DOCX, Markdown/text and profile-specific formats with fidelity contracts | No perfect DOCX round trip without proof. Exit: representative interchange fixtures |
| 10. Seshat foundation | Project files, references, notes, concepts, relationships and evidence-backed graph with navigation | No random-node production graph. Exit: real provenance and bidirectional linking |
| 11. Review and versioning | Diff, comments, tracked changes, compare/restore, user-visible revisions | No silent destructive operations. Exit: restoration/review tests |
| 12. Component-aware AI | Consent-aware provider adapters, document+source retrieval, selection/section scoped proposals and conflict-safe accept/reject | Not necessary to manually author. Exit: unrelated content invariant passes |
| 13. Desktop packaging | Assess Electron/Tauri or alternatives, filesystem adapters, updates, sandbox/security | Not a second product codebase. Exit: approved ADR and reproducible builds |
| 14. Hardening and release evidence | Accessibility, long-document speed, export correctness, upload security, failure/recovery and cross-platform QA | No readiness claim from demos alone. Exit: signed acceptance matrix |

Milestones overlap only when contracts are explicit and a review accepts the dependency. Research and accessibility checks must continue alongside implementation rather than appear only at the end.

## Immediate development decisions

- Define what a canonical document can represent **before** implementing style/template/export plugins independently.
- Validate pagination and PDF fidelity early with representative long guides; they are architecture risks.
- Establish one package manager, lockfile and CI after agreeing the repo convention.
- Determine local storage, encryption/sync boundaries and privacy requirements before adding external AI or cross-device sync.
- Build a minimal end-to-end journey: create → edit → save → reopen → preview real pages → PDF.
- Track [requirements](SPECIFICATIONS.md) by ID and use [ADRs](docs/decisions/ADR-0001-product-direction.md) for irreversible decisions.

## Evidence and prioritisation

The [research register](docs/research/evidence-register.md) records published sources and licensing questions; it is not evidence that every document family has been fully validated. Priorities may change after spikes, user tests, and technical proof.

## Foundation reconciliation gate (26 November 2026)

Before milestone 02, review the existing foundation PR, recover approved walkthrough source and visual assets, reconcile product and architecture decisions against them, verify the Canva brand exports and record a baseline for implementation. See [experience handoff](docs/design/walkthrough.md) and [documentation index](docs/README.md). The next functional milestone remains create → edit → save → reopen → actual page preview → PDF, not further speculative design expansion.
