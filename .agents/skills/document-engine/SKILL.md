---
name: document-engine
description: Design, implement, or review THOTH's canonical semantic document model, editor adapters, scoped editing, undo/redo, persistence integration, and stable component IDs. Use for document data or editing changes; not visual-only restyling.
---

# Document engine

## Repo contract

Read [AGENTS.md](../../../AGENTS.md), [PRODUCT.md](../../../PRODUCT.md), [SPECIFICATIONS.md](../../../SPECIFICATIONS.md) and [ROADMAP.md](../../../ROADMAP.md) before work. Current main is a prototype. Do not assert proposed functionality already works. Preserve THOTH name and existing ibis logo. Work on a bounded branch and PR, never directly on main.

## Common safety and evidence

- Define the user-visible task, scope, relevant requirement IDs, dependencies and a testable done condition.
- Inspect live repository code and existing tests before proposing edits; coordinate with open PRs and do not overwrite uncommitted or concurrent work.
- Prefer reversible, narrowly scoped modifications. Protect unrelated content, component IDs and user data. Never silently rewrite a whole document.
- Distinguish *planned*, *implemented*, *tested* and *verified*. Report test commands and real outcomes rather than inferred success.
- Explain unverified assumptions, data migration needs, privacy impact, accessibility and export impact in the PR.


## When to use

Changes to canonical representation, rich text, block components, editor integration, selection mapping, document IDs, migrations, load/save, cut/paste, undo/redo or scoped edit transactions. Relevant IDs: CORE-001–004, AUTH-001, AI-001, PERF-002.

## Procedure

1. Identify current data flow in `src/components/PaperEditor.tsx` and related state. Confirm whether the proposed canonical model or persistence actually exists.
2. Write down the invariant: stable document ID/revision, component IDs and order, typed relationships, marks and style references must survive round trips. Define migration/compatibility behaviour **before** changing stored shapes.
3. Prefer a platform- and editor-independent domain schema. Keep BlockNote-specific details in an adapter; document any unavoidable loss of information.
4. Specify an operation protocol with explicit document revision, target IDs, operations and preconditions. Apply manual and AI-approved edits through the same validated command path.
5. Preserve selection and undo across operations. Handle stale revisions, conflicts, deletion and errors without silent replacement or data loss.
6. Implement the narrowest change and add representative fixtures: long paragraphs, mixed styles, headings, tables, figures with captions, nested content and semantic script/panel components as applicable.
7. Test create → edit → save → reload → reopen and verify IDs, order, text, media links and style metadata. Distinguish a demo from durable persistence.

## Required verification

Tests for serialization round trips, precision scope, undo/redo, stale revision conflict and failure/recovery (when those capabilities are in scope). Run `npm run test`, `npm run lint`, `npm run build` where possible. Capture failures and untested scenarios.

## Stop and ask

Before switching editor engines, changing canonical schema incompatibly, deleting or migrating persisted user content, or choosing a cloud backend. Consult [architecture overview](../../../docs/architecture/overview.md) and [editor engine evaluation](../../../docs/architecture/editor-engine.md).
