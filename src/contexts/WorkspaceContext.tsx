import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface WorkspaceState {
  activeSection: number; // 0-based section/page index
  totalSections: number;
  setActiveSection: (index: number) => void;
  setTotalSections: (count: number) => void;
  scrollToSection: number | null; // set by thumbnail click, consumed by editor
  requestScrollTo: (index: number) => void;
  clearScrollRequest: () => void;
}

const WorkspaceContext = createContext<WorkspaceState | null>(null);

export const useWorkspace = () => {
  const ctx = useContext(WorkspaceContext);
  if (!ctx) throw new Error("useWorkspace must be used within WorkspaceProvider");
  return ctx;
};

export const WorkspaceProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [totalSections, setTotalSections] = useState(8);
  const [scrollToSection, setScrollToSection] = useState<number | null>(null);

  const requestScrollTo = useCallback((index: number) => {
    setActiveSection(index);
    setScrollToSection(index);
  }, []);

  const clearScrollRequest = useCallback(() => {
    setScrollToSection(null);
  }, []);

  return (
    <WorkspaceContext.Provider
      value={{
        activeSection,
        totalSections,
        setActiveSection,
        setTotalSections,
        scrollToSection,
        requestScrollTo,
        clearScrollRequest,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};
