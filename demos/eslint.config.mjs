import globals from "globals";
import jest from "eslint-plugin-jest";
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
        test: globals.jest.test,
        expect: globals.jest.expect,
      },
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
