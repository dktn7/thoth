# Repository quality assurance — Stage 01.1

**Audit date:** 27 November 2026. **Branch:** `chore/public-repository-qa`. This report records observed evidence and remaining owner decisions. The application remains an early prototype.

## Initial condition

| Item | Status | Evidence |
| --- | --- | --- |
| Foundation | Completed | PR #1 merged into `main`; starting commit `3b895be` |
| Local work | Completed | Separate clean clone; no pre-existing changes; branch created from latest fetched `main` |
| Documentation | Completed | All 21 original Markdown files inspected, including templates, architecture, research, brand and design guidance |
| Automated docs workflow | Not applicable at baseline | No `.github/workflows` file on starting `main` |
| About metadata | Completed | Public API returned an empty description, empty topics and no website at the start; authenticated GitHub CLI update completed |

## Repository About and social preview

**About status: Completed.** Authenticated GitHub CLI set the description to “An intelligent creative workspace for professional authoring, visual design and connected knowledge. Create. Connect. Explore.” The public repository API and `gh repo view` both returned all nine requested topics: `document-editor`, `creative-workspace`, `knowledge-management`, `rich-text-editor`, `document-authoring`, `local-first`, `react`, `typescript`, `ai-assisted`. The website field remains empty. No visibility, permissions, licence or branch protection settings were changed.

**Social preview status: Unable to verify.** The owner reports that a preview was uploaded. The public repository API used here does not expose its image, and no original social-preview image was found in this checkout. Nothing was uploaded, replaced or changed. The owner should visually inspect the existing GitHub preview in repository settings and confirm whether its ibis is the exact original mark; a recreated ibis is a brand consistency concern, not an authorised replacement task.

## Link audit

The audit searched Markdown links, reference definitions, HTML `href`/`src`, embedded images, relative paths and GitHub-style heading fragments. An unauthenticated HTTP probe followed redirects and inspected final page titles. This distinguishes a reachable page from a useful public destination.

| Classification | Result |
| --- | --- |
| Valid internal reference | 85 references across 23 Markdown files after this report and the inventory were added; 0 missing paths or heading anchors. |
| Valid public reference | 23 distinct retained external URLs returned HTTP 200 with relevant final destinations and page titles in the unauthenticated probe. This includes the BBC script library, which was inaccessible to an earlier crawler. |
| Authentication required | All 7 original Canva design URLs returned HTTP 200 **after redirecting to Canva login**. These are no longer clickable public documentation references. |
| Permission restricted | No retained reference confirmed as permission restricted. |
| Broken / incorrect destination / expired | None confirmed in the retained references. |
| Unable to verify | Two PDF Association research URLs returned HTTP 403 to the probe. One direct ISO 14289-2 page was accessible through a separate web reader; the PDF/UA tag listing was not. Client blocking is plausible, so neither is labelled removed. |

