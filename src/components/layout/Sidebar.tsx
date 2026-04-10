import { motion } from "motion/react";
import { 
  LayoutDashboard, 
  Network, 
  Database, 
  Settings, 
  Shield, 
  Activity,
  Cpu,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Network, label: "API Endpoints" },
  { icon: Database, label: "Data Pipelines" },
  { icon: Cpu, label: "Model Training" },
  { icon: Shield, label: "Security" },
  { icon: Activity, label: "System Health" },
  { icon: Zap, label: "Automations" },
  { icon: Settings, label: "Settings" },
];

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-border bg-card h-screen flex flex-col sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Network className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-tight">THE LEARNING COMPANY</span>
        </div>
        
        <nav className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                item.active 
                  ? "bg-accent text-accent-foreground" 
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      
      <div className="mt-auto p-6 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-200" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Admin User</span>
            <span className="text-xs text-muted-foreground">System Architect</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
