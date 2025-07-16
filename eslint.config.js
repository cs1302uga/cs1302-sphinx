// -*- mode: web; standard-indent: 2; fill-column: 80; -*-

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from "@stylistic/eslint-plugin";

export default tseslint.config({
  files: ["**/*.ts", "**/*.jsx"],
  plugins: {
    "@typescript-eslint": tseslint.plugin,
  },
  extends: [
    eslint.configs.recommended,
    tseslint.configs.recommended,
    stylistic.configs.customize({
      indent: 2,
      quotes: 'double',
      semi: true,
      jsx: true,
      commaDangle: "always-multiline",
    }),
  ],
});
