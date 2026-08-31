from datetime import UTC, datetime

from fastapi import APIRouter

from app.core.config import get_settings
from app.schemas.health import HealthResponse

router = APIRouter()


@router.get("/health", response_model=HealthResponse)
async def health_check() -> HealthResponse:
    settings = get_settings()
    return HealthResponse(
        service=settings.app_name,
        environment=settings.app_env,
        version=settings.app_version,
        timestamp=datetime.now(UTC),
    )
