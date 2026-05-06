from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    app_name: str = "DClaw Onboard"
    database_url: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/dclaw_onboard"
    cors_origins: str = "*"

    class Config:
        env_prefix = "ONBOARD_"

settings = Settings()
