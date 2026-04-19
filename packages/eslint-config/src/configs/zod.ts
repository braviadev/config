import type { FlatConfig } from '../types'

import { importZodPlugin } from '../plugins'

export const zod = (): FlatConfig[] => [
  {
    name: 'braviadev/zod/rules',
    plugins: {
      'import-zod': importZodPlugin,
    },
    rules: {
      'import-zod/prefer-zod-namespace': 'error',
    },
  },
]
