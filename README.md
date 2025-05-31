Groups members 

Kidus Asrat        UGR/24051/13

Debele negese      UGR/22820/13

Eyob belayneh      UGR/22723/13

Dabala yonas       UGR/22688/13

Derara belachew    UGR/23149/13






# shadcn/ui monorepo
## Usage

```bash
pnpm dlx shadcn@latest init
```

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button"
```
