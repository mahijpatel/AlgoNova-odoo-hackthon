from sqlmodel import SQLModel, Field
from typing import Optional

class Answer(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    content: str
    question_id: int = Field(foreign_key="question.id")
