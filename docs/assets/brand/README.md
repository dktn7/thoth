# THOTH brand asset guidance

**Status:** initial documented identity, not a complete brand kit.

The product name is **THOTH** and the established mark is a minimalist ibis-head symbol with a blue form and small green eye. The existing repository asset is [src/assets/thoth-logo.jpg](../../../src/assets/thoth-logo.jpg). The README and existing ThothHeader already reference that asset; this PR deliberately does not redraw, re-encode or replace the image.

## Usage

- Preserve proportions, shape, orientation and the blue/green contrast of the existing mark.
- Keep enough clear space around the symbol that it is legible at small sizes. A provisional minimum is the diameter of the eye on each side; verify visually before final adoption.
- Prefer a neutral, uncluttered background. Check legibility on light and dark surfaces; do not recolour the logo solely to meet the interface's current accent.
- Use the full THOTH name in introductory contexts. Do not imply Seshat is a separate company: **Seshat · Interactive Knowledge Map** is a feature label.
- Brand tone: intelligent, precise, editorial, professional, modern; Egyptian influence should be restrained and purposeful, not mystical, crowded or gimmicky.

## Current colours

The visible mark is blue with a green eye. The current prototype also uses a more vivid emerald accent (for example #91F26E in NeuralBrainViewer). These are **observations**, not final approved colour tokens. Do not invent exact logo hex values from a raster. A future asset review should sample original source colours and establish accessible UI tokens for primary, secondary, text, hover, and states separately.

## Outstanding production assets

- Approved vector/SVG source master, with traced/verified geometry rather than arbitrary auto-tracing.
- Horizontal and stacked wordmark lock-ups; app icon and favicon; monochrome, light/dark and reduced-size variants.
- Export guidelines: clear space, minimum sizes, approved colour values, contrast, source licences and display tests.
- Explicit usage guidance for placing the product logo vs inserting a user/customer logo into a document.

Do not commit or distribute font files without rights or approval. Branding changes require owner review; this documentation is not authorisation to redesign the mark.

## Authoritative Canva brand kit

The owner confirmed that the existing Canva **Thoth** Brand Kit is authoritative. Kit identifier: `kAHY-Db521w`. Its listing was verified on 26 November 2026; individual logo exports, fonts and approved icon files were not accessible via the available kit listing; reference colours were subsequently recovered from the correction design. The repository raster remains unchanged pending verified exports.

Approved direction: blended navy and forest green, restrained editorial styling, intentional light/dark contrast, original ibis and approved Seshat/AI identity. Do not infer exact hex values or typefaces. Export approved logo variants, banner, social preview and UI icons from Canva, recording source, variant and usage rights. Use only verified walkthrough screenshots for product imagery. A GitHub social preview must be separately configured and verified in repository settings; it is not currently set by this change.

## Recovered Canva design decisions — 26 November 2026

Source: [Design Correction, 27 October](https://www.canva.com/d/4gkdILBLijS5sOw) and [Locked Icon Directions](https://www.canva.com/d/gdTO2oBagzTi2xU), read directly from Canva. These are design reference values, not a complete production token system.

| Reference | Hex |
| --- | --- |
| Navy | #101D33 |
| Forest Teal | #123D32 |
| Deep Forest | #0B302B |
| Paper | #F5F6F2 |
| Mist Teal | #DDECE6 |

Dark theme: continuous navy-led blend with forest depth, not a hard green sidebar. Cyan signifies interaction; lime signifies discovery, sparingly. Green is reserved for meaningful save/success contrast. Light mode retains the same structure with paper and mist surfaces; verify accessibility.

Original ibis and wordmark remain unaltered. Seshat uses the historical arch/rosette/staff reference, never the ibis. AI Review uses the supplied blue circuitry-face reference, distinct from native evidence-backed Seshat Insights. The polished v2 AI Review SVG was explicitly rejected on 27 October; do not ship it. Later approval of the reference direction does not establish final SVG sign-off. Test candidates at 16, 20, 24 and 32px in both themes.

### Canva source register

- [Brand Guidelines v1 — Final Review](https://www.canva.com/d/hhmmqyUgPucLW34): concept presentation, including the tagline “Create. Connect. Explore.”
- [Wordmark](https://www.canva.com/d/qqXmyuuP2R-tTLr): source collection; exact variant selection/export pending.
- [Design Correction](https://www.canva.com/d/4gkdILBLijS5sOw): supersedes earlier conflicting palette/icon directions.
- [Locked Icon Directions](https://www.canva.com/d/gdTO2oBagzTi2xU): reference directions, not production vector approval.
- [Polished Custom Icons](https://www.canva.com/d/y1dUDYeA00vh0Kt): review candidates; apply subsequent correction.
- [Forest Teal Palette Extension](https://www.canva.com/d/_nowWeg5PNooB1o): proposed, not blanket approval.

Binary exports, exact typography and final vector files remain outstanding; links are owner-access references, not public CDN assets.

## Repository presentation asset

[repository-banner.svg](repository-banner.svg) is a repository-specific editorial banner using the recovered Canva reference colours (#101D33, #123D32, #F5F6F2, #DDECE6) and approved tagline. It uses generic system font fallbacks; these are **not** approved product typography or a replacement wordmark. The original raster ibis is displayed separately in the README without modification. The banner is newly authored for GitHub, not an original Canva export. Do not use it as a product logo or claim final typography sign-off. The linked Canva workspace/theme/journey designs remain the visual references pending verified image exports.
