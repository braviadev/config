import type { FlatConfig } from '../types'

import { rules } from 'eslint-config-prettier'

export const prettier = (): FlatConfig[] => [
  {
    name: 'braviadev/prettier/rules',
    rules,
  },
]
