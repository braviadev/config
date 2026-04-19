import type { FlatConfig } from '../types'

import { commandPlugin } from '../plugins'

export const command = (): FlatConfig[] => [
  {
    ...commandPlugin(),
    name: 'braviadev/command/rules',
  },
]
