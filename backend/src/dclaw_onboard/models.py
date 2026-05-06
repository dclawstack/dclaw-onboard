from pydantic import BaseModel
from datetime import datetime
from typing import List

class OnboardingPlan(BaseModel):
    id: str
    employee_name: str
    role: str
    checklist_progress: int
    pending_documents: List[str]
    buddy: str
    day_one_schedule: List[str]
    created_at: datetime

class OnboardingTask(BaseModel):
    id: str
    title: str
    completed: bool

class PlanCreate(BaseModel):
    employee_name: str
    role: str
