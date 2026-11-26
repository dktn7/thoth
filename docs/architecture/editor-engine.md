# Editor engine evaluation

**Decision status: OPEN.** BlockNote is currently installed and used by the React prototype, but has **not** been approved as the final document engine.

## Why this is an architectural decision

THOTH is intended to offer more than rich text: named/inherited styles, sections, covers, semantic script/panel/requirement blocks, figure+caption relationships, print pagination, usable large documents, precise AI patches, accessible editing, strong undo and faithful publishing. Building substantial extensions around an engine that cannot support these would create expensive lock-in.

## Candidates

- **BlockNote** (already present: @blocknote/core, @blocknote/react, @blocknote/mantine ^0.22.0): retain if custom blocks, selection fidelity and schema/export hooks satisfy the spike. Do not assume newer BlockNote docs apply to installed version.
- **Tiptap / ProseMirror:** evaluate direct schema control, transactions, decorations, custom nodes, copy/paste interoperability, accessibility and controlled layout. Switching has migration and maintenance costs.
- **Other engines:** consider only with an explicit requirement missed by the above and a supported long-term maintenance plan.

## Evaluation fixtures (run against candidate versions)

1. 100-page equivalent document with nested headings, tables, lists, images and at least 20 figure/caption pairs; edits must remain responsive.
2. Semantically typed scene/action/dialogue and comic page/panel components with editable attributes.
3. Named style change propagates through all matching components without rewriting text.
4. Preserve stable IDs and nested relationships across cut/paste, drag/move, undo, serialization and reopening.
5. Precise selection replacement, AI proposal on a stale revision and rejection with no side effects.
6. Actual page layout with margins, page breaks and keep-with-caption; thumbnails must match the output.
7. Export PDF and DOCX using representative fixtures; capture unsupported/lost features.
8. Keyboard-only editing, semantic headings, focus/selection feedback and screen-reader checks.
9. Bundle size, rendering memory, licensing, ecosystem maintenance, security and testability.

## Scorecard (complete before selection)

| Criterion | Importance | BlockNote | Tiptap / ProseMirror |
| --- | --- | --- | --- |
| Semantic/custom component control | Critical | Not yet tested | Not yet tested |
| Reversible, scoped transactions | Critical | Not yet tested | Not yet tested |
| Page layout and export fidelity | Critical | Not yet tested | Not yet tested |
| Style/theming extensibility | High | Not yet tested | Not yet tested |
| Accessibility | High | Not yet tested | Not yet tested |
| Import/export/migration | High | Not yet tested | Not yet tested |
| Long document performance | High | Not yet tested | Not yet tested |
| Ecosystem/licensing/maintenance | High | Not yet tested | Not yet tested |

Record each candidate's tested version, fixture, result, limitations and evidence. An engine may be retained with a separate pagination and export pipeline if the combined architecture works. Document the decision and migration plan in an ADR *before* replacing the live editor.

References: [BlockNote documentation](https://www.blocknotejs.org/docs), [Tiptap documentation](https://tiptap.dev/docs), [ProseMirror documentation](https://prosemirror.net/docs/). These are evaluation starting points, not proof of compatibility.
