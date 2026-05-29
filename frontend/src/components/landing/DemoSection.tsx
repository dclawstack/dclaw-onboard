"use client";

import { Badge } from "@/components/ui/badge";
import { Bot, GitBranch, FileText, Users, LayoutDashboard, Activity } from "lucide-react";

const screens = [
  {
    title: "AI Onboarding Copilot",
    subtitle: "Real-time chat + autonomous actions",
    icon: Bot,
    color: "#3B82F6",
    gradient: "from-blue-500 to-indigo-600",
    mockContent: [
      "👋 Welcome, Alex! I'm Buddy Bot.",
      "I've scheduled your Day 1 orientation at 9am.",
      "Your MacBook Pro ships tomorrow — tracking #TRK-4821.",
      "3 documents pending: W-4, I-9, NDA",
    ],
  },
  {
    title: "Skills Journey Builder",
    subtitle: "Visual dependency graph + skill mapping",
    icon: GitBranch,
    color: "#8B5CF6",
    gradient: "from-purple-500 to-violet-600",
    mockContent: [
      "Day 1: Company orientation (required)",
      "Day 3: Engineering onboarding ← blocks →",
      "Day 7: Security training (prerequisite met)",
      "Day 14: First code review submission",
    ],
  },
  {
    title: "Document Collection",
    subtitle: "AI-validated uploads + e-signature",
    icon: FileText,
    color: "#10B981",
    gradient: "from-emerald-500 to-teal-600",
    mockContent: [
      "✅ W-4 — Validated (AI score: 98/100)",
      "✅ I-9 — Verified via E-Verify",
      "⏳ Direct deposit form — Pending",
      "📋 NDA — Sent for e-signature",
    ],
  },
  {
    title: "Stakeholder Introductions",
    subtitle: "Auto-scheduled 1:1s with AI briefs",
    icon: Users,
    color: "#22C55E",
    gradient: "from-green-500 to-emerald-600",
    mockContent: [
      "Mon 10am: Sarah Chen (VP Eng) — AI brief ready",
      "Tue 2pm: Marcus Lee (Tech Lead) — your manager",
      "Wed 11am: Priya Patel (HR BP) — skip-level",
      "Thu 3pm: Coffee chat roulette matched",
    ],
  },
  {
    title: "Manager Command Center",
    subtitle: "Real-time progress for every direct report",
    icon: LayoutDashboard,
    color: "#14B8A6",
    gradient: "from-teal-500 to-cyan-600",
    mockContent: [
      "Alex J. — 78% complete ✅ On track",
      "Jordan K. — 42% complete ⚠️ Flagged",
      "Sam P. — 91% complete 🎉 Outstanding",
      "AI alert: Jordan hasn't logged in for 3 days",
    ],
  },
  {
    title: "Wellness & Belonging Pulse",
    subtitle: "ISO 45003-aligned micro-surveys",
    icon: Activity,
    color: "#F97316",
    gradient: "from-orange-500 to-red-600",
    mockContent: [
      "Day 7 pulse — Alex: 4.8/5 belonging",
      "Day 30 pulse — 92% team completion",
      "🔴 Burnout signal detected: Taylor R.",
      "Recommendation: Schedule manager check-in",
    ],
  },
];

export function DemoSection() {
  return (
    <section id="demo" className="py-24 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">Platform Preview</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            See Every Feature in Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A peek at the DClaw Onboard experience — from the AI copilot to the manager command center.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screens.map((screen) => {
            const Icon = screen.icon;
            return (
              <div
                key={screen.title}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                {/* Screen header */}
                <div className={`bg-gradient-to-r ${screen.gradient} p-4 text-white`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">{screen.title}</h3>
                      <p className="text-xs text-white/70">{screen.subtitle}</p>
                    </div>
                  </div>
                  {/* Fake browser chrome */}
                  <div className="flex items-center gap-1.5 mt-3">
                    <span className="w-2 h-2 bg-white/30 rounded-full" />
                    <span className="w-2 h-2 bg-white/30 rounded-full" />
                    <span className="w-2 h-2 bg-white/30 rounded-full" />
                  </div>
                </div>

                {/* Mock content */}
                <div className="p-4 space-y-2">
                  {screen.mockContent.map((line, i) => (
                    <div
                      key={i}
                      className="text-xs text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-2 font-mono"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
