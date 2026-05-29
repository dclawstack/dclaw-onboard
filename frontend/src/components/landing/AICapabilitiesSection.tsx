"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BrainCircuit,
  Network,
  Search,
  MessageSquare,
  Shield,
  Zap,
  BarChart3,
  Bell,
} from "lucide-react";

const capabilities = [
  {
    icon: BrainCircuit,
    title: "RAG-Powered Q&A",
    description:
      "New hires get accurate answers sourced from company wikis, policies, and handbooks. Context-aware and hallucination-resistant via retrieval-augmented generation.",
    color: "#3B82F6",
  },
  {
    icon: Network,
    title: "Multi-Agent Orchestration",
    description:
      "Specialized AI agents collaborate: the IT agent provisions hardware, the HR agent handles compliance, the buddy agent schedules coffee chats — all autonomously.",
    color: "#8B5CF6",
  },
  {
    icon: Zap,
    title: "Autonomous Task Execution",
    description:
      "Agents provision SaaS accounts, create calendar invites, assign training modules, and send welcome emails without human intervention.",
    color: "#10B981",
  },
  {
    icon: Search,
    title: "Skills Gap Analysis",
    description:
      "AI compares new hire competency profiles against role requirements and generates personalized learning paths to close gaps in the first 90 days.",
    color: "#F59E0B",
  },
  {
    icon: BarChart3,
    title: "Predictive Risk Detection",
    description:
      "ML models analyze engagement patterns, survey responses, and task velocity to flag new hires at risk of disengagement before it becomes a problem.",
    color: "#EF4444",
  },
  {
    icon: Bell,
    title: "Proactive Nudge Engine",
    description:
      "AI sends timely, context-aware reminders for pending tasks and learning deadlines. Detects disengagement patterns and escalates automatically.",
    color: "#14B8A6",
  },
  {
    icon: MessageSquare,
    title: "Inclusive Language Analysis",
    description:
      "Scans all onboarding content for biased or exclusionary language and suggests inclusive alternatives — DEI embedded, not bolted on.",
    color: "#F97316",
  },
  {
    icon: Shield,
    title: "On-Premise Fallback",
    description:
      "Falls back to local Ollama models when cloud AI is unavailable. Zero latency, always responsive, fully GDPR-compliant on-premise deployment option.",
    color: "#6366F1",
  },
];

export function AICapabilitiesSection() {
  return (
    <section id="ai-capabilities" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">AI / LLM</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Agentic AI That Works While You Sleep
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Not just a chatbot — a full AI layer that autonomously provisions, schedules, analyses, and
            intervenes across the entire onboarding lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <Card
                key={cap.title}
                className="border hover:shadow-lg transition-shadow duration-300 group"
              >
                <CardContent className="pt-6">
                  <div
                    className="p-3 rounded-xl inline-flex mb-4"
                    style={{ backgroundColor: `${cap.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: cap.color }} />
                  </div>
                  <h3 className="font-bold text-base mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cap.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* AI Stack callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2 opacity-70">AI Stack</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-medium">
            {["OpenRouter", "Kimi K2.5", "Ollama", "LangChain RAG", "Temporal.io workflows", "Embeddings + Vector DB"].map((item) => (
              <span key={item} className="px-3 py-1 bg-white/15 rounded-full backdrop-blur-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
