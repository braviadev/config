# @braviadev/eslint-plugin

Custom ESLint rules for Olanrewaju Toyyib projects.

## Installation

```bash
npm i -D @braviadev/eslint-plugin
```

## Usage

```js
import braviadevPlugin from '@braviadev/eslint-plugin'

export default [
  {
    plugins: {
      '@braviadev': braviadevPlugin,
    },
    rules: {
      '@braviadev/lucide-icon-suffix': 'error',
    },
  },
]
```

## Rules

| Rule                                                                   | Description                                                                      | Fixable |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------- |
| [lucide-icon-suffix](docs/rules/lucide-icon-suffix.md)                 | Enforce using the `Icon` suffixed version of `lucide-react` imports              | Yes     |
| [lucide-restrict-import](docs/rules/lucide-restrict-import.md)         | Restrict specific imports from `lucide-react` and suggest preferred alternatives | Yes     |
| [shadcn-cn-wrap-variants](docs/rules/shadcn-cn-wrap-variants.md)       | Enforce wrapping `*Variants()` calls inside `cn()`                               | Yes     |
| [shadcn-cva-variants-suffix](docs/rules/shadcn-cva-variants-suffix.md) | Enforce that variables assigned to `cva()` end with `Variants`                   | Yes     |
| [shadcn-prefer-spinner](docs/rules/shadcn-prefer-spinner.md)           | Enforce using `<Spinner />` instead of loader icons from lucide-react            | No      |
