import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import braviadev from '@braviadev/eslint-config'

export default defineConfig([
  ...braviadev, // ✅ your own config first
  ...nextVitals, // ✅ Next.js Core Web Vitals rules
  ...nextTs, // ✅ Next.js + TypeScript rules
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])
