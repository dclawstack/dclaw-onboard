"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getIcon } from "./icons";
import type { Section } from "@/data/types";

interface SectionRendererProps {
  section: Section;
  featureColor: string;
}

export function SectionRenderer({ section, featureColor }: SectionRendererProps) {
  switch (section.type) {
    case "features":
      return <FeaturesSection section={section} featureColor={featureColor} />;
    case "stats":
      return <StatsSection section={section} featureColor={featureColor} />;
    case "tech":
      return <TechSection section={section} featureColor={featureColor} />;
    default:
      return null;
  }
}

function FeaturesSection({ section, featureColor }: { section: Section; featureColor: string }) {
  const cols = section.columns || 3;
  const gridCols =
    cols === 2
      ? "md:grid-cols-2"
      : cols === 4
        ? "md:grid-cols-4"
        : "md:grid-cols-3";

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {section.title}
        </h2>
        <div
          className="w-16 h-1 mx-auto rounded-full"
          style={{ backgroundColor: featureColor }}
        />
      </div>

      <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
        {section.items.map((item, i) => {
          const Icon = item.icon ? getIcon(item.icon) : null;
          return (
            <Card
              key={i}
              className="group border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-800 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="pt-6">
                {Icon && (
                  <div
                    className="p-2.5 rounded-xl inline-flex mb-4"
                    style={{ backgroundColor: `${featureColor}12` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: featureColor }} />
                  </div>
                )}
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

function StatsSection({ section, featureColor }: { section: Section; featureColor: string }) {
  return (
    <section
      className="py-20 px-6"
      style={{ backgroundColor: `${featureColor}08` }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {section.title}
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ backgroundColor: featureColor }}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {section.items.map((item, i) => (
            <div key={i} className="text-center">
              <div
                className="text-4xl md:text-5xl font-extrabold mb-2"
                style={{ color: featureColor }}
              >
                {item.value}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px] mx-auto">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechSection({ section, featureColor }: { section: Section; featureColor: string }) {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {section.title}
        </h2>
        <div
          className="w-16 h-1 mx-auto rounded-full"
          style={{ backgroundColor: featureColor }}
        />
      </div>

      <Card className="max-w-2xl mx-auto overflow-hidden">
        <div
          className="h-1 w-full"
          style={{ backgroundColor: featureColor }}
        />
        <CardContent className="pt-6">
          <div className="space-y-4">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800 last:border-0"
              >
                <span className="text-sm font-medium text-muted-foreground mb-1 sm:mb-0">
                  {item.label}
                </span>
                <span className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
