"use client";

import { useState } from "react";
import { UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface OnboardingPlan {
  id: string;
  employee_name: string;
  role: string;
  checklist_progress: number;
  pending_documents: string[];
  buddy: string;
  day_one_schedule: string[];
  created_at: string;
}

interface OnboardingTask {
  id: string;
  title: string;
  completed: boolean;
}

export default function Dashboard() {
  const [employeeName, setEmployeeName] = useState("");
  const [role, setRole] = useState("");
  const [plan, setPlan] = useState<OnboardingPlan | null>(null);
  const [tasks, setTasks] = useState<OnboardingTask[] | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!employeeName || !role) return;
    setLoading(true);
    try {
      const res = await fetch("/api/plans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ employee_name: employeeName, role }),
      });
      const data = await res.json();
      setPlan(data);

      const tasksRes = await fetch(`/api/plans/${data.id}/tasks`);
      const tasksData = await tasksRes.json();
      setTasks(tasksData);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3">
        <UserCheck className="w-8 h-8" style={{ color: "#8B5CF6" }} />
        <div>
          <h1 className="text-2xl font-bold">DClaw Onboard</h1>
          <p className="text-sm text-slate-500">Automated employee onboarding</p>
        </div>
        <Badge className="ml-auto" style={{ backgroundColor: "#8B5CF6" }}>HR</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Generate Onboarding Plan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Employee name</label>
              <Input value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} placeholder="e.g. Jane Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Role</label>
              <Input value={role} onChange={(e) => setRole(e.target.value)} placeholder="e.g. Senior Engineer" />
            </div>
          </div>
          <Button onClick={handleGenerate} disabled={loading || !employeeName || !role}>
            {loading ? "Generating..." : "Generate Onboarding Plan"}
          </Button>
        </CardContent>
      </Card>

      {plan && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Plan Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>ID:</strong> {plan.id}</p>
              <p><strong>Employee:</strong> {plan.employee_name}</p>
              <p><strong>Role:</strong> {plan.role}</p>
              <p><strong>Checklist Progress:</strong> {plan.checklist_progress}%</p>
              <p><strong>Buddy:</strong> {plan.buddy}</p>
              <p><strong>Created:</strong> {new Date(plan.created_at).toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pending Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm space-y-1">
                {plan.pending_documents.map((doc, i) => (
                  <li key={i}>{doc}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Day-1 Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {plan.day_one_schedule.map((item, i) => (
                  <Badge key={i} variant="secondary">{item}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {tasks && (
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Onboarding Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {tasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between p-2 bg-slate-50 rounded">
                      <span className="text-sm">{task.title}</span>
                      <Badge variant={task.completed ? "default" : "secondary"}>
                        {task.completed ? "Done" : "Pending"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
