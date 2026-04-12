import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import { useEffect, useRef, useCallback } from "react";
import { useWorkspace } from "@/contexts/WorkspaceContext";

const SECTIONS = [
  { type: "heading" as const, content: "Welcome to THOTH", props: { level: 1 as const } },
  { type: "paragraph" as const, content: "Start writing your document here. THOTH provides a clean, distraction-free environment for your work." },
  { type: "heading" as const, content: "Chapter 1: Introduction", props: { level: 2 as const } },
  { type: "paragraph" as const, content: "This section covers the foundational concepts and principles that underpin the entire document. Write freely — the Neural Brain tracks your focus in real time." },
  { type: "heading" as const, content: "Chapter 2: Research", props: { level: 2 as const } },
  { type: "paragraph" as const, content: "Document your research findings, data sources, and methodology in this section." },
  { type: "heading" as const, content: "Chapter 3: Analysis", props: { level: 2 as const } },
  { type: "paragraph" as const, content: "Analyze the data collected in the previous chapter and present your interpretations." },
  { type: "heading" as const, content: "Chapter 4: Synthesis", props: { level: 2 as const } },
  { type: "paragraph" as const, content: "Bring together all threads of research and analysis into a cohesive narrative." },
  { type: "heading" as const, content: "Chapter 5: Implementation", props: { level: 2 as const } },
  { type: "paragraph" as const, content: "Detail the practical steps and processes needed to execute the plan." },
  { type: "heading" as const, content: "Chapter 6: Results", props: { level: 2 as const } },
  { type: "paragraph" as const, content: "Present your findings and outcomes with supporting evidence." },
  { type: "heading" as const, content: "Chapter 7: Conclusion", props: { level: 2 as const } },
  { type: "paragraph" as const, content: "Summarize the key takeaways and suggest directions for future work." },
];

// Map headings to page indices (8 pages total)
const HEADING_INDICES = SECTIONS
  .map((s, i) => (s.type === "heading" ? i : -1))
  .filter((i) => i >= 0);

const PaperEditor = () => {
  const { setActiveSection, setTotalSections, scrollToSection, clearScrollRequest } = useWorkspace();
  const containerRef = useRef<HTMLDivElement>(null);

  const editor = useCreateBlockNote({
    initialContent: SECTIONS.map((s) => {
      if (s.type === "heading") {
        return { type: "heading", content: s.content, props: { level: s.props!.level } };
      }
      return { type: "paragraph", content: s.content };
    }),
  });

  useEffect(() => {
    setTotalSections(HEADING_INDICES.length);
  }, [setTotalSections]);

  // Scroll tracking — detect which section is visible
  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const editorEl = container.querySelector(".bn-editor");
    if (!editorEl) return;

    const blocks = editorEl.querySelectorAll("[data-node-type='blockContainer']");
    if (!blocks.length) return;

    const containerRect = container.getBoundingClientRect();
    const viewportMid = containerRect.top + containerRect.height * 0.3;

    let currentHeadingPage = 0;
    let headingCount = -1;

    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      const heading = block.querySelector("[data-node-type='heading']");
      if (heading) {
        headingCount++;
      }
      const rect = block.getBoundingClientRect();
      if (rect.top <= viewportMid) {
        currentHeadingPage = Math.max(0, headingCount);
      }
    }

    setActiveSection(currentHeadingPage);
  }, [setActiveSection]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    setTimeout(handleScroll, 500);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Handle scroll-to requests from thumbnail clicks
  useEffect(() => {
    if (scrollToSection === null) return;
    const container = containerRef.current;
    if (!container) return;

    const editorEl = container.querySelector(".bn-editor");
    if (!editorEl) return;

    const blocks = editorEl.querySelectorAll("[data-node-type='blockContainer']");
    let headingCount = -1;

    for (let i = 0; i < blocks.length; i++) {
      const heading = blocks[i].querySelector("[data-node-type='heading']");
      if (heading) {
        headingCount++;
        if (headingCount === scrollToSection) {
          blocks[i].scrollIntoView({ behavior: "smooth", block: "start" });
          break;
        }
      }
    }

    clearScrollRequest();
  }, [scrollToSection, clearScrollRequest]);

  return (
    <div
      ref={containerRef}
      className="h-full flex items-start justify-center overflow-y-auto bg-muted/30 p-8"
    >
      <div className="w-full max-w-[720px] min-h-[calc(100vh-8rem)] thoth-paper rounded-lg">
        <BlockNoteView editor={editor} theme="light" />
      </div>
    </div>
  );
};

export default PaperEditor;
