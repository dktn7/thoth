# THOTH coding-agent skills

Five scoped, reusable workflows live here: **document-engine**, **styles-templates**, **seshat-knowledge**, **publishing-qa**, and **repo-quality**.

Every skill has `SKILL.md` with a name and description, when-to-use guidance, a bounded workflow, evidence requirements and stop conditions. These are **development-agent skills**, not features inside THOTH.

Use [AGENTS.md](../../AGENTS.md) for global rules and [SPECIFICATIONS.md](../../SPECIFICATIONS.md) for requirements. Do not copy product specifications into individual skills or let skills override the product decision record.

## Agent compatibility

`.agents/skills/<skill-name>/SKILL.md` follows a common repository-local skill convention used by some coding agents, including compatible Codex setups. **Automatic discovery differs by tool and version**: check the installed Codex, Roo Code, Copilot or other agent documentation/settings; if an agent does not auto-load these files, instruct it to read the relevant `SKILL.md` explicitly. A Markdown file in a folder alone does not guarantee invocation.

Suggested use: select the relevant specialised skill for implementation, then use **repo-quality** to review the resulting PR. Avoid running conflicting agents that modify the same files concurrently.

## Working agreement

Read current GitHub state, follow the exact source-of-truth documents, preserve branding and user data, keep scope bounded, run checks, and do not represent planned capabilities as shipped.
