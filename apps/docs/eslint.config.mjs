import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import braviadevPkg from "@braviadev/eslint-config";

// Interop: Grab the default export whether it's native ESM or compiled CommonJS
const braviadev = braviadevPkg.default || braviadevPkg;

export default defineConfig([
  ...braviadev,   // ✅ your own config first
  ...nextVitals,  // ✅ Next.js Core Web Vitals rules
  ...nextTs,      // ✅ Next.js + TypeScript rules
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts"
  ])
]);
