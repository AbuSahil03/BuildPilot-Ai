PYTHON ?= python3
BACKEND_VENV = backend/.venv
BACKEND_PYTHON = $(BACKEND_VENV)/bin/python
BACKEND_PIP = $(BACKEND_VENV)/bin/pip
BACKEND_UVICORN = $(BACKEND_VENV)/bin/uvicorn
BACKEND_PYTEST = $(BACKEND_VENV)/bin/pytest

.PHONY: install-api install-web dev-api dev-web test-api check-api

install-api:
	cd backend && $(PYTHON) -m venv .venv
	cd backend && .venv/bin/pip install --upgrade pip
	cd backend && .venv/bin/pip install -e ".[dev]"

install-web:
	cd frontend && pnpm install

dev-api:
	cd backend && .venv/bin/uvicorn app.main:app --reload

dev-web:
	cd frontend && pnpm dev

test-api:
	cd backend && .venv/bin/pytest

check-api:
	$(PYTHON) -m compileall backend/app backend/tests
