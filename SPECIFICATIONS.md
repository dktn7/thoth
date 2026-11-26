# THOTH — Product requirements

**Status:** Proposed requirements; not evidence of implementation. **Updated:** 2026-11-26.

These requirements derive from the owner's original THOTH conversation and subsequent product refinement. The code on main is an early prototype. A status changes to Implemented only after a linked implementation change; Verified requires recorded acceptance-test evidence.

## Reading requirements

- **P0:** foundation or release-blocking architectural decision; **P1:** important product workflow; **P2:** later expansion.
- **Status:** Planned / In progress / Implemented / Verified / Deferred. Planned means not started; In progress means active work; Implemented means a linked implementation exists but acceptance is not yet fully verified; Verified means acceptance criteria have recorded passing evidence; Deferred means intentionally postponed.
- **Acceptance criteria** are tests to run, not assertions of successful tests. If a requirement references another ID, that dependency must be resolved first.
- Requirements describe expected behaviour, not a commitment to a particular library. [Product principles](PRODUCT.md) govern trade-offs; [roadmap](ROADMAP.md) supplies sequencing.

## Requirement catalogue

### CORE-001 — Canonical document representation

- **Requirement:** Store documents in a versioned, editor-independent semantic model with stable component IDs and explicit relationships.
- **Rationale:** Prevent format loss and vendor lock-in.
- **Acceptance:** A document round-trips through serialization with stable IDs, ordered content, metadata, and no content loss.
- **Priority / status:** P0 / Planned
- **Dependencies:** —

### CORE-002 — Create, open and reopen

- **Requirement:** Create and reopen named documents with persisted content and metadata.
- **Rationale:** Writing must survive refreshes.
- **Acceptance:** Save, reload, and reopen a multi-component document without differences; recovery is tested.
- **Priority / status:** P0 / Planned
- **Dependencies:** CORE-001

### CORE-003 — Autosave and recovery

- **Requirement:** Autosave changes with visible status, conflict handling, and recoverable previous state.
- **Rationale:** Avoid silent data loss.
- **Acceptance:** Interrupted editing retains a recoverable revision; failures are clearly displayed.
- **Priority / status:** P0 / Planned
- **Dependencies:** CORE-001, CORE-002

### CORE-004 — Manual editing and undo

- **Requirement:** Support selection-level manual editing, reliable undo/redo, keyboard navigation, and search.
- **Rationale:** AI cannot be a prerequisite.
- **Acceptance:** Core editing completes without sign-in to an AI model; undo restores prior content and structure.
- **Priority / status:** P0 / Planned
- **Dependencies:** CORE-001

### AUTH-001 — Semantic blocks

- **Requirement:** Represent headings, paragraphs, lists, tables, figures, captions, script elements, and references as typed components.
- **Rationale:** Meaning must survive style changes and exports.
- **Acceptance:** Component type, properties and parent links persist after edit/reopen.
- **Priority / status:** P0 / Planned
- **Dependencies:** CORE-001

### AUTH-002 — Images and captions

- **Requirement:** Allow image upload, resize, placement, editable caption, alt text and figure relationship.
- **Rationale:** Guides depend on media.
- **Acceptance:** Moving a figure retains caption association; export respects grouping where physically possible.
- **Priority / status:** P1 / Planned
- **Dependencies:** AUTH-001, CORE-003

### AUTH-003 — Navigation and true page previews

- **Requirement:** Provide separate outline navigation and previews of actual paginated pages.
- **Rationale:** A heading index is not a page reel.
- **Acceptance:** Previews show the laid-out text, images and styling; page numbers match print preview.
- **Priority / status:** P1 / Planned
- **Dependencies:** LAY-001

### STY-001 — Named styles

- **Requirement:** Create, inherit, edit, import/export and apply paragraph, character, list and table styles.
- **Rationale:** Repeated formatting should remain consistent.
- **Acceptance:** Updating a shared style updates every eligible instance without changing text content.
- **Priority / status:** P1 / Planned
- **Dependencies:** CORE-001, AUTH-001

### STY-002 — Themes and fonts

- **Requirement:** Provide theme tokens, custom-font handling with licensing/fallbacks, and colour/contrast controls.
- **Rationale:** Professional output requires consistent typography.
- **Acceptance:** A theme edit updates previews and export; missing fonts are reported.
- **Priority / status:** P1 / Planned
- **Dependencies:** STY-001, EXP-001

### TPL-001 — Template library

- **Requirement:** Create, choose, save and edit templates for diverse document families without rigid locks.
- **Rationale:** One workflow serves many domains.
- **Acceptance:** A template creates an editable document with styles, structure and optional prompts; blank remains available.
- **Priority / status:** P1 / Planned
- **Dependencies:** CORE-001, STY-001

### TPL-002 — Reusable components

- **Requirement:** Store insertable and editable covers, callouts, requirement blocks, scene structures and other building blocks.
- **Rationale:** Speed should not sacrifice control.
- **Acceptance:** Inserted components can be independently edited and exported without altering the source template.
- **Priority / status:** P1 / Planned
- **Dependencies:** AUTH-001, TPL-001

### LAY-001 — Page layout and pagination

- **Requirement:** Support paper size, margins, breaks, headers/footers, numbering and layout measurement.
- **Rationale:** Thoth targets word-processing fidelity.
- **Acceptance:** A multi-page fixture uses consistent layout in editor preview and PDF, including controlled page breaks.
- **Priority / status:** P0 / Planned
- **Dependencies:** CORE-001, AUTH-001

