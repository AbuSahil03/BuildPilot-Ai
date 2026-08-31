from functools import lru_cache

from pydantic import Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
    )

    app_name: str = Field(default="BuildPilot AI API", alias="APP_NAME")
    app_version: str = Field(default="0.1.0", alias="APP_VERSION")
    app_env: str = Field(default="development", alias="APP_ENV")
    debug: bool = Field(default=True, alias="DEBUG")
    api_v1_prefix: str = Field(default="/api/v1", alias="API_V1_PREFIX")
    frontend_url: str = Field(default="http://localhost:3000", alias="FRONTEND_URL")
    allowed_cors_origins: list[str] = Field(
        default_factory=lambda: ["http://localhost:3000"],
        alias="ALLOWED_CORS_ORIGINS",
    )
    postgres_dsn: str = Field(
        default="postgresql+psycopg://postgres:postgres@localhost:5432/buildpilot_ai",
        alias="POSTGRES_DSN",
    )
    redis_url: str = Field(default="redis://localhost:6379/0", alias="REDIS_URL")
    openai_api_key: str = Field(default="", alias="OPENAI_API_KEY")
    openai_model: str = Field(default="gpt-5.6", alias="OPENAI_MODEL")
    embedding_model: str = Field(default="text-embedding-3-large", alias="EMBEDDING_MODEL")
    jwt_secret_key: str = Field(default="change-me", alias="JWT_SECRET_KEY")
    access_token_ttl_minutes: int = Field(default=15, alias="ACCESS_TOKEN_TTL_MINUTES")
    refresh_token_ttl_days: int = Field(default=7, alias="REFRESH_TOKEN_TTL_DAYS")
    s3_bucket: str = Field(default="buildpilot-ai-dev", alias="S3_BUCKET")
    s3_region: str = Field(default="ap-south-1", alias="S3_REGION")

    @field_validator("allowed_cors_origins", mode="before")
    @classmethod
    def parse_allowed_cors_origins(cls, value: object) -> object:
        if isinstance(value, str):
            return [origin.strip() for origin in value.split(",") if origin.strip()]

        return value

    @field_validator("postgres_dsn")
    @classmethod
    def normalize_postgres_dsn(cls, value: str) -> str:
        """Use the installed psycopg driver for standard PostgreSQL URLs."""
        if value.startswith("postgres://"):
            return value.replace("postgres://", "postgresql+psycopg://", 1)

        if value.startswith("postgresql://"):
            return value.replace("postgresql://", "postgresql+psycopg://", 1)

        return value


@lru_cache
def get_settings() -> Settings:
    return Settings()
