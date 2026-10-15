---
name: seshat-knowledge
description: Build or review Seshat, THOTH's interactive evidence-backed knowledge map, including real file/source nodes, provenance, user-edited relationships, search, linked document components and privacy boundaries.
---

# Seshat · Interactive Knowledge Map

## Repo contract

Read [AGENTS.md](../../../AGENTS.md), [PRODUCT.md](../../../PRODUCT.md), [SPECIFICATIONS.md](../../../SPECIFICATIONS.md) and [ROADMAP.md](../../../ROADMAP.md) before work. Current main is a prototype. Do not assert proposed functionality already works. Preserve THOTH name and existing ibis logo. Work on a bounded branch and PR, never directly on main.

## Common safety and evidence

- Define the user-visible task, scope, relevant requirement IDs, dependencies and a testable done condition.
- Inspect live repository code and existing tests before proposing edits; coordinate with open PRs and do not overwrite uncommitted or concurrent work.
- Prefer reversible, narrowly scoped modifications. Protect unrelated content, component IDs and user data. Never silently rewrite a whole document.
- Distinguish *planned*, *implemented*, *tested* and *verified*. Report test commands and real outcomes rather than inferred success.
- Explain unverified assumptions, data migration needs, privacy impact, accessibility and export impact in the PR.


## When to use

Project files and notes, knowledge records, images, extracted references, citations, concept nodes, edges, knowledge graph UI, source-aware retrieval or navigation between a document component and its context. Relevant IDs: SES-001, SES-002, SEC-001 and AI-002.

## Procedure

1. Verify whether actual records exist. The current `NeuralBrainViewer.tsx` generates random nodes: never describe its visual output as a source-backed graph.
2. Define durable records with stable IDs, type, project scope, source pointer, permission, processing state and provenance. Edges require from/to IDs, relationship type, evidence and review state.
3. Implement the manual workflow first: import, open, categorise, link, unlink, search, delete and navigate. The graph/list must point to persisted objects, not dummy arrays.
4. Link to canonical document components by ID in **both directions**. Handle deleted or moved components and stale links explicitly, without inventing content.
5. Separate verified user-entered relationships from inferred suggestions. Any AI extraction, vision analysis or semantic similarity result must show its status, source and review actions.
6. Ensure private files and internal screenshots are not transmitted to AI/search providers without informed, project-scoped consent and clear indication of what is sent.
7. Make the graph usable via list/search and keyboard navigation; avoid animations that block discovery or add false meaning.

## Required verification

Test import/reopen of two real fixtures, record and link persistence, component-to-source and source-to-component navigation, broken/deleted source handling, permission boundaries, offline/manual path and provenance visibility. Report unverified extraction or indexing quality.

## Stop and ask

Before uploading internal project data to an external service, auto-merging conflicting sources, destructive migrations, or adding AI-driven facts without owner review. See [Seshat product specification](../../../docs/product/seshat.md).
