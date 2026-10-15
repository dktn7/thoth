# ADR-0001 — Product direction and architectural constraints

**Status:** Accepted product direction; **individual implementation choices remain open**. **Date:** 2026-10-16.

## Context

The original THOTH idea addressed the frustration of building sophisticated documents with Word and general AI tools that ignored precise editing boundaries. Later conversations broadened the intended user base from business guides and SOPs to professional technical and creative documents. The existing code, built as a Lovable React prototype, does not yet implement durable documents or genuine page layout.

## Decision

THOTH remains a **manual-first, general-purpose professional authoring platform** with optional, transparent, project-aware AI. Retain the THOTH name and existing ibis logo. Name the knowledge map **Seshat**. Build a canonical editor-independent semantic document model, local-first target and browser-first architecture. Require actual page fidelity, export contracts, reversible edits, provenance, accessible workflows and researched, overridable document guidance.

## Consequences

- Architecture, styles, templates, persistence, Seshat and exports must share stable IDs and compatible semantics.
- BlockNote remains useful for the prototype but is *not* permanently selected; evaluate Tiptap/ProseMirror before deep editor lock-in.
- A decorative random graph cannot be labelled a knowledge store; headings-as-pages cannot be labelled literal page thumbnails.
- AI is optional. It may understand wide context but only apply narrowly authorised changes after review.
- Work is implemented in bounded milestones and reviewable PRs. No claims of parity or deployment before verification.

## Explicitly excluded

Email/calendar/task personal OS, forced AI-generated formatting, compulsory industry templates, silent whole-document replacement, logo redesign during foundational work.

## Follow-up ADRs required

Editor selection, canonical schema/migration, page layout/export engine, local storage/sync privacy, and desktop packaging decision. [PRODUCT](../../PRODUCT.md) and [roadmap](../../ROADMAP.md) contain detailed requirements and sequence.
