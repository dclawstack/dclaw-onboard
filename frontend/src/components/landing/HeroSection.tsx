"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { getIcon } from "./icons";

interface HeroSectionProps {
  feature: {
    name: string;
    shortName: string;
    priority: string;
    status: string;
    color: string;
    gradient: string;
    icon: string;
    description: string;
    hero: {
      headline: string;
      subheadline: string;
      cta: string;
      ctaLink: string;
    };
  };
}

export function HeroSection({ feature }: HeroSectionProps) {
  const Icon = getIcon(feature.icon);

  return (
    <section className={`relative overflow-hidden bg-gradient-to-br ${feature.gradient} text-white`}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Priority badge */}
          <div className="flex items-center gap-3">
            <Badge className="bg-white/20 text-white border-white/20 backdrop-blur-sm px-3 py-1">
              {feature.priority}
            </Badge>
            <Badge className="bg-white/20 text-white border-white/20 backdrop-blur-sm px-3 py-1 capitalize">
              {feature.status.replace("-", " ")}
            </Badge>
          </div>

          {/* Icon */}
          <div className="p-4 bg-white/15 rounded-2xl backdrop-blur-sm">
            <Icon className="w-10 h-10" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl">
            {feature.hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            {feature.hero.subheadline}
          </p>

          {/* Description */}
          <p className="text-white/60 max-w-xl text-sm md:text-base">
            {feature.description}
          </p>

          {/* CTA */}
          <a href={feature.hero.ctaLink}>
            <Button
              size="lg"
              className="mt-4 bg-white text-gray-900 hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              {feature.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z"
            className="fill-white dark:fill-gray-950"
          />
        </svg>
      </div>
    </section>
  );
}