The two PDF Association URLs and two ISO catalogue URLs are exact exceptions in `.lycheeignore`. The [PDF/UA resource listing](https://pdfa.org/resource/tag/pdfua/) and [ISO 14289-2 overview](https://pdfa.org/iso-14289-2-pdfua-2) need browser rechecks when their research entries are promoted. Both ISO catalogue pages returned HTTP 200 and matching titles to the independent unauthenticated probe, but Lychee on GitHub Actions received 403. The ISO catalogue pages likewise need a periodic independent browser/probe recheck. No broad domain exclusion is used. HTTP checks alone cannot detect login walls, misleading content, rights restrictions or visual quality.

### Corrections

- **Completed:** No objectively broken internal file or heading link was found to correct. The local checker now guards against future regressions.
- **Completed:** The README's three Canva preview links became a relative link to the written experience handoff and asset inventory.
- **Completed:** The walkthrough's Canva journey and visual links became accurate source descriptions; journey contracts and version caveats remain.
- **Completed:** The brand guide's six clickable Canva source links became a plain-text source register. Recovered palette and original identity decisions remain.
- **Completed:** Original ibis and repository banner paths exist. The ibis file is named `.jpg` but contains PNG bytes; it was preserved byte for byte and visually opened locally. The banner is well-formed SVG. GitHub light/dark rendering was not visually verified in this audit.

## Visual asset inventory

| Asset | Source / version | Approval and representation | Status |
| --- | --- | --- | --- |
| `src/assets/thoth-logo.jpg` | Existing original blue ibis with green eye; version unspecified | Established logo asset; existing prototype and README reference | Completed: preserved |
| `docs/assets/brand/repository-banner.svg` | Repository-authored foundation graphic; uses recovered palette | Repository presentation, not official Canva wordmark | Completed: preserved |
| Existing GitHub social preview | Owner upload; source file/version unavailable in checkout | Composition preserved; exact ibis match unverified | Unable to verify |
| Create, Design, Seshat, navigation, formatting, AI Review, light/dark and connected journey images | Owner's original walkthrough/design files; reported v1.3–v1.3.5 | Approval and concept/implemented status must accompany each export | Pending owner action |

The [walkthrough inventory](../assets/walkthrough/README.md) specifies the requested exports and provenance fields. No substitute art, empty image file or concept screenshot was introduced.

## Validation configuration and results

**Completed:** `.github/workflows/docs-quality.yml` runs a local path/anchor checker, its regression tests and markdownlint on relevant pull requests. It runs Lychee on a weekly schedule and by manual dispatch. Jobs have read-only content permission, explicit timeouts, modest HTTP concurrency/retries and third-party actions pinned to commit SHAs verified against their upstream tag references. The external job reports failures but does not become a new branch protection requirement.

Lychee was selected for external HTTP links and local Markdown/image URLs because it is a maintained dedicated link checker with bounded request controls. Markdownlint CLI 0.24.2 was selected for consistent Markdown structure. The first default lint run found 410 issues, mostly existing long prose lines and deliberate README HTML. The config disables only line length, inline HTML and first-line heading rules; existing spacing issues were fixed. The Python checker adds explicit GitHub-style heading anchor and repository path checks.

| Test | Actual result | Status |
| --- | --- | --- |
| `python tools/check_docs.py` | 85 local references across 23 Markdown files, 0 errors | Completed locally |
| `python -m unittest discover -s tools -p 'test_check_docs.py'` | 3 regression tests passed: fragment-only anchors are checked, code examples are ignored, and dependency READMEs are excluded | Completed locally |
| `npx --yes markdownlint-cli2@0.24.2 '**/*.md'` | 23 files, 0 issues after focused configuration and spacing fixes | Completed locally |
| Lychee v0.24.2, 4 concurrent requests, 15-second timeout, 2 retries | 120 references in the docs before this report was added, 48 unique, 118 OK, 0 errors, 2 exact PDF Association exclusions | Completed locally |
| GitHub Actions PR run `45995216907` | Local links and Markdown job passed; external job correctly skipped on a PR | Completed |
| GitHub Actions PR run `45996889423` | Local links and Markdown job passed on the updated workflow; external job correctly skipped | Completed |
| Manual GitHub Actions run `45995252000` | Local job passed; external job failed before link checking because Lychee action v2.7.0 did not locate the nested v0.24.2 binary. Action updated to pinned v2.9.0. | Completed: diagnosed and fixed |
| Manual GitHub Actions run `45995656669` | Local job passed; external job reached 124 references but received four ISO 403 responses across two exact catalogue URLs. Independent unauthenticated probe returned 200 and matching titles. Exact exceptions added. | Completed: diagnosed and fixed |
| Manual GitHub Actions run `45996885751` | Both jobs passed. Lychee: 124 total references, 49 unique, 116 successful, 8 occurrences of four exact excluded URLs, 0 errors. | Completed |
| GitHub appearance, login-wall and destination inspection | Canva redirects checked manually; local logo opened; GitHub light/dark rendering still unverified | Unable to verify in full |

## Review integrations and limits

**Completed:** Foundation PR #1 shows a Codex review and a CodeRabbit comment. No integration settings or paid services were changed. Codex reviewed this PR at `12bbee6` and identified two real local-checker defects; both were fixed with regression tests. CodeRabbit's passing status said “Review skipped: manual review required for this OSS repository”; a manual request then produced a completed review with two minor checker findings. Code example handling was already fixed; the dependency README scan was corrected with a third regression test. A passing check is distinct from a completed review. Fresh review receipts must refer to the corrected branch head.

**Pending owner action:** Approve appropriate source artwork for any future walkthrough visuals, inspect the existing social preview for exact-logo consistency, and review this PR before merging. Missing optional artwork does not block Stage 02 work while public documentation remains accurate. The current branch is documentation and QA only; it does not implement application requirements or verify application tests.
