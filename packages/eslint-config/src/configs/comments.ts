import type { FlatConfig } from '../types'

import { commentsPlugin } from '../plugins'

export const comments = (): FlatConfig[] => [
  {
    name: 'braviadev/eslint-comments/rules',
    plugins: {
      '@eslint-community/eslint-comments': commentsPlugin,
    },
    rules: {
      ...commentsPlugin.configs.recommended.rules,
    },
  },
]
