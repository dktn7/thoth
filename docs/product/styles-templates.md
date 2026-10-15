# Styles, themes, templates and reusable content

**Status:** product rules and intended manual workflow, not completed features.

THOTH aims for document-authoring depth comparable to serious word processors: formatting should be expressive, consistent, reusable and transparent. Research-informed profile structures sit **on top** of these shared capabilities; they do not replace them.

## Terms that must stay distinct

- **Direct formatting:** a local override on a paragraph, run or component.
- **Named style:** reusable definitions for paragraph, character, lists, tables, captions, citations, script elements and components, with optional inheritance.
- **Theme:** coordinated document-level typographic, colour, spacing and effect tokens referenced by styles.
- **Template:** editable starting document, optionally including layout, styles, sections, prompts, covers and fields.
- **Reusable component:** insertable saved content (figure block, disclaimer, callout, signature, requirement record, scene or comic panel). A component can reference a style without becoming a whole template.
- **Document profile:** researched conventions, semantic components, rules, prompts and export expectations for a family of documents. Profiles should be defeasible and versioned.

## Manual-first expectations

The author can create, duplicate, rename, delete, inherit, inspect and apply styles; update all instances of a style without rewriting their text; set direct formatting consciously; see overrides; and preview the effect before applying broad style updates.

Support font family/size, emphasis, colour, highlighting, alignment, indentation, spacing, tab stops, columns, bullets and numbering; table borders, fills and accessibility headers; page sizes, orientation, margins, headers/footers and page numbers. Covers, linked figures and captions, table of contents, bookmarks, references, notes and page breaks are layout/semantic operations rather than visual guesses.

Save sets at document, project or personal scope where authorised. Provide a blank template, user-created templates and research-informed curated templates; users can remove sections and change styles.

## Custom fonts and branding

A font picker does not guarantee file availability or legal redistribution. Document import/export must record a fallback strategy, warn about unavailable font metrics, validate embed licences and keep preview/export consistent where supported. Future brand presets can coordinate colours and typography without hard-coding a company into THOTH.

Existing THOTH mark is distinct from a document's brand: inserting a company logo in a guide should not automatically restyle THOTH's application header.

## Deterministic guidance examples

Possible rule-based checks include: skipped heading level, missing figure caption, duplicate requirement ID, broken cross-reference, incomplete profile section, unresolved link, low contrast and caption separated from a figure in pagination. Each check must explain its basis, have scope and severity, be dismissible, and avoid declaring a stylistic convention a mandatory law.

## Optional AI

AI can suggest a style adjustment, draft a caption from a consented image, locate relevant figure placement or propose a multi-section restyle. It must use the same style IDs and transaction paths as manual commands, show scope and a preview, and let the author accept or reject. No automatic destructive restyling.

## Fidelity acceptance fixtures

A long business guide, a game design document and a script should each preserve document styles, semantics, image-caption grouping, paper layout and references through save/reopen and supported exports. Record where DOCX or Markdown cannot represent an element. [Requirements](../../SPECIFICATIONS.md) [Document profiles](document-profiles.md).
