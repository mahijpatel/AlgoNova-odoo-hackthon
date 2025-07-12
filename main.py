from fastapi import FastAPI
from src.controllers.api import router as api_router

app = FastAPI(title="StackIt Q&A API")

app.include_router(api_router)
