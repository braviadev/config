# Options & Defaults

Custom options **replace** the defaults entirely — they are not merged. To extend the defaults, import them from the plugin and spread into your config.

## Extending Defaults

```ts
// eslint.config.ts
import plugin, {
  lucideRestrictImportDefaults,
  shadcnCnWrapVariantsDefaults,
  shadcnPreferSpinnerDefaults,
} from '@braviadev/eslint-plugin'
```

### `lucide-restrict-import`

```ts
{
  rules: {
    '@braviadev/lucide-restrict-import': ['error', {
      restrictions: [
        ...lucideRestrictImportDefaults.restrictions,
        { name: 'Edit2Icon', preferred: 'PencilIcon', message: 'Use PencilIcon for editing actions.' },
      ],
    }],
  },
}
```

### `shadcn-cn-wrap-variants`

```ts
{
  rules: {
    '@braviadev/shadcn-cn-wrap-variants': ['error', {
      names: [...shadcnCnWrapVariantsDefaults.names, 'buttonVariants'],
    }],
  },
}
```

### `shadcn-prefer-spinner`

```ts
{
  rules: {
    '@braviadev/shadcn-prefer-spinner': ['error', {
      ignore: [...shadcnPreferSpinnerDefaults.ignore, '**/loading.tsx'],
    }],
  },
}
```
