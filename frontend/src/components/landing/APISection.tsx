"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const apiEndpoints = [
  {
    method: "GET",
    path: "/health/",
    description: "Service health check",
    methodColor: "text-green-600 bg-green-50",
  },
  {
    method: "POST",
    path: "/api/v1/ai/agent",
    description: "Trigger agentic AI workflow for a new hire",
    methodColor: "text-blue-600 bg-blue-50",
  },
  {
    method: "GET",
    path: "/api/v1/skills-journeys",
    description: "List all skills-based journey templates",
    methodColor: "text-green-600 bg-green-50",
  },
  {
    method: "POST",
    path: "/api/v1/skills-journeys",
    description: "Create a new skills journey from template or scratch",
    methodColor: "text-blue-600 bg-blue-50",
  },
  {
    method: "GET",
    path: "/api/v1/documents",
    description: "List document collection requests for a hire",
    methodColor: "text-green-600 bg-green-50",
  },
  {
    method: "POST",
    path: "/api/v1/documents/validate",
    description: "AI-validate an uploaded document",
    methodColor: "text-blue-600 bg-blue-50",
  },
  {
    method: "GET",
    path: "/api/v1/compliance",
    description: "Get compliance status and requirements",
    methodColor: "text-green-600 bg-green-50",
  },
  {
    method: "POST",
    path: "/api/v1/onboarding/pulse",
    description: "Submit a wellness & belonging pulse check",
    methodColor: "text-blue-600 bg-blue-50",
  },
  {
    method: "GET",
    path: "/api/v1/stakeholders",
    description: "Get stakeholder introduction schedule",
    methodColor: "text-green-600 bg-green-50",
  },
  {
    method: "POST",
    path: "/api/v1/provisioning/equipment",
    description: "Trigger zero-touch equipment provisioning",
    methodColor: "text-blue-600 bg-blue-50",
  },
];

const apiFeatures = [
  { label: "Auth", value: "JWT Bearer tokens" },
  { label: "Format", value: "JSON REST + webhooks" },
  { label: "Docs", value: "OpenAPI 3.1 (Swagger UI)" },
  { label: "Rate Limiting", value: "1000 req/min per tenant" },
  { label: "Versioning", value: "/api/v1/ prefix" },
  { label: "Async", value: "FastAPI native async" },
];

export function APISection() {
  return (
    <section id="api" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">API</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Developer-First API
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Full REST API with OpenAPI 3.1 documentation. Automate every onboarding workflow
            programmatically or build custom integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Endpoint list */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="bg-gray-900 text-gray-100 px-4 py-3 flex items-center gap-2 text-sm font-mono">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="ml-2 text-gray-400">DClaw Onboard API — v1.0.0</span>
              </div>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-100 dark:divide-gray-800">
                  {apiEndpoints.map((ep) => (
                    <div
                      key={`${ep.method}-${ep.path}`}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                    >
                      <span
                        className={`text-xs font-bold font-mono px-2 py-0.5 rounded flex-shrink-0 mt-0.5 ${ep.methodColor}`}
                      >
                        {ep.method}
                      </span>
                      <div>
                        <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                          {ep.path}
                        </code>
                        <p className="text-xs text-muted-foreground mt-0.5">{ep.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* API features */}
          <div className="flex flex-col gap-5">
            <Card>
              <CardContent className="pt-5">
                <h3 className="font-bold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
                  API Specifications
                </h3>
                <div className="space-y-3">
                  {apiFeatures.map((f) => (
                    <div key={f.label} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{f.label}</span>
                      <span className="font-mono text-xs bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                        {f.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white border-0">
              <CardContent className="pt-5">
                <h3 className="font-bold mb-2">Interactive Docs</h3>
                <p className="text-sm text-white/80 mb-4">
                  Full OpenAPI 3.1 Swagger UI available at <code className="font-mono bg-white/10 px-1 rounded">/docs</code>
                </p>
                <p className="text-xs text-white/60">
                  ReDoc alternative at <code className="font-mono">/redoc</code>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 text-white border-0">
              <CardContent className="pt-5">
                <h3 className="font-bold mb-2 text-sm font-mono text-green-400"># Quick start</h3>
                <pre className="text-xs text-gray-300 leading-relaxed overflow-x-auto">
{`curl https://api.dclaw.io/health/

# Response
{
  "status": "ok"
}`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
