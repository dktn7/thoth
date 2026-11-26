# Research-led document profiles

**Status:** candidate profile catalogue. These structures are *examples for research and user testing*, not mandatory formats or fully validated templates. THOTH supports unrestricted general documents.

A document profile describes its audience/task, component types, suggested sections, named styles, optional checks, output expectations, evidence/version and permissible departures. Profiles do not override user formatting or edit content without consent.

## Candidate families

| Profile | Starting structure and typed components to test | Sources and limits |
| --- | --- | --- |
| General document | Blank or title/body/headings, lists, tables and figures | THOTH product choice; no universal template |
| Business how-to guide | Outcome, prerequisites, steps, screenshot+caption, troubleshooting, references | Evaluate [Diátaxis](https://diataxis.fr/) for how-to versus explanation; not a corporate mandate |
| SOP / procedure | Purpose, scope, responsibilities, procedure, records, revision/review | Compare [EPA guidance](https://www.epa.gov/quality) and actual domain requirements before claims of compliance |
| Business memo/report | Summary, decision, evidence, actions, appendices | Varies by organisation; study representative publishing examples |
| Requirements specification | Scope, actors, functional/non-functional requirements, assumptions, acceptance and traceability | [ISO/IEC/IEEE 29148](https://www.iso.org/standard/72089.html) is a formal reference; document may require licensed text |
| Software architecture | Introduction/goals, constraints, context, strategy, building blocks, runtime, deployment, decisions, risks | [arc42](https://arc42.org/) is a published framework, not mandatory for all technical specs; check licence |
| API reference | Overview, authentication, endpoints/operations, schema, examples, errors | [OpenAPI](https://spec.openapis.org/oas/latest.html) is a published machine-readable specification; validate authoring requirements |
| Game design document | Game overview, core loop, systems, progression, UI, world, assets and decisions | Research diverse independent studio formats; community GDD templates are examples not universal standards |
| Screenplay/animation script | Scene headings, action, dialogue, characters, transitions and production notes | [Fountain](https://fountain.io/syntax/) syntax; compare [BBC scripts](https://www.bbc.co.uk/writers/scripts/) and animation-specific workflows |
| Comic script | Issue/chapter, page, panel, visual direction, lettering/dialogue | Publisher and creator practices vary; no single required industry format |

The research has not been independently revalidated for this documentation commit. See [evidence register](../research/evidence-register.md), which records source classification and remaining verification.

## Shared profile contract (conceptual)

    profileId, name, version, status
    intendedTasks[], evidenceRefs[], licenceNotes
    supportedComponentTypes[], starterSections[]
    defaultStyles, pagePreset, optionalAuthoringPrompts[]
    deterministicChecks[], exportCapabilities, knownVariations[]

Sections are never enforced by hidden AI rules. The user can start with a blank page, move/delete template material, replace styles, mix compatible components and export the resulting document.

## Examples of deterministic checks by family

- Requirements: detect duplicate or blank requirement IDs, broken links and unfilled acceptance criteria.
- Scripts: flag an empty dialogue field without assuming silence is an error.
- Comic scripts: check a panel's page relationship and duplicate panel numbering.
- Guides: flag an image without user-set caption or alt text; allow dismissal.
- GDD: surface unfilled optional mechanics questions; never insist on irrelevant sections.

A rule should say what data it actually inspected, not claim narrative correctness. AI interpretation—such as whether a mechanic contradicts lore—must remain separate and reviewable.

## Publishing behaviour

A profile may propose page layout, heading styles, citations and export formats (for example PDF for reports, Fountain for screenplay text, OpenAPI for technical descriptions). No exporter is implemented by adding the profile definition. Support and fidelity must be proved with fixtures.

## Evidence and release gate

Before marking any profile curated or standard-aligned: compare multiple authoritative/practitioner examples, check permission to reproduce structure/content, document intended audience and flexibility, test manual editing, test PDF/DOCX or specialised exports and record exceptions. Avoid copying proprietary templates.

Related: [styles/templates](styles-templates.md), [requirements](../../SPECIFICATIONS.md).
