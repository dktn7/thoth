import { useState } from "react";
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

interface DocThumb {
  id: string;
  title: string;
  pageNum: number;
}

const initialDocs: DocThumb[] = Array.from({ length: 8 }, (_, i) => ({
  id: `doc-${i + 1}`,
  title: `Page ${i + 1}`,
  pageNum: i + 1,
}));

const SortableThumb = ({ doc, isActive }: { doc: DocThumb; isActive: boolean }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: doc.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`group flex items-center gap-2 p-2 rounded-md cursor-pointer border transition-all ${
        isActive
          ? "border-primary bg-primary/5"
          : "border-transparent hover:border-border hover:bg-muted/50"
      }`}
    >
      <button
        {...attributes}
        {...listeners}
        className="opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing text-muted-foreground"
      >
        <GripVertical size={14} />
      </button>
      <div className="w-10 h-14 rounded-sm border bg-card flex items-center justify-center flex-shrink-0">
        <FileText size={16} className="text-muted-foreground" strokeWidth={1} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-foreground truncate">{doc.title}</p>
        <p className="text-[10px] text-muted-foreground">Document</p>
      </div>
    </div>
  );
};

const DocumentThumbnails = () => {
  const [docs, setDocs] = useState(initialDocs);
  const [activeId, setActiveId] = useState("doc-1");

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
              <div key={doc.id} onClick={() => setActiveId(doc.id)}>
                <SortableThumb doc={doc} isActive={activeId === doc.id} />
              </div>
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default DocumentThumbnails;
