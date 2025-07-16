from pathlib import Path
from typing import Any
from sphinx.application import Sphinx
from sphinx.config import Config
from sphinx.jinja2glue import BuiltinTemplateLoader as JinjaTemplateLoader
from bs4 import BeautifulSoup


THEME_PATH = (Path(__file__).parent / "theme" / "cs1302_base").resolve()


class JinjaFilters:
    """TODO."""

    PRESERVE_WHITESPACE_TAGS = [
        "p",
        "pre",
        "a",
        "button",
        "code",
        "title",
        "span",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
    ]

    @staticmethod
    def tidy(markup: str) -> str:
        """TODO.

        Args:
            markup:
        """
        soup: BeautifulSoup = BeautifulSoup(
            markup,
            "html5lib",
            preserve_whitespace_tags=JinjaFilters.PRESERVE_WHITESPACE_TAGS,
        )
        tidy: str = str(soup.prettify(formatter="html5"))
        return tidy


def emit_config(app: Sphinx, config: Config) -> None:
    from pprint import pformat

    print(app)
    print("Sphinx Configuration")
    for name in sorted(config.values.keys()):
        value = config[name]
        print(name, "=", pformat(value))


def configure_builder(app: Sphinx) -> None:
    """TODO."""
    if isinstance(app.builder.templates, JinjaTemplateLoader):
        # app.builder.templates.environment.lstrip_blocks = True
        # app.builder.templates.environment.trim_blocks = True
        # app.builder.templates.environment.keep_trailing_newline = True
        app.builder.templates.environment.filters["tidy"] = JinjaFilters.tidy

    # from pprint import pformat

    # print()
    # print("Sphinx Builder")
    # for name in sorted(app.builder.__dict__.keys()):
    #     value = app.builder.__dict__[name]
    #     print(name, "=", pformat(value))

    # print()
    # print("Sphinx Builder Templates")
    # print(pformat(app.builder.templates.__dict__))

    # print()
    # print("Sphinx Builder Templates Environment")
    # print(pformat(app.builder.templates.environment.__dict__))


def setup(app: Sphinx) -> dict[str, Any]:
    """Entry point for sphinx theming."""
    app.require_sphinx("7.0")
    app.add_html_theme("cs1302_base", str(THEME_PATH))
    app.add_js_file("scripts/cs1302_base.js", priority=200)
    app.add_config_value(
        "pygments_dark_style",
        default="a11y-dark",
        rebuild="env",
        types=[str],
    )
    app.connect("config-inited", emit_config)
    app.connect("builder-inited", configure_builder)
    return {"parallel_read_safe": True, "parallel_write_safe": True, "version": "0.1.0"}
