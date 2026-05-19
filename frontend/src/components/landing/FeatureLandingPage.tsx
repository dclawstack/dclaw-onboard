"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { HeroSection } from "./HeroSection";
import { SectionRenderer } from "./SectionRenderer";
import type { Feature } from "@/data/types";

interface FeatureLandingPageProps {
  feature: Feature;
  prevFeature: Feature | null;
  nextFeature: Feature | null;
}

export function FeatureLandingPage({ feature, prevFeature, nextFeature }: FeatureLandingPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <HeroSection feature={feature} />

      {/* Sections */}
      {feature.sections.map((section, i) => (
        <SectionRenderer
          key={i}
          section={section}
          featureColor={feature.color}
        />
      ))}

      {/* Back to home + navigation */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/">
            <Button variant="outline" className="group">
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to All Features
            </Button>
          </Link>

          <div className="flex items-center gap-4">
            {prevFeature && (
              <Link href={`/features/${prevFeature.slug}`}>
                <Button variant="ghost" size="sm" className="group">
                  <ArrowLeft className="mr-1 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span className="hidden sm:inline">{prevFeature.shortName}</span>
                </Button>
              </Link>
            )}

            <Badge variant="outline" className="text-xs">
              {feature.priority} • {feature.status.replace("-", " ")}
            </Badge>

            {nextFeature && (
              <Link href={`/features/${nextFeature.slug}`}>
                <Button variant="ghost" size="sm" className="group">
                  <span className="hidden sm:inline">{nextFeature.shortName}</span>
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
