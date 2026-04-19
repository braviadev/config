import type { OxlintOverride } from 'oxlint'

import { GLOB_SRC } from '../globs'

export const braviadev = (): OxlintOverride[] => [
  {
    files: [GLOB_SRC],
    jsPlugins: [{ name: 'braviadev', specifier: '@braviadev/eslint-plugin' }],
    rules: {
      'braviadev/lucide-icon-suffix': 'error',
      'braviadev/lucide-restrict-import': 'error',
      'braviadev/shadcn-cn-wrap-variants': 'error',
      'braviadev/shadcn-cva-variants-suffix': 'error',
      'braviadev/shadcn-prefer-spinner': 'error',
    },
  },
]
