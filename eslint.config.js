import { defineConfig } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";

export default defineConfig([
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["*.astro", "*.ts", "*.tsx"],
    processor: "astro/client-side-ts",
    rules: {
      // "prefer-const": "warn",
      // "no-constant-binary-expression": "error",
    },
  },
]);
