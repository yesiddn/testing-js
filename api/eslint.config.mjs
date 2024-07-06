import globals, { jest } from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      // Config
      sourceType: "module",
    },
  },
  {
    languageOptions: {
      globals: {
        jest: globals.jest,
        test: globals.jest.test,
        expect: globals.jest.expect,
      },
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
