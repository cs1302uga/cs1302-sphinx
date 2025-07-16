import os
import sys

from hatchling.builders.hooks.plugin.interface import BuildHookInterface


class WebpackBuildHook(BuildHookInterface):
    """

    See Also:
        https://hatch.pypa.io/1.6/plugins/build-hook/reference/#hatchling.builders.hooks.plugin.interface.BuildHookInterface
    """

    def _run(self, command: str, exit_on_error: bool = False) -> int:
        print("$", command)
        status: int = os.system(command)
        if exit_on_error and status != 0:
            sys.exit(status)
        return status

    def initialize(self, version, build_data):
        self._run("npm install", exit_on_error=True)
        self._run("npm run build", exit_on_error=True)
