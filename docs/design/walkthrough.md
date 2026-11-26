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
