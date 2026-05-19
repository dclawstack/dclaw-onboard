"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { getIcon } from "./icons";
import type { Feature } from "@/data/types";

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  const Icon = getIcon(feature.icon);

  return (
    <Link href={`/features/${feature.slug}`} className="group block h-full">
      <Card className="h-full border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
        {/* Top color strip */}
        <div
          className="h-1.5 w-full"
          style={{ backgroundColor: feature.color }}
        />

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div
              className="p-2.5 rounded-xl"
              style={{ backgroundColor: `${feature.color}15` }}
            >
              <Icon className="w-5 h-5" style={{ color: feature.color }} />
            </div>
            <div className="flex gap-1.5">
              <Badge
                variant="outline"
                className="text-xs font-medium"
                style={{ borderColor: feature.color, color: feature.color }}
              >
                {feature.priority}
              </Badge>
              <Badge variant="secondary" className="text-xs capitalize">
                {feature.status.replace("-", " ")}
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <h3 className="font-bold text-lg mb-1.5 group-hover:text-[var(--hover-color)] transition-colors"
            style={{ "--hover-color": feature.color } as React.CSSProperties}>
            {feature.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
            {feature.description}
          </p>

          <div className="flex items-center text-sm font-medium"
            style={{ color: feature.color }}>
            <span>Explore</span>
            <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
