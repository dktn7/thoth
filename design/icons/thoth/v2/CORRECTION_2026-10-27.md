# THOTH — Icon and interface correction lock
**Decided:** 27 October 2026
**Authority:** user review of THOTH polished icon direction v2
**Status:** theme and identity approved; AI Review v2 SVG rejected; replacement vector not yet approved.

## 1. Blended navy + forest is the approved dark UI direction

Use the **D · Integrated navy/forest** treatment shown in the existing THOTH colour-placement study. The visual language must be a *cohesive blend*, not a navy app with an unrelated forest-green sidebar, and not a flat navy-only shell.

- Navy foundation: `#101D33`.
- Forest Teal supporting surfaces: `#123D32`.
- Deep Forest dark layers: `#0B302B`.
- Cyan interactive cues: approved cyan family (sample `#17BDE8`).
- Lime only with semantic meaning (sample `#A7E542`) such as discovery, verified results and differentiated actions where contrast warrants.
- Light mode: paper `#F5F6F2`, Mist Teal `#DDECE6`, navy text and appropriate contrast.
- The precise balance of colours and component tokens should be assessed against the *already-created THOTH v1.2 editor mockup*, not a newly invented product shell.
- Keep the approved THOTH full logo/ibis exactly as provided. Use the official ibis-only asset in the compact workspace header, not a generated/recreated ibis.

## 2. AI Review identity versus wrong v2 drawing

**Approved direction:** a recognisably human face formed by elegant **blue circuit traces**, inspired by the original user-provided source image on 27 October 2026, Canva asset `MAHZKqJi-i4`. It represents optional generative drafting/revisions. The icon must not be a generic AI sparkle, an abstract node graph or an imitation of the Seshat emblem.

**REJECTED:** `ai-review.svg` from the six-page *Polished Direction 02* and GitHub candidate v2. The user explicitly said it was wrong. It has been moved from the current candidate directory to `archive/rejected-ai-review-v2.svg`; the active filename is intentionally **absent** until a new vector is reviewed. Archive is NOT approved or deployable.

**Required visual acceptance before reinstatement:**
1. New circuit-face SVG must show face silhouette, eyes and deliberate circuitry, with no excessive detail.
2. Compare 16, 20, 24 and 32px rendering, and show both navy/forest dark and paper/mist light treatments.
3. Demonstrate in the existing Create toolbar, AI Review inspector tab, inline proposal bubble and suggestion-card context.
4. Display the original user reference next to the candidate. Explain any necessary small-size simplifications.
5. Obtain explicit sign-off on the *new* SVG before adding it back as `ai-review.svg` or shipping it.

## 3. Maintain Seshat's own distinct identity

The user-approved historical Seshat direction is **arch + rosette + staff** (Canva original source `MAHZKjWfk9o`). The THOTH ibis must never be used as a Seshat icon. Seshat Insights are native research- and evidence-based recommendations; **AI Review** is generative assistance. Their iconography, labels and source explanations must remain distinct.

## 4. Canonical Canva references

- [Original THOTH brand guide — unchanged](https://www.canva.com/design/DAHY-Ho9PAc)
- [THOTH project folder](https://www.canva.com/folder/FAHGqaJ-sUA)
- [Locked historical/reference icon directions](https://www.canva.com/d/-4botJ1SsVwJj45)
- [Polished Direction 02 — *AI Review drawing superseded*](https://www.canva.com/d/OiVkqH4HdRpJrPK)
- [**Correction brief — authoritative as of 27 Oct**](https://www.canva.com/d/UNiRkcGwo92NUrn)

The correction brief uses the original approved THOTH logo, original circuit-face image and earlier D-blend THOTH mockup. Previous creative concepts remain available as history, but **no longer constitute approval of the rejected AI Review SVG**.

## 5. File and implementation policy

- 15 non-AI SVG candidates remain in `design/icons/thoth/v2/`, all subject to ordinary sign-off.
- The rejected AI SVG has a retained archival copy only. Consumers must not import it as the AI Review icon.
- No direct changes to THOTH application's `main` branch in this correction.
- Never mistake source reference artwork, polished concept boards or mockups for production-ready icons.
