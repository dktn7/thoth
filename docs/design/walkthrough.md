# THOTH · Experience handoff

Status: reconciliation draft, 26 November 2026. Based on owner-approved design direction from prior conversations; original interactive source and screenshots have not yet been recovered or inspected for this commit.

## Preserve

- Navy and forest-green blended visual identity, with light/dark contrast and logo legibility.
- Approved original ibis identity, custom icon direction and AI identity; obtain exact assets from the Canva Thoth Brand Kit before replacing anything.
- Word-like editing simplicity, flexible object placement, resizing and approachable formatting.
- Connected Create, Design and Seshat experiences; avoid isolated mockup pages.
- Visual baseline v1.3.4 and interactive editor reference v1.3.5 (reported version references; source verification outstanding).

## Proposed minimum connected journey

Open workspace → create/open document → edit and format content → place and resize an object → optionally inspect project knowledge in Seshat → save → reopen → preview actual pages → export.

This is a proposed acceptance journey, not a transcript or a claim that every step was implemented in the walkthrough.

## Reconciliation

| Area | Existing main source | Required next evidence |
| --- | --- | --- |
| Workspace | Three-panel Index.tsx | Recover walkthrough and map routes/states |
| Editing | PaperEditor.tsx | Compare interaction details and engine capabilities |
| Navigation | DocumentThumbnails.tsx | Distinguish outline and paginated thumbnails |
| Knowledge | NeuralBrainViewer.tsx | Align with Seshat spec and real data |
| Brand | Existing raster logo | Obtain approved Canva variants, exact colours and typography |
| Persistence/export | Not established by prior inspection | Verify source and build end-to-end tests |

## Acceptance before implementation

Recover original prototype source and approved screenshots; record asset provenance, exact interaction states and owner decisions; compare with current source; resolve conflicts in requirements and architecture; create bounded implementation issues. Do not reconstruct missing screenshots or invent approved design tokens. Keep manual editing usable without AI.

See [brand guidance](../assets/brand/README.md), [roadmap](../../ROADMAP.md) and [requirements](../../SPECIFICATIONS.md).

## Recovered v1.3 journey contracts

Source: [Canva v1.3 User Journeys & Page States (Draft)](https://www.canva.com/d/rCGaKjHgZLXKBkv), read directly on 26 November 2026. This plan reports 32 existing design routes and 12 mapped journey contracts; it explicitly describes eight below. These counts concern the design plan, not implemented GitHub routes.

| ID | Priority | Contract | Critical states |
| --- | --- | --- | --- |
| J01 | P0 | Start project and reach editable document without mandatory AI | Skip onboarding, invalid input, empty Home, first success |
| J02 | P0 | Create document; choose type and independent style; set page properties; edit and save | Blank/example, caret insertion, unsupported element, autosave |
| J03 | P0 | Create ↔ Design with linked content and recoverable selection | Linked/duplicate, unsaved variation, selection, layer undo |
| J04 | P0 | Seshat evidence round trip; return to exact text selection | No records, uncertain link, missing source, fullscreen |
| J05 | P0 | Save, recovery and versions; report saved only on success | Saving, saved, offline queued, failed, restore |
| J06 | P1 | Import source, check provenance/rights, cite exact claim, view in Seshat | Unsupported source, permission, extraction, metadata |
| J07 | P1 | Native Seshat Insights: inspect evidence, accept/dismiss relationship | No insights, low confidence, conflicting/stale evidence |
| J08 | P1 | Optional AI Review: scoped diff, selective acceptance/rejection and exact undo | Unconfigured/unavailable model, cancellation, scope mismatch |

Build the five P0 journeys against shared content IDs before adding new top-level pages. Preserve identical behaviour across light/dark modes, keyboard/focus paths and explicit error states. The remaining journey contracts and actual interactive prototype still require recovery; this draft is not evidence of implementation.
