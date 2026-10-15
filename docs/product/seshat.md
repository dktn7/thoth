# Seshat · Interactive Knowledge Map

**Status:** product specification, not implemented. THOTH is the product; Seshat is a user-controlled knowledge feature, **not** a second AI personality.

## Purpose

Seshat makes the research, screenshots, notes, decisions, assets and relationships behind a document inspectable and useful. It should reduce repeated context explanations and help users find the evidence a component draws on. The visual presentation may be brain-shaped or graph-based; meaning takes priority over animation.

## Sources and records

- Project files: PDFs, documents, screenshots, notes and user-authored context with import/source metadata.
- Document components: paragraphs, headings, tables, figures/captions, scenes, panels, requirement IDs and game-mechanics entries.
- Concepts: terms, entities, characters, locations, procedures or decisions the user elects to track.
- Connections: cites/derived-from, explains, supersedes, depicts, supports, contradicts, belongs-to and user-defined relationships.

Each node has a durable ID, type, label, processing status and a pointer to an actual accessible record. Edges have provenance, creating actor, optional evidence and review state. Randomly generated nodes may be a demo effect, but must never be passed off as knowledge records.

## Expected interactions

- Open a source from its node and jump to the linked section of a document.
- From a selected document component, use **Show in Seshat** to inspect its references.
- Add, rename, tag, group, unlink, merge or remove records without editing unrelated document content.
- Review suggested relationships, accept/reject them and inspect what evidence was used.
- Browse by source, asset, concept, document, connection type, status and search.
- Indicate unprocessed, missing, stale, conflicting or unauthorised context clearly.
- Synchronise user edits, including component moves, with graph references where possible; show broken links when reconciliation fails.
- Offer understandable list and search alternatives to a spatial visualisation and support keyboard navigation.

## Non-AI vs optional AI

Seshat must support manual record creation, tags and explicit links without AI. Optional indexing, visual analysis, entity extraction, similarity search or suggested placements can assist **only with transparency**. Any factual relationship inferred by AI remains a reviewable suggestion until accepted.

## Trust and permissions

The owner controls which project files enter Seshat and whether they are used by an AI provider. Provenance must be distinguishable from generated hypotheses. Deleting a source must explain what links it affects; retaining extracted content after deletion requires an explicit policy. Search results must respect project access rights.

## Minimum credible milestone

Import two real source files and two screenshots into one project; persist and reopen them; see corresponding nodes; link a screenshot to an editable figure and a cited paragraph; navigate both directions; delete a link; verify results after restart. No 3D engine requirement should block this simple test.

## What exists today

The code in src/components/NeuralBrainViewer.tsx generates 40 random nodes and 60 edges and highlights them based on active heading position. It has no backing source records. Reuse its visual ideas only if they improve access to a real knowledge map.

Requirements: [SES-001 and SES-002](../../SPECIFICATIONS.md); supporting [architecture](../architecture/overview.md).
