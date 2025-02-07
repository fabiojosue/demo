import react from "eslint-plugin-react";
import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  react.configs.recommended,
  ts.configs.recommended,
  prettier,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser,
      sourceType: "module",
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "prettier/prettier": "error",
    },
    plugins: {
      prettier: prettierPlugin,
    },
  },
];
