# Contributor and coding-agent instructions — THOTH

Read [PRODUCT.md](PRODUCT.md), [SPECIFICATIONS.md](SPECIFICATIONS.md), [ROADMAP.md](ROADMAP.md) and the relevant architecture document **before making changes**. The main branch currently contains an early editor prototype, not an implemented Word alternative.

## Non-negotiable scope

- THOTH is a professional, manual-first document studio for business, technical and creative work. It is **not** an email/calendar/task assistant or merely a Word-looking rich-text demo.
- Preserve the THOTH name and original ibis-head mark at src/assets/thoth-logo.jpg. **Seshat** names the planned Interactive Knowledge Map.
- Existing BlockNote use is an implementation detail; the long-term editor engine remains an open decision.
- Keep editor data, semantic document model, persistent storage, page layout, Seshat and export contracts distinct. A change affecting these boundaries requires a documented decision.
- Ordinary formatting, template selection and rules should not require AI. AI must be optional, scoped, reviewable, non-destructive and clearly attributed.
- Never claim an unverified or planned feature is already live. Update docs when capability status actually changes.

## Working method

1. Start from a current main/ref and check concurrent branches and pull requests. **Never push directly to main.**
2. Work in a named branch for a bounded issue. Avoid large unrelated changes or speculative dependency updates.
3. Refer to requirement IDs and state whether work is prototype, spike, implemented, verified or deferred.
4. Design/document the schema and migration effects before introducing persisted properties or editor-specific data formats.
5. Preserve content, IDs, manual edits, undo/redo behaviour, accessibility and export pathways. No silent whole-document rewrites.
6. Test normal edits, invalid inputs, refresh/reopen, cancellation, large content and output fidelity where applicable. State what was *not* tested.
7. Submit a descriptive PR with scope, evidence, screenshots for UI changes, and requirement impact. Do not self-merge without review.

## Architecture quality gates

Canonical model compatibility; no coupling of saved user content solely to a vendor's private JSON; component-aware operation scopes; actual laid-out page previews; upload privacy; traceable Seshat records rather than random production nodes; export parity; reproducible dependency resolution; platform-neutral core.

Do not add flashy UI, a new agent role, model integration, cloud backend or extra product category without explaining what current user task it improves and why it fits the roadmap.

## Repo current-state caveats

Main has a hardcoded BlockNote demo, heading-based tile navigation, an animated random graph and header icons without save/export handlers. The available tests and environment have **not** been validated by this documentation PR. Do not use claims about local unpushed work as evidence of changes on GitHub.

## Source hygiene

External material must be marked formal standard, published framework, professional guidance, community example or THOTH choice, with date/version, licence and applicability noted. Do not copy copyrighted templates or expose private material in fixtures.
