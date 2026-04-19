# @braviadev/oxfmt-config

Personal Oxfmt configurations for Olanrewaju Toyyib projects.

## Installation

```bash
npm i -D @braviadev/oxfmt-config
```

Create an `oxfmt.config.ts` file with the following content:

```ts
import { defineConfig } from '@braviadev/oxfmt-config'

export default defineConfig({
  // Custom Oxfmt configuration options
})
```

### What's Included

This config applies the following opinionated defaults:

- Single quotes
- JSX single quotes
- No semicolons
- 120 character print width
