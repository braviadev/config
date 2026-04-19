import type { FlatConfig, PlaywrightOptions } from '../types'

import globals from 'globals'

import { playwrightPlugin } from '../plugins'

export const playwright = (options: PlaywrightOptions): FlatConfig[] => [
  {
    name: 'braviadev/playwright/setup',
    files: options.files,
    plugins: {
      playwright: playwrightPlugin,
    },
    languageOptions: {
      globals: globals['shared-node-browser'],
    },
  },
  {
    name: 'braviadev/playwright/rules',
    files: options.files,
    rules: {
      ...playwrightPlugin.configs.recommended.rules,

      'playwright/expect-expect': [
        'error',
        {
          assertFunctionNames: options.assertFunctionNames ?? [],
          assertFunctionPatterns: options.assertFunctionPatterns ?? [],
        },
      ],
    },
  },
]
