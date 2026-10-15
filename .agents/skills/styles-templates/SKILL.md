---
name: styles-templates
description: Implement or assess THOTH's Word-grade manual formatting, named styles, document themes, user-editable templates, reusable components, custom fonts, and document profiles, separating researched rules from optional AI.
---

# Styles, themes and templates

## Repo contract

Read [AGENTS.md](../../../AGENTS.md), [PRODUCT.md](../../../PRODUCT.md), [SPECIFICATIONS.md](../../../SPECIFICATIONS.md) and [ROADMAP.md](../../../ROADMAP.md) before work. Current main is a prototype. Do not assert proposed functionality already works. Preserve THOTH name and existing ibis logo. Work on a bounded branch and PR, never directly on main.

## Common safety and evidence

- Define the user-visible task, scope, relevant requirement IDs, dependencies and a testable done condition.
- Inspect live repository code and existing tests before proposing edits; coordinate with open PRs and do not overwrite uncommitted or concurrent work.
- Prefer reversible, narrowly scoped modifications. Protect unrelated content, component IDs and user data. Never silently rewrite a whole document.
- Distinguish *planned*, *implemented*, *tested* and *verified*. Report test commands and real outcomes rather than inferred success.
- Explain unverified assumptions, data migration needs, privacy impact, accessibility and export impact in the PR.


## When to use

Paragraph/character/list/table styles, inheritance, theme tokens, font pickers, style libraries, covers, headers, template catalogues, reusable blocks, profile-based authoring prompts or deterministic formatting checks. Relevant IDs: STY-001–002, TPL-001–002, AUTH-001 and LAY-001.

## Procedure

1. Clarify whether the request affects a **style** (reusable formatting), **theme** (coordinated tokens), **template** (editable starting document), **component** (insertable content) or **profile** (domain conventions and checks). Do not conflate these.
2. Inspect the canonical document model and editor adapter contracts; do not invent a second representation inside a toolbar.
3. Define inheritance, named style identity, direct overrides, propagation and document/project/personal scope. Specify defaults and versioning.
4. Build each manual workflow before optional AI: create/rename/duplicate/edit/apply/preview/remove a style or template, and undo changes.
5. For a curated profile, record evidence level (formal standard vs published framework vs convention vs THOTH decision), source/version, licence, intended task, variations and optionality. Do not copy protected templates without rights.
6. Plan font availability, metrics, embedding rights and fallback. Test contrast, keyboard controls and exposed semantic roles.
7. Check that a style update does not change underlying wording, image/caption relationship or other components outside the declared scope.

## Required verification

Test style propagation and override precedence, template create/reopen/customisation, blank-document escape route, changed font fallback and preview/export parity. Report the exact versions and fixtures tested.

## Stop and ask

Before replacing editor engine, changing an established brand asset, treating a community format as mandatory, bundling unlicensed fonts or rewriting documents to apply styles. See [styles and templates](../../../docs/product/styles-templates.md) and [profiles](../../../docs/product/document-profiles.md).
