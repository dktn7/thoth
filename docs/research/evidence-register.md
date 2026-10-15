# THOTH research evidence register

**Status:** initial source inventory from product-planning conversations; this PR has not audited each edition, licence or claim. Do not present candidate profiles as research-validated releases.

## Evidence classification

- **Formal standard:** an identified standards body publication; may require purchase/licensing and has a specific scope.
- **Published framework/specification:** documented repeatable method or machine-readable specification; verify version, use licence and applicability.
- **Professional guidance:** named author/publisher's practice, not automatically a universal standard.
- **Community example:** useful comparison, not proof of industry consensus.
- **THOTH design choice:** product decision inferred from user needs/testing; never mislabel as externally mandated.

## Initial sources and decisions to verify

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
