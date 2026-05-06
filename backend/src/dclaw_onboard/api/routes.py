from fastapi import APIRouter
from datetime import datetime
from uuid import uuid4
from dclaw_onboard.models import OnboardingPlan, OnboardingTask, PlanCreate

router = APIRouter()

@router.post("/plans", response_model=OnboardingPlan)
async def create_plan(payload: PlanCreate):
    return OnboardingPlan(
        id=str(uuid4()),
        employee_name=payload.employee_name,
        role=payload.role,
        checklist_progress=0,
        pending_documents=["I-9", "NDA"],
        buddy="Sarah Chen",
        day_one_schedule=["9:00 Welcome", "10:00 IT Setup"],
        created_at=datetime.utcnow(),
    )

@router.get("/plans/{plan_id}/tasks", response_model=list[OnboardingTask])
async def get_tasks(plan_id: str):
    return [
        OnboardingTask(id=f"{plan_id}-t1", title="Complete I-9 form", completed=False),
        OnboardingTask(id=f"{plan_id}-t2", title="Sign NDA", completed=False),
        OnboardingTask(id=f"{plan_id}-t3", title="Set up workstation", completed=False),
        OnboardingTask(id=f"{plan_id}-t4", title="Meet with buddy", completed=False),
        OnboardingTask(id=f"{plan_id}-t5", title="Attend orientation", completed=False),
    ]
