import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { motion } from "motion/react";

interface Node extends d3.SimulationNodeDatum {
  id: string;
  type: "source" | "process" | "sink";
  label: string;
}

interface Link extends d3.SimulationLinkDatum<Node> {
  value: number;
}

const nodes: Node[] = [
  { id: "1", type: "source", label: "User Interaction API", x: 100, y: 150 },
  { id: "2", type: "source", label: "IoT Sensor Stream", x: 100, y: 300 },
  { id: "3", type: "process", label: "Data Normalizer", x: 300, y: 225 },
  { id: "4", type: "process", label: "AI Inference Engine", x: 500, y: 150 },
  { id: "5", type: "process", label: "Vector Database", x: 500, y: 300 },
  { id: "6", type: "sink", label: "Analytics Dashboard", x: 700, y: 150 },
  { id: "7", type: "sink", label: "Real-time Feedback", x: 700, y: 300 },
];

const links: Link[] = [
  { source: "1", target: "3", value: 2 },
  { source: "2", target: "3", value: 2 },
  { source: "3", target: "4", value: 3 },
  { source: "3", target: "5", value: 3 },
  { source: "4", target: "6", value: 2 },
  { source: "5", target: "7", value: 2 },
  { source: "4", target: "5", value: 1 },
];

export function PipelineVisualizer() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 450;

    svg.selectAll("*").remove();

    // Define gradients
    const defs = svg.append("defs");
    const gradient = defs.append("linearGradient")
      .attr("id", "line-gradient")
      .attr("gradientUnits", "userSpaceOnUse");
    
    gradient.append("stop").attr("offset", "0%").attr("stop-color", "#3b82f6");
    gradient.append("stop").attr("offset", "100%").attr("stop-color", "#60a5fa");

    // Draw links
    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "#e2e8f0")
      .attr("stroke-width", d => d.value * 2)
      .attr("x1", d => (nodes.find(n => n.id === d.source) as Node).x!)
      .attr("y1", d => (nodes.find(n => n.id === d.source) as Node).y!)
      .attr("x2", d => (nodes.find(n => n.id === d.target) as Node).x!)
      .attr("y2", d => (nodes.find(n => n.id === d.target) as Node).y!);

    // Animate particles along links
    links.forEach((l, i) => {
      const source = nodes.find(n => n.id === l.source) as Node;
      const target = nodes.find(n => n.id === l.target) as Node;
      
      const animate = () => {
        svg.append("circle")
          .attr("r", 3)
          .attr("fill", "#3b82f6")
          .attr("cx", source.x!)
          .attr("cy", source.y!)
          .transition()
          .duration(2000 + Math.random() * 1000)
          .ease(d3.easeLinear)
          .attr("cx", target.x!)
          .attr("cy", target.y!)
          .on("end", function() {
            d3.select(this).remove();
            animate();
          });
      };
      
      // Staggered start
      setTimeout(animate, i * 500);
    });

    // Draw nodes
    const nodeGroup = svg.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .attr("class", "pipeline-node cursor-pointer")
      .attr("transform", d => `translate(${d.x},${d.y})`);

    nodeGroup.append("rect")
      .attr("width", 140)
      .attr("height", 50)
      .attr("x", -70)
      .attr("y", -25)
      .attr("rx", 8)
      .attr("fill", d => d.type === "process" ? "#eff6ff" : "#ffffff")
      .attr("stroke", d => d.type === "process" ? "#3b82f6" : "#e2e8f0")
      .attr("stroke-width", 2);

    nodeGroup.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .attr("font-size", "11px")
      .attr("font-weight", "600")
      .attr("fill", "#1e293b")
      .text(d => d.label);

  }, []);

  return (
    <div className="bg-card border border-border rounded-xl p-8 overflow-hidden relative">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-lg font-semibold">System Architecture</h3>
          <p className="text-sm text-muted-foreground">Real-time data flow and service orchestration</p>
        </div>
        <div className="flex gap-4 text-xs font-medium">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border border-border bg-white" />
            <span>Endpoints</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border border-primary bg-blue-50" />
            <span>Processing</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <svg 
          ref={svgRef} 
          width="800" 
          height="450" 
          viewBox="0 0 800 450"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}
