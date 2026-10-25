# THOTH — Research Intelligence & Knowledge Layer
**Status:** PARKED / DEFERRED — product concept approved for preservation, **not** part of current design execution.
**Captured:** 25 October 2026
**Related experiences:** Seshat, Research & Sources, native recommendations, optional AI assistant.
**Current priority:** THOTH v1.2 unified product design (THOTH v1.1 + Google Stitch comparison). Do not shift development to ingestion infrastructure until design work is ready.

## Product intent
THOTH is a creative knowledge studio with an **intelligent, topic-independent research/knowledge layer**. A creator may work on game design, software, business research, academic writing, comics, documentation or another subject. THOTH could bring legally obtained, source-backed external information together with *their* project documents, so its native intelligence engine can identify useful connections, information gaps, comparisons and possible research opportunities.

The research and recommendation capability must **not depend on generative AI**. Generative AI is optional and separate. Native recommendations can come from structured queries, rules, source provenance, graph algorithms, similarity scoring, statistics and measured trends.

## Source and ingestion strategy
- Prefer authorised **APIs, open datasets, licensed feeds, official publications, supported RSS feeds, and user-imported materials**.
- Crawl/scrape websites only when access and automated reuse are permitted; honour robots restrictions as appropriate, site terms, authentication/access limitations, rate limits, copyright/database rights, personal information rules and attribution obligations. Do not bypass technical protections.
- Every source connector must have its own permissions, refresh frequency, access method, schema, rate budget, licence/retention status, health checks, and provenance tracking.
- Never treat ownership estimates, player concurrency, review counts and **actual sales/revenue** as equivalent.
- User content remains private to its owner/workspace, not incorporated into another user's knowledge graph without explicit, appropriate authorisation.

## Game Development Intelligence — first bounded proof of concept
Potential data domains:
1. **Game catalogue:** platforms, genres, release dates, studios, publishers and pricing history where permitted.
2. **Market signals:** publicly available activity/review data; estimated ownership and sales only with prominent uncertainty/attribution.
3. **Development guidance:** permitted official game-engine docs, selected tutorials/research and compatible source licences.
4. **Community signals:** suitably permitted/anonymised themes in reviews, recurring user complaints, requested features and observed UX patterns.
5. **Project context:** user GDD, mechanics, combat/progression decisions, budget, roadmap and sources.

Example **hypothetical** recommendation: an action game's perfect-dodge mechanic has no supporting playtest evidence and shares concepts with combat-timing notes. Suggest reviewing/connecting relevant source passages; do not claim the mechanic will increase sales. Show exact project sections and external sources that justify suggesting the review.

## Suggested conceptual architecture
```text
Permitted APIs / licensed data / public research / user project files
             |
        Source connectors
   permissions | fetch | validation | monitoring
             |
         Normalisation
   entity extraction | dedup | dates | confidence | citations
             |
      THOTH Knowledge Layer
   structured data | documents | relationships | versions
             |
   Non-generative Intelligence Engine
   relevance | gaps | patterns | graph links | comparisons
             |
        Seshat Insights
   evidence | why suggested | review | dismiss | accept
             |
 Optional AI explanations or drafts, separate and user-approved
```

A starting implementation might use PostgreSQL for records and relationships with full-text search; semantic/vector search optional, graph DB only when justified by actual query complexity. This is an architectural candidate, not an implementation decision.

## Minimum evidence model
For each relevant finding or claim preserve:
- Source identifier, URL or document ID, publisher/author if known, retrieval time and source publication/effective date if available.
- Precisely located supporting passage/row/record and citation or deep link.
- Licence/terms metadata and data quality.
- Entity/term normalisation and relationships.
- Fact vs estimate vs opinion vs inference, units, scope, methodology and meaningful uncertainty.
- Version history and freshness/expiry; contradictions should remain visible rather than silently collapsing into one assertion.

## Recommendation model
Independent native engine should support:
- Relevant connected material / missing relationships.
- Evidence gaps and unsupported claims.
- Related document sections and research resources.
- Source changes and stale research warnings.
- Cross-document inconsistencies and conflicting research.
- Market/technical comparisons with date/source context.

Each recommendation includes **type, triggering evidence, why it was suggested, uncertainty/limitations and actions**: Inspect Sources, Review, Connect, Dismiss, Snooze (where appropriate). No silent changes to project content. Keep recommendations separate from the optional AI chat interface.

## Product design implications (carry forward now)
Although building ingestion is deferred, THOTH v1.2 designs should reserve appropriate UX for:
- Seshat Insights: a quiet, nonintrusive native recommendations panel available in compact and expanded modes.
- Clear visual distinction: **Research-backed insight** versus **AI-generated proposal**.
- Provenance drawer and deep links to exact relevant source passages.
- Source freshness, uncertainty and contradictory-data indicators.
- Review/accept/dismiss with evidence preview; no automatic edits.
- Dark mode default, complete light mode including Seshat (not hardcoded to black).

These are **design states**, not claims that the underlying analysis already functions.

## Delivery boundaries and later sequence
**Now:** finish THOTH v1.2 unified design, using v1.1's broader navigation/structure and selective Google Stitch feature detail. Design the content/evidence affordances only.

**Later pilot:**
1. Select 2–3 confirmed permitted sources and a bounded game dataset.
2. Build ingestion, provenance, dedup and source-quality QA.
3. Index local project documents, enforce privacy boundaries and relate to source entities.
4. Implement 2–3 deterministic/retrieval-based recommendation types, measure precision and user usefulness.
5. Integrate evidence inspection and explicit user approval into Seshat.
6. Add opt-in refresh schedules, monitoring, source change alerts, additional topic packs, and optional AI enhancements.

**Do not mistake:** design mockups for a functioning knowledge engine; estimated sales for actual revenue; relevance ranking for proof; a graph visualisation for a verified relationship.

## Revisit trigger
Return to this record once THOTH's **unified visual design and core Create ↔ Design ↔ Seshat vertical slice** are approved for implementation. This is preserved concept work, not a request to begin scraping today.
