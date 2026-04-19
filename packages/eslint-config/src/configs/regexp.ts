import type { FlatConfig } from '../types'

import { regexpPlugin } from '../plugins'

export const regexp = (): FlatConfig[] => [
  {
    name: 'braviadev/regexp/rules',
    plugins: {
      regexp: regexpPlugin,
    },
    rules: {
      ...regexpPlugin.configs.recommended.rules,
    },
  },
]
