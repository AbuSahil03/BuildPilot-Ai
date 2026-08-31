from fastapi.testclient import TestClient

from app.core.config import Settings, get_settings
from app.main import app


client = TestClient(app)
settings = get_settings()


def test_health_check_returns_application_status() -> None:
    response = client.get("/api/v1/health")

    assert response.status_code == 200

    payload = response.json()
    assert payload["service"] == settings.app_name
    assert payload["environment"] == settings.app_env
    assert payload["version"] == settings.app_version
    assert "timestamp" in payload


def test_render_postgres_url_uses_psycopg_driver() -> None:
    settings = Settings(postgres_dsn="postgresql://user:password@database:5432/buildpilot")

    assert settings.postgres_dsn == "postgresql+psycopg://user:password@database:5432/buildpilot"
