import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ThothHeader from "@/components/ThothHeader";
import DocumentThumbnails from "@/components/DocumentThumbnails";
import PaperEditor from "@/components/PaperEditor";
import NeuralBrainViewer from "@/components/NeuralBrainViewer";

const ResizeHandle = () => (
  <PanelResizeHandle className="w-px bg-border hover:bg-primary/30 transition-colors data-[resize-handle-active]:bg-primary/50" />
);

const Index = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <ThothHeader />
      <PanelGroup direction="horizontal" className="flex-1">
        <Panel defaultSize={15} minSize={10} maxSize={25}>
          <DocumentThumbnails />
        </Panel>
        <ResizeHandle />
        <Panel defaultSize={60} minSize={30}>
          <PaperEditor />
        </Panel>
        <ResizeHandle />
        <Panel defaultSize={25} minSize={15} maxSize={40}>
          <NeuralBrainViewer />
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default Index;
