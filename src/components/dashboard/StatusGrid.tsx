import { 
  Activity, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  Database, 
  Server, 
  Zap 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    title: "API Throughput",
    value: "1.2k req/s",
    trend: "+12.5%",
    icon: Zap,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Data Sync Latency",
    value: "24ms",
    trend: "-2.4%",
    icon: Clock,
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    title: "Active Pipelines",
    value: "18/20",
    trend: "Stable",
    icon: Database,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    title: "System Uptime",
    value: "99.99%",
    trend: "Optimal",
    icon: Server,
    color: "text-slate-500",
    bg: "bg-slate-50",
  },
];

export function StatusGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-border shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${stat.bg}`}>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center gap-1 mt-1">
              <span className={`text-[10px] font-bold ${
                stat.trend.startsWith('+') ? 'text-green-600' : 
                stat.trend.startsWith('-') ? 'text-blue-600' : 'text-slate-500'
              }`}>
                {stat.trend}
              </span>
              <span className="text-[10px] text-muted-foreground">vs last hour</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
