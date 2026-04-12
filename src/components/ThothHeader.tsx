import thothLogo from "@/assets/thoth-logo.jpg";
import { Save, Download, Settings, Search } from "lucide-react";

const ThothHeader = () => {
  return (
    <header className="h-12 flex items-center justify-between px-4 glass-panel border-b z-50">
      <div className="flex items-center gap-3">
        <img src={thothLogo} alt="THOTH Logo" className="h-7 w-7 rounded" />
        <span className="font-display font-semibold text-sm tracking-wide text-foreground">
          THOTH
        </span>
        <span className="text-[10px] font-medium text-muted-foreground bg-muted px-1.5 py-0.5 rounded-sm uppercase tracking-widest">
          Studio
        </span>
      </div>

      <div className="flex items-center gap-1">
        <HeaderButton icon={Search} label="Search" />
        <HeaderButton icon={Save} label="Save" />
        <HeaderButton icon={Download} label="Export" />
        <HeaderButton icon={Settings} label="Settings" />
      </div>
    </header>
  );
};

const HeaderButton = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <button
    className="h-8 w-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
    title={label}
  >
    <Icon size={16} strokeWidth={1.5} />
  </button>
);

export default ThothHeader;
