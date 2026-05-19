"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FeatureCard } from "@/components/landing/FeatureCard";
import featuresData from "@/data/features.json";
import type { Feature, AppData } from "@/data/types";

const data = featuresData as unknown as AppData;

const priorityOrder: Record<string, number> = { P0: 0, P1: 1, P2: 2 };

export default function Home() {
  const [search, setSearch] = useState("");
  const [activePriority, setActivePriority] = useState<string | null>(null);

  const filtered = data.features.filter((f: Feature) => {
    const matchesSearch =
      !search ||
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.description.toLowerCase().includes(search.toLowerCase()) ||
      f.shortName.toLowerCase().includes(search.toLowerCase());
    const matchesPriority = !activePriority || f.priority === activePriority;
    return matchesSearch && matchesPriority;
  });

  const p0Count = data.features.filter((f: Feature) => f.priority === "P0").length;
  const p1Count = data.features.filter((f: Feature) => f.priority === "P1").length;
  const p2Count = data.features.filter((f: Feature) => f.priority === "P2").length;

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="flex flex-col items-center text-center space-y-6">
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm">
              {data.app.category} • {data.features.length} Features
            </Badge>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl">
              {data.app.name}
            </h1>

            <p className="text-xl md:text-2xl text-white/80 font-medium max-w-2xl">
              {data.app.tagline}
            </p>

            <p className="text-white/60 max-w-xl text-base md:text-lg leading-relaxed">
              {data.app.description}
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/features/ai-onboarding-copilot">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-xl group">
                  <Sparkles className="mr-2 w-5 h-5" />
                  Explore Buddy Bot
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                  View All Features
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
              className="fill-white dark:fill-gray-950"
            />
          </svg>
        </div>
      </section>

      {/* Filter & Search */}
      <section id="features" className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              {data.app.name} Features
            </h2>
            <p className="text-muted-foreground mt-1">
              {data.features.length} features across P0, P1, and P2 priorities
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search features..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 w-60"
              />
            </div>
          </div>
        </div>

        {/* Priority filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          <Button
            variant={activePriority === null ? "default" : "outline"}
            size="sm"
            onClick={() => setActivePriority(null)}
            className="rounded-full"
          >
            All ({data.features.length})
          </Button>
          <Button
            variant={activePriority === "P0" ? "default" : "outline"}
            size="sm"
            onClick={() => setActivePriority(activePriority === "P0" ? null : "P0")}
            className={`rounded-full ${activePriority === "P0" ? "" : "text-red-500 border-red-200 hover:text-red-600"}`}
          >
            P0 — Must Have ({p0Count})
          </Button>
          <Button
            variant={activePriority === "P1" ? "default" : "outline"}
            size="sm"
            onClick={() => setActivePriority(activePriority === "P1" ? null : "P1")}
            className={`rounded-full ${activePriority === "P1" ? "" : "text-amber-500 border-amber-200 hover:text-amber-600"}`}
          >
            P1 — Should Have ({p1Count})
          </Button>
          <Button
            variant={activePriority === "P2" ? "default" : "outline"}
            size="sm"
            onClick={() => setActivePriority(activePriority === "P2" ? null : "P2")}
            className={`rounded-full ${activePriority === "P2" ? "" : "text-slate-500 border-slate-200 hover:text-slate-600"}`}
          >
            P2 — Could Have ({p2Count})
          </Button>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg">No features match your search.</p>
            <Button
              variant="link"
              onClick={() => {
                setSearch("");
                setActivePriority(null);
              }}
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

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
          <p>{data.app.name} — {data.app.tagline}</p>
          <p className="mt-1">A DClaw Stack vertical SaaS application</p>
        </div>
      </footer>
    </main>
  );
}
