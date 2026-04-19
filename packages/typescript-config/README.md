# @braviadev/typescript-config

Personal TypeScript configurations for Olanrewaju Toyyib projects.

## Installation

```bash
npm i -D @braviadev/typescript-config
```

Create a `tsconfig.json` file with the following content:

```jsonc
{
  "extends": "@braviadev/typescript-config/base.json",
  "compilerOptions": {
    // Custom TypeScript configuration options
  },
}
```

### Presets

You can also use predefined presets for your configuration.

- `@braviadev/typescript-config/base.json`
- `@braviadev/typescript-config/library.json`
- `@braviadev/typescript-config/nextjs.json`
- `@braviadev/typescript-config/react-library.json`
- `@braviadev/typescript-config/tanstack-start.json`
