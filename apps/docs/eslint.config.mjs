import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// 🚨 Temporarily removed the @braviadev import so Node stops crashing 🚨

export default defineConfig([
  ...nextVitals,  // ✅ Next.js Core Web Vitals rules
  ...nextTs,      // ✅ Next.js + TypeScript rules
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts"
  ])
]);