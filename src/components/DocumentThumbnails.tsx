import { useEffect } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, FileText } from "lucide-react";
import { useWorkspace } from "@/contexts/WorkspaceContext";
import { useState } from "react";

interface DocThumb {
  id: string;
  title: string;
  pageNum: number;
  sectionIndex: number;
}

const SortableThumb = ({
  doc,
  isActive,
  onClick,
}: {
  doc: DocThumb;
  isActive: boolean;
  onClick: () => void;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: doc.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} onClick={onClick}>
      <div
        className={`group flex items-center gap-2 p-2 rounded-md cursor-pointer border transition-all duration-300 ${
          isActive
            ? "border-primary bg-primary/5 shadow-[0_0_8px_hsl(107_82%_69%/0.15)]"
            : "border-transparent hover:border-border hover:bg-muted/50"
        }`}
      >
        <button
          {...attributes}
          {...listeners}
          className="opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing text-muted-foreground"
          onClick={(e) => e.stopPropagation()}
        >
          <GripVertical size={14} />
        </button>
        <div
          className={`w-10 h-14 rounded-sm border bg-card flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
            isActive ? "border-primary/40" : ""
          }`}
        >
          <FileText
            size={16}
            className={`transition-colors duration-300 ${isActive ? "text-primary" : "text-muted-foreground"}`}
            strokeWidth={1}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-foreground truncate">{doc.title}</p>
          <p className="text-[10px] text-muted-foreground">Document</p>
        </div>
      </div>
    </div>
  );
};

const DocumentThumbnails = () => {
  const { activeSection, requestScrollTo, totalSections } = useWorkspace();

  const [docs, setDocs] = useState<DocThumb[]>(() =>
    Array.from({ length: totalSections }, (_, i) => ({
      id: `doc-${i + 1}`,
      title: `Page ${i + 1}`,
      pageNum: i + 1,
      sectionIndex: i,
    }))
  );

  // Update docs when totalSections changes
  useEffect(() => {
    setDocs((prev) => {
      if (prev.length === totalSections) return prev;
      return Array.from({ length: totalSections }, (_, i) => ({
        id: `doc-${i + 1}`,
        title: `Page ${i + 1}`,
        pageNum: i + 1,
        sectionIndex: i,
      }));
    });
  }, [totalSections]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setDocs((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  // Auto-scroll the active thumbnail into view
  useEffect(() => {
    const el = document.getElementById(`thumb-${activeSection}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeSection]);

  return (
    <div className="h-full flex flex-col glass-panel">
      <div className="px-3 py-2.5 border-b">
        <h3 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          Documents
        </h3>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-0.5">
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={docs.map((d) => d.id)} strategy={verticalListSortingStrategy}>
            {docs.map((doc) => (
              <div key={doc.id} id={`thumb-${doc.sectionIndex}`}>
                <SortableThumb
                  doc={doc}
                  isActive={activeSection === doc.sectionIndex}
                  onClick={() => requestScrollTo(doc.sectionIndex)}
                />
              </div>
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default DocumentThumbnails;
