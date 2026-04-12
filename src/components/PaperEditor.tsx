import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";

const PaperEditor = () => {
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "heading",
        content: "Welcome to THOTH",
        props: { level: 1 },
      },
      {
        type: "paragraph",
        content:
          "Start writing your document here. THOTH provides a clean, distraction-free environment for your work.",
      },
      {
        type: "paragraph",
        content: "",
      },
    ],
  });

  return (
    <div className="h-full flex items-start justify-center overflow-y-auto bg-muted/30 p-8">
      <div className="w-full max-w-[720px] min-h-[calc(100vh-8rem)] thoth-paper rounded-lg">
        <BlockNoteView editor={editor} theme="light" />
      </div>
    </div>
  );
};

export default PaperEditor;
