"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, ExternalLink, Bot, Users, Building2 } from "lucide-react";

const teamValues = [
  {
    icon: Bot,
    title: "AI-First, Not AI-Washed",
    description:
      "Every feature is powered by real AI that takes real action — not a chatbot wrapper around a static FAQ.",
    color: "#3B82F6",
  },
  {
    icon: Users,
    title: "Human Outcomes at the Center",
    description:
      "Technology exists to serve people. Our north star is a new hire's sense of belonging and readiness.",
    color: "#8B5CF6",
  },
  {
    icon: Building2,
    title: "Enterprise-Grade from Day One",
    description:
      "Built with compliance, security, and scalability baked in — not bolted on after product-market fit.",
    color: "#10B981",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — About */}
          <div>
            <Badge className="mb-4 bg-gray-100 text-gray-700 border-gray-200">About DClaw Onboard</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Built by the DClaw Stack team for modern HR teams
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              DClaw Onboard is part of the DClaw Stack vertical SaaS platform — a collection of
              AI-native enterprise applications for the modern workforce. We built DClaw Onboard because
              the gap between "offer accepted" and "fully productive employee" costs companies billions.
            </p>
            <p className="text-muted-foreground text-base mb-8 leading-relaxed">
              With 2026's distributed, skills-based, DEI-conscious workplace in mind, we designed every
              feature to be async-first, AI-assisted, and measurably effective.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="mailto:kamavaram.ramsai@gmail.com">
                <Button variant="outline" className="group gap-2">
                  <Mail className="w-4 h-4" />
                  Contact Us
                </Button>
              </a>
              <a
                href="https://github.com/dclawstack"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="group gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right — Values */}
          <div className="space-y-4">
            {teamValues.map((value) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="border hover:shadow-md transition-shadow"
                >
                  <CardContent className="pt-5 flex gap-4">
                    <div
                      className="p-2.5 rounded-xl flex-shrink-0 h-fit"
                      style={{ backgroundColor: `${value.color}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: value.color }} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to transform your onboarding?</h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Reach out to discuss a pilot, integration, or custom deployment for your team.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="mailto:kamavaram.ramsai@gmail.com">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                <Mail className="w-4 h-4" />
                kamavaram.ramsai@gmail.com
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
