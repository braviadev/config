import type { FlatConfig } from '../types'

import { braviadevPlugin } from '../plugins'

export const braviadev = (): FlatConfig[] => [
  {
    name: 'braviadev/braviadev/rules',
    plugins: {
      '@braviadev': braviadevPlugin,
    },
    rules: {
      '@braviadev/lucide-icon-suffix': 'error',
      '@braviadev/lucide-restrict-import': 'error',
      '@braviadev/shadcn-cn-wrap-variants': 'error',
      '@braviadev/shadcn-cva-variants-suffix': 'error',
      '@braviadev/shadcn-prefer-spinner': 'error',
    },
  },
]
