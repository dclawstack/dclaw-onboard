"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Search, CheckCircle2, Users, Clock, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FeatureCard } from "@/components/landing/FeatureCard";
import { NavigationBar } from "@/components/landing/NavigationBar";
import { ArchitectureSection } from "@/components/landing/ArchitectureSection";
import { AICapabilitiesSection } from "@/components/landing/AICapabilitiesSection";
import { IntegrationsSection } from "@/components/landing/IntegrationsSection";
import { APISection } from "@/components/landing/APISection";
import { DemoSection } from "@/components/landing/DemoSection";
import { AboutSection } from "@/components/landing/AboutSection";
import featuresData from "@/data/features.json";
import type { Feature, AppData } from "@/data/types";

const data = featuresData as unknown as AppData;

const priorityOrder: Record<string, number> = { P0: 0, P1: 1, P2: 2 };

const stats = [
  { value: "82%", label: "Retention improvement", icon: TrendingUp, color: "#3B82F6" },
  { value: "70%", label: "Less manual HR work", icon: Zap, color: "#8B5CF6" },
  { value: "<2 min", label: "To generate 30-day plan", icon: Clock, color: "#10B981" },
  { value: "24/7", label: "AI agent availability", icon: CheckCircle2, color: "#F59E0B" },
];

const trustedBy = [
  "Engineering Teams", "HR Operations", "People Partners",
  "IT Departments", "L&D Teams", "Executive Offices",
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [activePriority, setActivePriority] = useState<string | null>(null);

  const filtered = data.features
    .filter((f: Feature) => {
      const matchesSearch =
        !search ||
        f.name.toLowerCase().includes(search.toLowerCase()) ||
        f.description.toLowerCase().includes(search.toLowerCase()) ||
        f.shortName.toLowerCase().includes(search.toLowerCase());
      const matchesPriority = !activePriority || f.priority === activePriority;
      return matchesSearch && matchesPriority;
    })
    .sort((a: Feature, b: Feature) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  const p0Count = data.features.filter((f: Feature) => f.priority === "P0").length;
  const p1Count = data.features.filter((f: Feature) => f.priority === "P1").length;
  const p2Count = data.features.filter((f: Feature) => f.priority === "P2").length;

  return (
    <main className="min-h-screen bg-background">
      <NavigationBar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 text-white pt-16">
        {/* Animated blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm text-white/90">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {data.app.category} Platform — {data.features.length} Features Available
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] max-w-4xl">
              Onboarding That{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Actually Works
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 font-medium max-w-2xl leading-relaxed">
              {data.app.tagline}
            </p>

            <p className="text-white/50 max-w-xl text-base md:text-lg leading-relaxed">
              {data.app.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <Link href="/features/agentic-ai-onboarding">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg rounded-xl group shadow-lg shadow-blue-500/25"
                >
                  <Sparkles className="mr-2 w-5 h-5" />
                  Meet the AI Agent
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#features">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
                >
                  Explore {data.features.length} Features
                </Button>
              </a>
            </div>

            {/* Trusted by */}
            <div className="pt-4">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Used by teams in</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {trustedBy.map((team) => (
                  <span
                    key={team}
                    className="text-xs text-white/60 px-3 py-1 bg-white/5 rounded-full border border-white/10"
                  >
                    {team}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="relative">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path
              d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
              className="fill-white dark:fill-gray-950"
            />
          </svg>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────── */}
      <section className="py-14 px-6 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div
                  className="inline-flex p-2.5 rounded-xl mb-3"
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold tracking-tight mb-1" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground max-w-[140px] mx-auto">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Features Grid ────────────────────────────────────────────── */}
      <section id="features" className="max-w-6xl mx-auto px-6 pt-20 pb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <Badge className="mb-3 bg-blue-100 text-blue-700 border-blue-200">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Everything Modern HR Needs
            </h2>
            <p className="text-muted-foreground mt-2 max-w-md">
              {data.features.length} purpose-built features across P0, P1, and P2 priorities — from AI agents to compliance autopilot.
            </p>
          </div>

          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search features..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 w-full sm:w-64"
            />
          </div>
        </div>

        {/* Priority filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {[
            { label: `All (${data.features.length})`, value: null, className: "" },
            { label: `P0 — Must Have (${p0Count})`, value: "P0", className: "text-red-500 border-red-200 hover:text-red-600" },
            { label: `P1 — Should Have (${p1Count})`, value: "P1", className: "text-amber-500 border-amber-200 hover:text-amber-600" },
            { label: `P2 — Could Have (${p2Count})`, value: "P2", className: "text-slate-500 border-slate-200 hover:text-slate-600" },
          ].map((btn) => (
            <Button
              key={String(btn.value)}
              variant={activePriority === btn.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActivePriority(activePriority === btn.value ? null : btn.value)}
              className={`rounded-full ${activePriority === btn.value ? "" : btn.className}`}
            >
              {btn.label}
            </Button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg">No features match your search.</p>
            <Button
              variant="link"
              onClick={() => { setSearch(""); setActivePriority(null); }}
              className="mt-2"
            >
              Clear filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((feature: Feature, i: number) => (
              <FeatureCard key={feature.id} feature={feature} index={i} />
            ))}
          </div>
        )}
      </section>

      {/* ── Architecture ─────────────────────────────────────────────── */}
      <ArchitectureSection />

      {/* ── AI/LLM Capabilities ──────────────────────────────────────── */}
      <AICapabilitiesSection />

      {/* ── Demo / Screens ───────────────────────────────────────────── */}
      <DemoSection />

      {/* ── Integrations ─────────────────────────────────────────────── */}
      <IntegrationsSection />

      {/* ── API ──────────────────────────────────────────────────────── */}
      <APISection />

      {/* ── About / Contact ──────────────────────────────────────────── */}
      <AboutSection />

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 font-bold text-lg mb-3">
                <div className="p-1.5 bg-blue-600 rounded-lg">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span>{data.app.name}</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                {data.app.tagline}
              </p>
              <p className="text-xs text-muted-foreground mt-3">
                A DClaw Stack vertical SaaS application
              </p>
            </div>

            {/* Features links */}
            <div>
              <h4 className="font-semibold text-sm mb-4">P0 Features</h4>
              <ul className="space-y-2">
                {data.features.filter((f: Feature) => f.priority === "P0").map((f: Feature) => (
                  <li key={f.id}>
                    <Link
                      href={`/features/${f.slug}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {f.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Platform links */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Platform</h4>
              <ul className="space-y-2">
                {[
                  { label: "Architecture", href: "#architecture" },
                  { label: "AI / LLM", href: "#ai-capabilities" },
                  { label: "Integrations", href: "#integrations" },
                  { label: "API Docs", href: "#api" },
                  { label: "About", href: "#about" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © 2026 DClaw Stack. Built by{" "}
              <a href="mailto:kamavaram.ramsai@gmail.com" className="underline underline-offset-2 hover:text-foreground">
                ramsai
              </a>
            </p>
            <div className="flex gap-4 text-xs text-muted-foreground">
              <span>Next.js 14</span>
              <span>•</span>
              <span>FastAPI</span>
              <span>•</span>
              <span>Tailwind CSS</span>
              <span>•</span>
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
