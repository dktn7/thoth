"""Regression checks for rendered Markdown link handling."""

import contextlib
import io
from pathlib import Path
from tempfile import TemporaryDirectory
import unittest

import check_docs


class DocumentationLinksTest(unittest.TestCase):
    def check(self, markdown: str) -> tuple[int, str]:
        with TemporaryDirectory() as directory:
            root = Path(directory).resolve()
            (root / "README.md").write_text(markdown, encoding="utf-8")
            original = check_docs.ROOT
            check_docs.ROOT = root
            try:
                output = io.StringIO()
                with contextlib.redirect_stdout(output):
                    result = check_docs.main()
                return result, output.getvalue()
            finally:
                check_docs.ROOT = original

    def test_same_document_fragment_is_checked(self) -> None:
        result, output = self.check("# Present\n\n[missing](#absent)\n<a href=\"#also-absent\">x</a>\n")
        self.assertEqual(result, 1)
        self.assertIn("missing heading #absent", output)
        self.assertIn("missing heading #also-absent", output)

    def test_examples_are_not_checked_as_links(self) -> None:
        markdown = "# Present\n\n`[inline](missing.md)`\n\n```markdown\n[fenced](also-missing.md)\n```\n\n    [indented](missing-too.md)\n\n[real](#present)\n"
        result, output = self.check(markdown)
        self.assertEqual(result, 0, output)
        self.assertIn("0 errors", output)


if __name__ == "__main__":
    unittest.main()
