# THOTH — Product definition

**Authority:** product intent and principles; code and tests are authoritative for implemented behaviour. **Status:** agreed direction, early prototype.

## Mission

Enable people to turn scattered notes, source files, screenshots and project knowledge into polished, editable, publishable documents—with the control of a professional word processor and assistance that never overrides their decisions.

## Origin and value

The initial motivation was the friction of creating lengthy workplace guides in Word and correcting unintended broad AI rewrites. The solution must **not** be limited to business SOPs: it must handle technical specifications, software architecture, business documents, creative scripts, comics and game-design documentation. It should be worth using even when AI is disabled.

**Core promise to test:** less repeated setup, fewer unintended edits, reliable saved work, relevant sources at hand, high-quality output. No market traction or Word feature parity has yet been validated.

## Who it is for

Writers and subject-matter experts producing structured documents: operations staff, technical authors, developers, designers, game creators, comic/animation writers and people who need to maintain reusable documentation. No specific enterprise workflow or branding is hard-coded.

## Product principles

1. **Professional manual authoring first.** Writing, selection, undo/redo, styles, media, page layout, preview and export must be usable without AI.
2. **Control the scope of change.** Each change specifies text selection, component, section, or explicit whole document; broad updates never happen accidentally.
3. **Semantic structure, not just visual decoration.** Components carry typed identity, relationships and stable IDs; a caption belongs to its figure, a panel to its comic page and a source to its claim.
4. **Local-first target.** Own and open project content without requiring a continuously available cloud service where the supported platform permits; opt-in sync is a distinct, security-reviewed feature. This is not implemented in main yet.
5. **No silent loss.** Autosave/recovery, versioning, transaction-aware changes and reversible AI proposals are critical to author trust.
6. **Independent canonical model.** Editor, page renderer, storage and export adapters consume a common versioned representation, rather than making BlockNote JSON the permanent domain contract by default.
7. **Preview and publishing are product functionality.** Real pages, covers, typography, image/caption grouping, navigable references and export fidelity are measured, not assumed.
8. **Research-led, user-overridable guidance.** Label formal standards, published frameworks, professional conventions, community examples and THOTH suggestions distinctly.
9. **Seshat provides evidence, not mysticism.** Visible records/edges represent actual project knowledge and traceable document links; users control corrections and deletions.
10. **Accessible and adaptable workspace.** Keyboard access, semantic output, flexible layouts and understandable labels matter as much as visual polish.
11. **Privacy by design.** Uploaded internal screenshots are not sent to external AI or search services without user action and clear disclosure. Privacy assumptions require testing.
12. **Brand continuity.** Keep the THOTH name and existing blue ibis/green-eye logo. Seshat is a named feature, not an AI persona.

## Manual–AI boundary

Deterministic, non-AI tools: headings/styles, templates, typography, lists/tables, page settings, document outline, saved reusable components, heading-depth checks, empty sections, missing figure captions, duplicate requirement IDs and broken reference pointers.

Optional AI tools: draft/refine selected content, analyse an uploaded screenshot with permission, suggest relevant image placement, compare text with supplied references, and propose structural changes. Review all edits as diffs, handle stale selection/version conflicts, support rejection and undo, and distinguish facts from suggestions. Manual changes update the next AI context.

## Product boundaries

THOTH is **not** an email/calendar/task personal operating system; those directions were rejected. It is not only an SOP builder, a chat interface wrapped around a text area, or a decorative 3D graph. It is not currently Microsoft Word parity, a finished desktop product, a deployed AI assistant, or a validated commercial service.

## Success criteria and representative acceptance journeys

- Create an editable business guide with 20 screenshots and captions; save, reopen, reorder, preview actual pages and publish a readable PDF without lost content.
- Create a technical specification using requirements and references; the editor flags duplicate IDs without invoking AI.
- Write an animation or comic script using typed scenes, dialogue or panels; choose a template but retain freeform editing.
- Create a game design document with linked mechanics and decision records; use Seshat to inspect sources supporting one component.
- Ask AI to revise a selected passage; verify all unrelated components remain untouched, inspect a proposed diff and reject it without side effects.
- Reopen a document after interruption, verify recovery and display any conflict clearly.
- Compare preview with PDF and document explicit supported/fidelity limitations.

These are **planned acceptance journeys**, not successful test claims.

## Decision governance

[Requirements](SPECIFICATIONS.md) track testable capability; [roadmap](ROADMAP.md) tracks dependencies and sequencing; [ADRs](docs/decisions/ADR-0001-product-direction.md) track architectural choices; [research register](docs/research/evidence-register.md) traces sources and limits. Review any architectural deviation before implementation.