### EXP-001 — Faithful PDF publishing

- **Requirement:** Export rendered document pages to a readable, navigable PDF with tested fonts, links and figure placement.
- **Rationale:** Publishing is a core outcome.
- **Acceptance:** Multi-page exports match approved fixtures within documented tolerances and maintain links/TOC.
- **Priority / status:** P0 / Planned
- **Dependencies:** LAY-001, STY-001

### EXP-002 — Interchange formats

- **Requirement:** Import/export DOCX, Markdown, text and image assets when a fidelity contract is defined.
- **Rationale:** People need interoperable results.
- **Acceptance:** Document known supported properties, losses and warnings; round-trip representative fixtures.
- **Priority / status:** P2 / Planned
- **Dependencies:** CORE-001, EXP-001

### SES-001 — Project knowledge records

- **Requirement:** Store user-managed sources, notes, image assets, concepts and explicit links per project.
- **Rationale:** Seshat must reflect real project knowledge.
- **Acceptance:** Every visible node maps to a persistent record, can open its source, and can be deleted safely.
- **Priority / status:** P1 / Planned
- **Dependencies:** CORE-002

### SES-002 — Bidirectional traceability

- **Requirement:** Link document components to source records with provenance, revisions and reversible link edits.
- **Rationale:** Users must inspect why a claim or image appears.
- **Acceptance:** From a component open linked source; from source locate the component; broken links are visible.
- **Priority / status:** P1 / Planned
- **Dependencies:** SES-001, AUTH-001

### AI-001 — Scoped reviewable edits

- **Requirement:** AI proposals target explicit component IDs and document versions; changes are reviewed, accepted or rejected.
- **Rationale:** Prevent broad accidental rewriting.
- **Acceptance:** Reject and accept both work; unrelated components remain byte-for-byte unchanged; stale proposals cannot overwrite newer edits.
- **Priority / status:** P1 / Planned
- **Dependencies:** CORE-001, CORE-003, AUTH-001

### AI-002 — Context and model transparency

- **Requirement:** Show included sources, unprocessed assets, model choice and limitations; do not make unsupported claims.
- **Rationale:** Trust requires provenance.
- **Acceptance:** Every request shows scope and context; unavailable context is called out; disabled AI leaves manual workflow intact.
- **Priority / status:** P1 / Planned
- **Dependencies:** SES-001, AI-001

### COL-001 — Review history

- **Requirement:** Offer versions, comments, diffs and reversible review operations when implemented.
- **Rationale:** Professional authoring needs accountability.
- **Acceptance:** A reviewer can inspect revisions and restore a version without losing the current one.
- **Priority / status:** P2 / Planned
- **Dependencies:** CORE-003, AI-001

### ACC-001 — Accessible authoring

- **Requirement:** Keyboard support, focus states, semantic headings, alt text, contrast guidance and suitable screen-reader labels.
- **Rationale:** The interface and output should be usable.
- **Acceptance:** Documented keyboard and accessibility checks pass for core authoring and publishing fixtures.
- **Priority / status:** P1 / Planned
- **Dependencies:** CORE-004, EXP-001

### SEC-001 — Protected data

- **Requirement:** Keep project data private by default, validate uploads and avoid exposing model keys or private documents.
- **Rationale:** Internal screenshots and notes may be sensitive.
- **Acceptance:** Permission boundaries, upload restrictions and secret handling are tested before remote sync is enabled.
- **Priority / status:** P0 / Planned
- **Dependencies:** CORE-002

### PLT-001 — Browser-first platform adapters

- **Requirement:** Separate document, storage and export domain logic from browser or desktop capabilities.
- **Rationale:** Enable future desktop without rewriting documents.
- **Acceptance:** Same document fixture loads through platform-neutral interface and browser adapter.
- **Priority / status:** P1 / Planned
- **Dependencies:** CORE-001

### PLT-002 — Desktop-readiness

- **Requirement:** Assess desktop packaging after core authoring works in the browser.
- **Rationale:** Prevent premature platform fragmentation.
- **Acceptance:** Decision record compares packaging options, security, filesystem and updater requirements.
- **Priority / status:** P2 / Planned
- **Dependencies:** PLT-001, EXP-001

### PERF-001 — Long document performance

- **Requirement:** Test large documents, many images and bulk operations with cancellable progress.
- **Rationale:** Professional guides can be lengthy.
- **Acceptance:** Benchmarked fixtures and budgets recorded before declaring a release; no data loss under cancellation.
- **Priority / status:** P1 / Planned
- **Dependencies:** CORE-003, LAY-001

### PERF-002 — Editor engine decision

- **Requirement:** Evaluate installed BlockNote against Tiptap/ProseMirror against required editing, pagination and export semantics.
- **Rationale:** Avoid choosing an engine by familiarity alone.
- **Acceptance:** Decision document compares prototypes, licenses, accessibility, extensibility and migration risk.
- **Priority / status:** P0 / Planned
- **Dependencies:** CORE-001, LAY-001

## Implementation evidence

For each completed requirement, link a PR, automated test or verification report and record any limitations. A demo screenshot alone does not certify correctness, export fidelity, privacy or performance. Requirements will be refined when the canonical model and editor evaluation are complete.
