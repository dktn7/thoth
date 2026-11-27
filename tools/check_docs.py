"""Check local Markdown/HTML links and GitHub-style heading fragments.

External HTTP and visual access checks are separate; see docs/quality/repository-qa.md.
"""

from __future__ import annotations

import html
from pathlib import Path
import re
import sys
import unicodedata
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
LINK = re.compile(r"!?\[[^\]]*\]\((<?[^\s)]+>?)", re.IGNORECASE)
REFERENCE = re.compile(r"^\s*\[([^\]]+)\]:\s*<?([^\s>]+)>?", re.MULTILINE)
REFERENCE_USE = re.compile(r"!?\[([^\]]+)\]\[([^\]]*)\]")
HTML_LINK = re.compile(r"\b(?:src|href)\s*=\s*['\"]([^'\"]+)['\"]", re.IGNORECASE)
HEADING = re.compile(r"^#{1,6}\s+(.+?)\s*#*\s*$", re.MULTILINE)
INLINE = re.compile(r"<[^>]*>|\[([^\]]+)\]\([^)]*\)|[`*_~]")


def slug(value: str) -> str:
    value = INLINE.sub(lambda match: match.group(1) or "", value)
    value = html.unescape(value).lower()
    value = "".join(char for char in value if char in " -_" or unicodedata.category(char)[0] in "LN")
    return value.replace(" ", "-")


def anchors(path: Path) -> set[str]:
    text = path.read_text(encoding="utf-8")
    seen: dict[str, int] = {}
    result: set[str] = set()
    for heading in HEADING.findall(text):
        base = slug(heading)
        count = seen.get(base, 0)
        seen[base] = count + 1
        result.add(f"{base}-{count}" if count else base)
    result.update(re.findall(r"\b(?:id|name)=['\"]([^'\"]+)['\"]", text))
    return result


def main() -> int:
    files = sorted(ROOT.rglob("*.md"))
    failures: list[str] = []
    checked = 0
    for source in files:
        text = source.read_text(encoding="utf-8")
        definitions = REFERENCE.findall(text)
        labels = {" ".join(label.lower().split()) for label, _ in definitions}
        for label, explicit in REFERENCE_USE.findall(text):
            key = " ".join((explicit or label).lower().split())
            if key not in labels:
                failures.append(f"{source.relative_to(ROOT)}: undefined reference label: [{explicit or label}]")
        targets = LINK.findall(text) + [target for _, target in definitions] + HTML_LINK.findall(text)
        for target in targets:
            target = html.unescape(target.strip("<>"))
            parsed = urlsplit(target)
            if parsed.scheme or parsed.netloc or target.startswith("//") or target.startswith("mailto:"):
                continue
            path_part = unquote(parsed.path)
            fragment = unquote(parsed.fragment)
            if not path_part and not fragment:
                continue
            destination = (ROOT / path_part.lstrip("/")) if path_part.startswith("/") else (source.parent / path_part)
            destination = destination.resolve()
            checked += 1
            try:
                destination.relative_to(ROOT)
            except ValueError:
                failures.append(f"{source.relative_to(ROOT)}: link escapes repository: {target}")
                continue
            if not destination.exists():
                failures.append(f"{source.relative_to(ROOT)}: missing path: {target}")
            elif fragment and destination.suffix.lower() == ".md" and fragment not in anchors(destination):
                failures.append(f"{source.relative_to(ROOT)}: missing heading #{fragment} in {destination.relative_to(ROOT)}")
    for failure in failures:
        print(f"ERROR {failure}")
    print(f"Checked {checked} local references across {len(files)} Markdown files; {len(failures)} errors.")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
