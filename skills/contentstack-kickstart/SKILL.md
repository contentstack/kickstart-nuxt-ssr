---
name: contentstack-kickstart
description: Use when changing Contentstack Delivery SDK setup, Live Preview, env-driven config, or entry/composable data loading in kickstart-nuxt-ssr.
---

# Contentstack kickstart – kickstart-nuxt-ssr

## When to use

- Modifying how the app talks to Contentstack (stack config, tokens, region, endpoints).
- Debugging Live Preview, Visual Builder, or editable tags.
- Changing how pages or entries are queried (content types, fields, preview query params).

## Instructions

### Configuration surface

- **`nuxt.config.ts`** — `runtimeConfig.public` exposes API key, tokens, environment, preview flag, region, and optional endpoint overrides (`contentDelivery`, `previewHost`, `applicationHost`). Defaults for endpoints come from `@timbenniks/contentstack-endpoints` via `getContentstackEndpoints` and `getRegionForString(process.env.NUXT_CONTENTSTACK_REGION)`.
- **`.env.example`** — documents `NUXT_CONTENTSTACK_*` variables; real values belong in `.env` (not committed).

### Plugin: stack and Live Preview

- **`app/plugins/contentstack.ts`** — builds the stack with `contentstack.stack({ apiKey, deliveryToken, environment, region, host: contentDelivery, live_preview: { ... } })`. When `preview` is true and code runs on the client (`import.meta.client`), it calls `ContentstackLivePreview.init` with `ssr: true`, `mode: "builder"`, `stackSdk`, `stackDetails`, `clientUrlParams.host`, and `editButton` options. It provides **`$stack`**, **`$preview`**, and **`ContentstackLivePreview`** to the app.

### Fetching page data

- **`app/composables/useGetPage.ts`** — uses `useAsyncData` with a key like `page-${url}`. It reads `useNuxtApp().$preview` and `$stack`, merges route query for Live Preview: if preview is on and `live_preview` is in the query, it calls `$stack.livePreviewQuery(qs)`. It queries content type **`page`**, field **`url`** equals the passed path (`QueryOperation.EQUALS`), `find<Page>()`. On success, if `$preview` is set, it runs `contentstack.Utils.addEditableTags(entry, 'page', true)`.

### UI and Visual Builder

- **`app/app.vue`** — loads the home page with `useGetPage("/")`. Imports `VB_EmptyBlockParentClass` from `@contentstack/live-preview-utils` and applies it to the blocks container when there are no blocks (Visual Builder empty state). Uses `v-bind` with `$` metadata for Live Preview where present; uses `v-html` for rich text and block copy—treat content as trusted CMS content only in line with your security model.

### Types

- Root **`types.ts`** defines shapes such as `Page`, `Block`, `File` aligned with the seeded stack model. Keep these in sync if the content model changes.
