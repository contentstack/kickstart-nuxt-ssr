---
name: nuxt-vue-typescript
description: Use when working in the Nuxt app directory, Vue components, composables, or TypeScript types for this project.
---

# Nuxt, Vue, and TypeScript – kickstart-nuxt-ssr

## When to use

- Adding or changing pages, components, composables, or plugins under `app/`.
- Deciding where shared TypeScript types live versus Nuxt-generated types.
- Configuring or using Tailwind via the Nuxt module.

## Instructions

### Layout conventions

- This project uses Nuxt 4 with the **`app/`** directory: e.g. `app/app.vue` as the root component, `app/plugins/` for plugins, `app/composables/` for composables (auto-imported by Nuxt).

### Plugins vs composables

- **Plugins** (`app/plugins/*.ts`) run at app initialization; use for singleton setup (e.g. Contentstack stack). They return `provide` values consumed as `$stack`, `$preview`, etc.
- **Composables** (`app/composables/*.ts`) encapsulate data loading and are auto-imported; `useGetPage` wraps `useAsyncData` for SSR-friendly fetching.

### TypeScript

- Root **`tsconfig.json`** extends `./.nuxt/tsconfig.json` — do not hand-edit generated `.nuxt` outputs.
- Shared domain types for Contentstack responses live in repository-root **`types.ts`** and are imported where needed (e.g. `useGetPage`).

### Styling

- **`@nuxtjs/tailwindcss`** is registered in `nuxt.config.ts` `modules`. Use utility classes in SFC templates; global styles in `app.vue` are minimal (e.g. `body` background).

### Server types

- **`server/tsconfig.json`** extends `../.nuxt/tsconfig.server.json` for server-side TypeScript if you add server routes or Nitro handlers later. This kickstart does not define custom server API routes by default.
