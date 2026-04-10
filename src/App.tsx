/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sidebar } from "./components/layout/Sidebar";
import { Header } from "./components/layout/Header";
import { StatusGrid } from "./components/dashboard/StatusGrid";
import { PipelineVisualizer } from "./components/dashboard/PipelineVisualizer";
import { DataStreamPanel } from "./components/dashboard/DataStreamPanel";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Network, Database, Layers } from "lucide-react";

export default function App() {
  return (
    <TooltipProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        
        <main className="flex-1 flex flex-col">
          <Header />
          
          <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">System Orchestration</h1>
              <p className="text-muted-foreground">Monitor and manage your AI learning infrastructure and data pipelines.</p>
            </div>

            <StatusGrid />

            <Tabs defaultValue="architecture" className="w-full">
              <div className="flex items-center justify-between mb-4">
                <TabsList className="bg-secondary/50 p-1">
                  <TabsTrigger value="architecture" className="flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    Architecture
                  </TabsTrigger>
                  <TabsTrigger value="endpoints" className="flex items-center gap-2">
                    <Network className="w-4 h-4" />
                    Endpoints
                  </TabsTrigger>
                  <TabsTrigger value="pipelines" className="flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    Pipelines
                  </TabsTrigger>
                  <TabsTrigger value="health" className="flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    Health
                  </TabsTrigger>
                </TabsList>
                
                <div className="text-xs text-muted-foreground font-medium">
                  Last updated: <span className="font-mono">12:34:01 UTC</span>
                </div>
              </div>

              <TabsContent value="architecture" className="mt-0 space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <PipelineVisualizer />
                  </div>
                  <div className="lg:col-span-1">
                    <DataStreamPanel />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="endpoints" className="mt-0">
                <div className="bg-card border border-border rounded-xl p-12 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <Network className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">Endpoint Management</h3>
                  <p className="text-muted-foreground max-w-sm mx-auto mt-2">
                    Detailed view of all connected API endpoints and their respective response times.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="pipelines" className="mt-0">
                <div className="bg-card border border-border rounded-xl p-12 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">Pipeline Configuration</h3>
                  <p className="text-muted-foreground max-w-sm mx-auto mt-2">
                    Configure and schedule data synchronization tasks across your infrastructure.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="health" className="mt-0">
                <div className="bg-card border border-border rounded-xl p-12 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">System Health Metrics</h3>
                  <p className="text-muted-foreground max-w-sm mx-auto mt-2">
                    Advanced telemetry and resource utilization monitoring for all cluster nodes.
                  </p>
                </div>
              </TabsContent>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-blue-600 rounded-xl text-white relative overflow-hidden group cursor-pointer">
                <div className="relative z-10">
                  <h4 className="font-bold mb-1">Scale Infrastructure</h4>
                  <p className="text-xs text-blue-100">Add new compute nodes or expand storage capacity.</p>
                </div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
              </div>
              
              <div className="p-6 bg-slate-900 rounded-xl text-white relative overflow-hidden group cursor-pointer">
                <div className="relative z-10">
                  <h4 className="font-bold mb-1">Security Audit</h4>
                  <p className="text-xs text-slate-400">Review access logs and encryption protocols.</p>
                </div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
              </div>

              <div className="p-6 bg-white border border-border rounded-xl relative overflow-hidden group cursor-pointer">
                <div className="relative z-10">
                  <h4 className="font-bold mb-1 text-slate-900">Documentation</h4>
                  <p className="text-xs text-muted-foreground">Access API references and system guides.</p>
                </div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-slate-100 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </TooltipProvider>
  );
}
