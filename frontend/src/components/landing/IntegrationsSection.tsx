"use client";

import { Badge } from "@/components/ui/badge";

const integrationCategories = [
  {
    category: "Identity & Access",
    color: "#3B82F6",
    items: ["Okta", "Azure AD", "Google Workspace", "Duo Security"],
  },
  {
    category: "HRIS",
    color: "#8B5CF6",
    items: ["Workday", "BambooHR", "ADP", "Rippling"],
  },
  {
    category: "Communication",
    color: "#10B981",
    items: ["Slack", "Microsoft Teams", "Zoom", "Google Meet"],
  },
  {
    category: "Document & E-Sign",
    color: "#F59E0B",
    items: ["DocuSign", "Adobe Sign", "HelloSign", "MinIO"],
  },
  {
    category: "Learning & LMS",
    color: "#EF4444",
    items: ["Coursera for Business", "LinkedIn Learning", "Cornerstone", "DClaw Learn"],
  },
  {
    category: "Project Management",
    color: "#14B8A6",
    items: ["Jira", "Linear", "Asana", "Notion"],
  },
  {
    category: "Compliance & Legal",
    color: "#F97316",
    items: ["E-Verify", "I-9 Anywhere", "GDPR APIs", "Right-to-Work (UK)"],
  },
  {
    category: "Equipment & IT",
    color: "#6366F1",
    items: ["Jamf MDM", "Kandji", "ServiceNow", "Atlassian"],
  },
];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-24 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">Integrations</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Connects to Your Entire HR Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Native integrations with 30+ tools across identity, HRIS, communications, compliance, and learning.
            Plug in what you already use.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {integrationCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-md transition-shadow"
            >
              <div
                className="w-2 h-2 rounded-full mb-3"
                style={{ backgroundColor: cat.color }}
              />
              <h3 className="font-semibold text-sm mb-3" style={{ color: cat.color }}>
                {cat.category}
              </h3>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: cat.color }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground">
            + REST API & webhooks for custom integrations
          </p>
        </div>
      </div>
    </section>
  );
}
