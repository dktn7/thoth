# THOTH architecture — proposed system boundaries

**Status:** architecture direction, not implemented architecture. See [PRODUCT](../../PRODUCT.md) and [requirements](../../SPECIFICATIONS.md).

## Observed main-branch prototype

The repository uses Vite, React 18, TypeScript, Tailwind, BlockNote 0.22.x, React Resizable Panels and React Three Fiber. The workspace connects a heading-based navigation panel, a BlockNote demo and the animated Neural Brain via WorkspaceContext. These are real UI components, not evidence of persistence, page layout, AI, source records or export.

## Proposed layers and dependency direction

1. **Canonical document domain** — versioned project/document identifiers, stable component IDs, typed semantic components, rich text, styles, media records, relationships, revisions, source citations, layout intent and metadata. Independent of BlockNote, Tiptap, React and file format. Deterministic validation/migrations operate here.
2. **Editor adapter** — translate between the canonical model and the interactive editor, maintain selections, transactions, undo/redo and node mapping. Preserve IDs where valid. Reject unsupported changes rather than dropping content silently.
3. **Layout/preview engine** — measure content, paginate into actual pages, manage media-caption grouping, headers, footers and paper settings. Provide a shared page description used by thumbnails and PDF output wherever feasible.
4. **Persistence adapters** — local-first store, autosave queue, recovery snapshots, schema migration, files and optional later sync. Storage failures are visible; documents are never assumed saved until durable confirmation.
5. **Export/import adapters** — PDF and interoperable formats with explicit preservation and loss contracts, semantic-to-format mapping and regression fixtures.
6. **Seshat knowledge layer** — source, concept, asset and relationship records linked to document component IDs. Provenance, permissions, state and history are first-class. See [Seshat](../product/seshat.md).
7. **AI integration boundary** — optional provider connectors, consented context retrieval and operation proposals. It never directly performs unrestricted document replacement; validated edits pass through the same transactional editor commands as manual edits.
8. **Platform adapters** — browser storage, file selection, printing and later desktop file-system/OS capabilities, without changing the document domain.
9. **Workspace presentation** — resizable/dockable panels, paper editor, outline, literal page reel, asset controls, Seshat and AI review UI. Derived state must not become a second source of truth.

## Canonical model design sketch (not a final schema)

    Project: id, title, documentIds, assetIds, sourceIds, settings
    Document: id, schemaVersion, revision, title, profileId?, blocks[], styleSheetId, pageSettings, metadata
    Block: id, type, parentId?, order, properties, content?, childIds[], links[]
    Figure: assetId, captionComponentId?, altText, sizing, placement
    Source: id, kind, locator?, contentHash?, processingState, accessScope
    Link: id, fromRef, toRef, relationshipType, evidence?, confidence?, reviewedAt?
    ChangeProposal: documentId, baseRevision, targetIds[], operations[], provenance, status

IDs, revisions, marks, nesting and serialization invariants must be proven in fixtures. Caption text is independent and editable yet remains structurally attached to its figure. Styles are referenced by ID with local overrides; explicit layout intent is distinguished from computed pages.

## Editing and conflict-safe change protocol

Manual and AI actions use one command/transaction boundary. A proposed AI action identifies document revision and target IDs and must be checked for stale state, allowed operations and expected types. Preview a minimal diff, then accept/reject. Never silently call a replace-the-whole-document command for a small selection request.

## Data security

Treat uploaded internal screenshots and documents as private. Store and transmit content to external AI only after clear user consent; protect tokens, validate upload size/type/content, and define retention and access control before cloud sync. The proposal does not assert that existing code already enforces these policies.

## Open decisions / proof needed

- Canonical schema format, migration/version strategy and normalised vs nested representation.
- Chosen editor engine, custom blocks, selection-to-model mapping.
- Pagination and export engine capable of large documents and typography fidelity.
- Storage adapter choice and recovery/conflict strategy.
- Seshat extraction, indexing and optional embeddings strategy, with user-controlled provenance.
- Cross-platform packaging strategy and accessibility/test budgets.

See [editor-engine](editor-engine.md), [platforms](platforms.md) and [ADR-0001](../decisions/ADR-0001-product-direction.md). No implementation acceptance is claimed by this design note.
