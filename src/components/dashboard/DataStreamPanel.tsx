import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Terminal, Cpu, Database, Globe } from "lucide-react";

const logs = [
  { id: 1, type: "API", message: "GET /v1/models/inference-01", status: "200 OK", time: "12:34:01", icon: Globe },
  { id: 2, type: "DATA", message: "Pipeline 'UserSync' completed", status: "Success", time: "12:33:58", icon: Database },
  { id: 3, type: "SYS", message: "Model weights reloaded", status: "Info", time: "12:33:45", icon: Cpu },
  { id: 4, type: "API", message: "POST /v1/embeddings/batch", status: "201 Created", time: "12:33:30", icon: Globe },
  { id: 5, type: "DATA", message: "Vector DB compaction started", status: "Running", time: "12:33:12", icon: Database },
  { id: 6, type: "SYS", message: "Node-04 CPU spike detected", status: "Warning", time: "12:32:55", icon: Terminal },
  { id: 7, type: "API", message: "GET /v1/health", status: "200 OK", time: "12:32:40", icon: Globe },
  { id: 8, type: "DATA", message: "Source 'IoT-Stream' reconnected", status: "Success", time: "12:32:15", icon: Database },
];

export function DataStreamPanel() {
  return (
    <div className="bg-card border border-border rounded-xl flex flex-col h-[450px]">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold">Live System Stream</h3>
        </div>
        <Badge variant="outline" className="text-[10px] font-mono">LIVE</Badge>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {logs.map((log) => (
            <div key={log.id} className="data-stream-item flex items-start gap-3 group">
              <div className="mt-1 p-1.5 rounded bg-secondary group-hover:bg-primary/10 transition-colors">
                <log.icon className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    {log.type}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {log.time}
                  </span>
                </div>
                <p className="text-xs font-medium truncate">{log.message}</p>
                <div className="mt-1">
                  <span className={cn(
                    "text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-tighter",
                    log.status === "Warning" ? "bg-amber-50 text-amber-700 border border-amber-100" :
                    log.status === "Running" ? "bg-blue-50 text-blue-700 border border-blue-100" :
                    "bg-slate-50 text-slate-600 border border-slate-100"
                  )}>
                    {log.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
