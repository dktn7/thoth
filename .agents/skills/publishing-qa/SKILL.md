---
name: publishing-qa
description: Validate THOTH document pagination, literal page thumbnails, print fidelity, PDF/DOCX/Markdown export, fonts, cross-references, accessibility and figure-caption placement; use when implementing or reviewing publishing.
---

# Publishing and export QA

## Repo contract

Read [AGENTS.md](../../../AGENTS.md), [PRODUCT.md](../../../PRODUCT.md), [SPECIFICATIONS.md](../../../SPECIFICATIONS.md) and [ROADMAP.md](../../../ROADMAP.md) before work. Current main is a prototype. Do not assert proposed functionality already works. Preserve THOTH name and existing ibis logo. Work on a bounded branch and PR, never directly on main.

## Common safety and evidence

- Define the user-visible task, scope, relevant requirement IDs, dependencies and a testable done condition.
- Inspect live repository code and existing tests before proposing edits; coordinate with open PRs and do not overwrite uncommitted or concurrent work.
- Prefer reversible, narrowly scoped modifications. Protect unrelated content, component IDs and user data. Never silently rewrite a whole document.
- Distinguish *planned*, *implemented*, *tested* and *verified*. Report test commands and real outcomes rather than inferred success.
- Explain unverified assumptions, data migration needs, privacy impact, accessibility and export impact in the PR.


## When to use

Page sizes/margins, page breaks, headers/footers, numbering, literal thumbnails, print preview, figure/caption grouping, style fidelity, fonts, PDF/DOCX import/export or publishing regression. Relevant IDs: LAY-001, AUTH-003, EXP-001–002, ACC-001 and PERF-001.

## Procedure

1. Establish current behaviour from code and a representative rendered fixture. Heading tiles are **not** literal pages; an export icon alone is **not** an exporter.
2. Define source document and canonical model revision, intended paper size/margins, styles, fonts, captions, references and expected output features.
3. Prepare fixtures: cover and TOC, long mixed text, multi-level headings, nested lists, long tables, embedded images/captions, manual breaks, hyperlinks, headers/footers, Unicode and a long document.
4. Render editor and print preview pages and create target exports. Compare **actual laid-out pages** and thumbnail order, numbering, text flow, figure grouping, links and page count.
5. Record unsupported format features and round-trip loss explicitly. A PDF screenshot or visually similar output does not prove semantic accessibility, text selection or metadata integrity.
6. Verify user content is unchanged by export. Check filenames, error handling, recovery from failed export and privacy of embedded assets.
7. Fix scoped defects, rerender the affected fixtures, then retest adjacent pages and regression scenarios.

## Required verification

Publish an evidence table: fixture, output, expected vs actual, observed defect, affected page, fix, rerender result, accessible-structure verification and outstanding limitations. Run lint/test/build as appropriate; do **not** claim screen-reader or Word fidelity without testing those environments.

## Stop and ask

Before changing canonical schema solely to ease export, dropping unsupported content without warning, substituting fake heading screenshots for page previews, or distributing fonts/assets without rights. See [layout/publishing requirements](../../../SPECIFICATIONS.md) and [architecture overview](../../../docs/architecture/overview.md).
