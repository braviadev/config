import type { FlatConfig } from '../types'

import { stylisticPlugin } from '../plugins'

export const stylistic = (): FlatConfig[] => [
  {
    name: 'braviadev/stylistic/rules',
    plugins: {
      '@stylistic': stylisticPlugin,
    },
    rules: {
      '@stylistic/multiline-comment-style': ['error', 'separate-lines'],
    },
  },
]
