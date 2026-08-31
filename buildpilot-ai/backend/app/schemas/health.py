from datetime import datetime

from pydantic import BaseModel


class HealthResponse(BaseModel):
    service: str
    environment: str
    version: str
    timestamp: datetime
