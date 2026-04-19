import type { FlatConfig } from '../types'

export const ignores = (userIgnores: string[] = []): FlatConfig[] => [
  {
    name: 'braviadev/ignores',
    ignores: ['**/routeTree.gen.ts', ...userIgnores],
  },
]
