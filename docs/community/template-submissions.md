# THOTH template collections and contribution policy

**Status:** designed experience; submission/install infrastructure is **not implemented**.

## Collections

1. **THOTH Signature:** official templates based on the *existing* blue ibis / green-eye brand. They demonstrate real THOTH capabilities through polished, complete, editable worked examples—not empty heading lists. Examples: THOTH Codex (professional overview), Birth of THOTH (comic based on the real README origin, fictional adaptation clearly labelled), Building THOTH (technical docs), Seshat Chronicles (storyboard/animation) and a complete game-design showcase.
2. **Professional / Generic:** official, non-THOTH-branded Minimal, Classic, Corporate and Creative themes suitable for users' own output.
3. **Community:** third-party templates reviewed for safety, attribution and compatibility, distinct from official/approved branding.
4. **My Templates:** private templates saved by the author; they are never published without explicit action.

## Independent choices

**Content type** (GDD, business guide, code/Markdown handbook, animation bible, comic/manga script, technical specification, etc.), **visual theme** and **starting content** (blank structure or complete worked example) should be independently selectable. Changing theme must not erase content, spreadsheet data, code blocks or semantic panel/figure relationships.

## Submission metadata (proposed schema)

- Template ID, version, title, description and author.
- Author-controlled licence, asset attribution and review/verification status.
- THOTH compatibility version, required component types and supported exports.
- Document family/profile, layout preset, style/theme IDs and font requirements.
- Preview images and an **editable** example or clean starter, plus clear indication of fictional example data.
- Accessibility notes, known limitations and required capabilities or permissions.

## Review checklist

- Correct attribution and rights for artwork, images, fonts, text and starter code.
- No executable macros/scripts or covert external data calls; user consent for any future active component.
- Fully editable worked content, no lorem ipsum masquerading as a complete example.
- Representative structured content and no claims about unimplemented THOTH tools.
- Styles/fonts/figures/captions survive import, editing, saved reopening and supported export in actual fixtures.
- Brand mark preserved on official THOTH templates; community submissions cannot imply official endorsement.
- Documentation demonstrates how to adapt, duplicate and remove worked example material.

## Release gate

Do not enable third-party template importing or publish a gallery until the canonical content model, asset storage, import validation, provenance and safety controls are in place.

See [styles/templates](../product/styles-templates.md), [document profiles](../product/document-profiles.md), [Developer Hub](../product/developer-hub.md).
