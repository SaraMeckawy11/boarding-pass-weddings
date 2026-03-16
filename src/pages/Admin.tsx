import { useState } from "react";
import BoardingPassTheme from "@/themes/BoardingPassTheme";

const themes = [
  { id: "boarding-pass", name: "Boarding Pass", component: BoardingPassTheme },
];

const Admin = () => {
  const [activeTheme, setActiveTheme] = useState("boarding-pass");

  const ActiveComponent = themes.find((t) => t.id === activeTheme)?.component || BoardingPassTheme;

  return (
    <div className="min-h-screen bg-background">
      {/* Theme selector bar */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-secondary border-b border-border px-4 py-3 flex items-center gap-4">
        <span className="font-mono-data text-xs uppercase tracking-widest text-muted-foreground">
          Theme Preview
        </span>
        <div className="flex gap-2">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setActiveTheme(theme.id)}
              className={`font-mono-data text-xs uppercase tracking-widest px-4 py-1.5 rounded-sm transition-colors ${
                activeTheme === theme.id
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {theme.name}
            </button>
          ))}
        </div>
        <span className="font-mono-data text-[10px] uppercase tracking-widest text-muted-foreground ml-auto">
          More themes coming soon
        </span>
      </div>

      {/* Theme preview */}
      <div className="pt-12">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default Admin;
