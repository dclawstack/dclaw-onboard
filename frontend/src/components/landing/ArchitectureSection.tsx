"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Database,
  Cpu,
  Shield,
  Zap,
  Cloud,
  Bot,
  Code2,
} from "lucide-react";

const layers = [
  {
    label: "Frontend",
    color: "#3B82F6",
    bg: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    items: [
      { icon: Globe, name: "Next.js 14", desc: "App Router + SSG" },
      { icon: Code2, name: "TypeScript", desc: "Type-safe UI" },
      { icon: Zap, name: "Tailwind CSS", desc: "Utility-first styling" },
    ],
  },
  {
    label: "Backend API",
    color: "#8B5CF6",
    bg: "from-purple-50 to-purple-100",
    border: "border-purple-200",
    items: [
      { icon: Cpu, name: "FastAPI", desc: "Async Python API" },
      { icon: Database, name: "PostgreSQL", desc: "Primary database" },
      { icon: Shield, name: "SQLAlchemy 2.0", desc: "ORM + migrations" },
    ],
  },
  {
    label: "AI Layer",
    color: "#10B981",
    bg: "from-emerald-50 to-emerald-100",
    border: "border-emerald-200",
    items: [
      { icon: Bot, name: "RAG Engine", desc: "Context-aware Q&A" },
      { icon: Cloud, name: "OpenRouter / Kimi K2.5", desc: "Cloud LLM" },
      { icon: Shield, name: "Ollama fallback", desc: "On-premise option" },
    ],
  },
  {
    label: "Infrastructure",
    color: "#F59E0B",
    bg: "from-amber-50 to-amber-100",
    border: "border-amber-200",
    items: [
      { icon: Cloud, name: "Docker + Compose", desc: "Container orchestration" },
      { icon: Globe, name: "Kubernetes / Helm", desc: "Production deployment" },
      { icon: Shield, name: "GitHub Actions CI", desc: "Automated pipelines" },
    ],
  },
];

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">Architecture</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Built for Scale from Day One
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Modern full-stack architecture designed for enterprise-grade reliability, security, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {layers.map((layer) => (
            <Card
              key={layer.label}
              className={`border-2 ${layer.border} overflow-hidden`}
            >
              <div
                className="h-1.5 w-full"
                style={{ backgroundColor: layer.color }}
              />
              <CardContent className="pt-5 pb-6">
                <h3 className="font-bold text-lg mb-4" style={{ color: layer.color }}>
                  {layer.label}
                </h3>
                <div className="space-y-3">
                  {layer.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.name} className="flex items-start gap-3">
                        <div
                          className="p-2 rounded-lg mt-0.5 flex-shrink-0"
                          style={{ backgroundColor: `${layer.color}15` }}
                        >
                          <Icon className="w-4 h-4" style={{ color: layer.color }} />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Data flow diagram placeholder */}
        <div className="mt-10 p-8 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 text-center bg-white dark:bg-gray-900">
          <p className="text-sm font-mono text-muted-foreground mb-2">System Data Flow</p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium">
            {["New Hire Portal", "→", "Next.js Frontend", "→", "FastAPI Backend", "→", "PostgreSQL", "⟷", "AI Agent Layer", "→", "Integrations"]}
          </div>
        </div>
      </div>
    </section>
  );
}
