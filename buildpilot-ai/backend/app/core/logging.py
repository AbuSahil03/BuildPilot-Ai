import logging

import structlog


def configure_logging(environment: str) -> None:
    shared_processors = [
        structlog.contextvars.merge_contextvars,
        structlog.processors.TimeStamper(fmt="iso"),
        structlog.processors.add_log_level,
        structlog.processors.EventRenamer("message"),
    ]

    structlog.configure(
        processors=[
            *shared_processors,
            structlog.processors.JSONRenderer(),
        ],
        wrapper_class=structlog.make_filtering_bound_logger(logging.INFO),
        context_class=dict,
        cache_logger_on_first_use=True,
    )

    logging.basicConfig(level=logging.INFO if environment != "development" else logging.DEBUG)


def get_logger(name: str):
    return structlog.get_logger(name)
