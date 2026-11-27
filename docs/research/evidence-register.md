# THOTH research evidence register

**Status:** candidate source inventory, not validated evidence. Metadata screening on 2026-11-26 identifies selected editions and licence leads; no entry is approved to inform implementation until its exact source, rights, applicability and claim are reviewed. Unknown metadata is explicitly blocking, not assumed.

## Evidence classification

- **Formal standard:** an identified standards body publication; may require purchase/licensing and has a specific scope.
- **Published framework/specification:** documented repeatable method or machine-readable specification; verify version, use licence and applicability.
- **Professional guidance:** named author/publisher's practice, not automatically a universal standard.
- **Community example:** useful comparison, not proof of industry consensus.
- **THOTH design choice:** product decision inferred from user needs/testing; never mislabel as externally mandated.

## Candidate sources and decisions to verify

| ID | Source | Class | Proposed use | Verification still required |
| --- | --- | --- | --- | --- |
| R-001 | [ISO/IEC/IEEE 29148](https://www.iso.org/standard/72089.html) | Formal standard | Requirements terminology, traceability, acceptance structure | Edition, licence, exact clauses, whether profile implies conformance |
| R-002 | [arc42](https://docs.arc42.org/home/) | Published framework | Architecture document profile and section prompts | Attribution/reuse licence, permitted adaptations and exemplar comparison |
| R-003 | [OpenAPI Specification](https://spec.openapis.org/oas/latest.html) | Published specification | API spec authoring/export investigation | Target OAS version, supported features, test fixtures |
| R-004 | [Fountain syntax](https://fountain.io/syntax/) | Published format/syntax | Screenplay semantics, optional export | Source licence, variations for animation scripts |
| R-005 | [BBC Writers](https://www.bbc.co.uk/writers/scripts/) | Professional guidance/examples | Compare submitted script structures | Audience/region applicability and licensing |
| R-006 | [Diátaxis](https://diataxis.fr/) | Published framework | Distinguish tutorials/how-to/reference/explanation | Licence and where business manuals diverge |
| R-007 | [EPA Quality resources](https://www.epa.gov/quality) | Professional/regulatory context | Investigate SOP structure and control | Exact current guidance and domain applicability |
| R-008 | [WCAG 2.2](https://www.w3.org/TR/WCAG22/) | W3C Recommendation | Accessibility criteria for interface and content | Mapping to product, testing method, relevant success criteria |
| R-009 | [PDF/UA resources](https://pdfa.org/resource/tag/pdfua/) | Published accessibility guidance | Accessible PDF publishing requirements | Actual target edition/profile and implementation feasibility |
| R-010 | [BlockNote docs](https://www.blocknotejs.org/docs) | Software documentation | Evaluate current installed editor | Version 0.22 compatibility and licensing |
| R-011 | [ProseMirror](https://prosemirror.net/docs/) and [Tiptap](https://tiptap.dev/docs) | Software documentation | Editor-engine comparison | Specific candidate versions, licensing and prototype outcomes |

## Metadata screening — 2026-11-26

The date below records this screening, not a claim of full-text access or earlier review. “Unpinned” means an exact revision has not been established; “unknown” means permission has not been established. Entries remain candidates until the required record below is complete. No copying or conformance claims are authorised by this table.

| ID | Publisher / source | Edition or revision / publication | Access or screening date | Licence / rights evidence | Status |
| --- | --- | --- | --- | --- | --- |
| R-001 | ISO/IEC/IEEE | 29148:2018; 2018 ([ISO catalogue](https://www.iso.org/standard/72089.html)); [replacement draft](https://www.iso.org/standard/94091.html) is not adopted | 2026-11-26, catalogue metadata | ISO publication; reuse rights not established | Candidate; full clauses not reviewed |
| R-002 | arc42 | Online documentation, unpinned | 2026-11-26, licence metadata | [CC BY-SA 4.0 for template](https://arc42.org/license/); adaptation obligations apply | Candidate; revision and scope pending |
| R-003 | OpenAPI Initiative | [3.2.1](https://spec.openapis.org/oas/v3.2.1.html), 2026-09-10 | 2026-11-26, specification metadata | Apache-2.0 for specification | Candidate; target version not selected |
| R-004 | Fountain project | [Online syntax](https://fountain.io/syntax/), unpinned | 2026-11-26, official syntax and developer pages checked | [Reference code MIT](https://fountain.io/developers/); documentation reuse rights not established | Candidate |
| R-005 | BBC Writers | Script collection, individual works unpinned | 2026-11-26, source blocked by robots restrictions; content not inspected | Unknown; no reuse assumed | Candidate |
| R-006 | Diátaxis | [Online framework](https://diataxis.fr/), unpinned | 2026-11-26, framework checked | Exact licence and revision still to verify; no reuse assumed | Candidate |
| R-007 | US EPA | [EPA QA/G-6, EPA/600/B-07/001](https://www.epa.gov/quality/quality-program-directives), April 2007 | 2026-11-26, official listing checked | Reuse and applicability to specific domains still to verify | Candidate |
| R-008 | W3C | [WCAG 2.2 Recommendation, 12 December 2024](https://www.w3.org/TR/2024/REC-WCAG22-20241212/) | 2026-11-26, [publication history](https://www.w3.org/standards/history/WCAG22/) | Document reuse terms not reviewed | Candidate |
| R-009 | PDF Association / ISO | [ISO 14289-2:2024](https://pdfa.org/iso-14289-2-pdfua-2), 2024; target profile pending | 2026-11-26, catalogue metadata | Sponsored access does not establish redistribution rights | Candidate |
| R-010 | TypeCellOS / BlockNote | Installed version and exact licence revision pending lockfile audit | 2026-11-26, [upstream licence](https://github.com/TypeCellOS/BlockNote/blob/main/LICENSE.txt) metadata | Current upstream describes MPL-2.0 core and GPL-3.0 XL; verify selected package versions | Candidate |
| R-011 | ProseMirror and Tiptap maintainers | Candidate versions unselected | 2026-11-26, upstream metadata | [ProseMirror MIT](https://github.com/ProseMirror/prosemirror); [Tiptap open-source MIT](https://tiptap.dev/docs/editor/getting-started/overview); commercial extensions separately assess | Candidate |

**Primary-source metadata recheck (2026-11-26):** ISO catalogue, arc42 licence, versioned OpenAPI specification, Fountain syntax/developer pages, Diátaxis overview, EPA directives index, dated W3C recommendation and PDF Association catalogue were checked. These establish identity, selected dates and limited licence metadata only. They do not establish clause-level compliance, permission to reproduce third-party templates, or implementation readiness. BBC access was blocked; exact library versions and transitive licensing still require a dependency audit.

**Promotion gate:** a candidate may not support a normative requirement, shipped template or architecture decision as verified research until a reviewer records the exact edition/revision, publication or access date, rights and applicable claim with evidence. Missing fields prevent promotion. Existing proposed uses are research hypotheses only.

## Required record when a finding informs code

Track: source title, stable URL, publisher, version/edition, access date, class, relevant quotation/reference (within allowed copying), licence, applicable document family, derived THOTH decision, confidence, known disagreement, test fixture, reviewer and review date.

## Open research gaps

- More primary and practitioner comic scripting references, including panel/page variations.
- Game design documents in different production sizes and studios; no single industry template.
- Animation-specific script conventions beyond screenplay-style syntax.
- Business memo/report and domain-specific SOP distinctions.
- PDF and DOCX style/export fidelity, font embedding and accessible output.
- Actual user validation across guide, GDD and comic/script authoring journeys.

Do not reproduce copyrighted template wording in product presets until reuse permission is established. Research suggestions should always be dismissible and labelled with their basis.
