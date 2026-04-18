---
name: code-review
description: Use when reviewing pull requests, security-sensitive changes, or preparing changes for merge in this kickstart.
---

# Code review – kickstart-nuxt-ssr

## When to use

- Reviewing PRs that touch Contentstack config, plugins, composables, or templates.
- Verifying security and data-handling before merge.
- Aligning with organization expectations (`CODEOWNERS`).

## Instructions

### Functional checks

- Confirm **`nuxt.config.ts`** and env variable names stay consistent with **`.env.example`** and the Contentstack plugin’s `runtimeConfig.public` usage.
- **`useGetPage`** preview branch: ensure `live_preview` query handling remains correct for SSR Live Preview.
- **Plugins**: `ContentstackLivePreview.init` is gated with `import.meta.client`—avoid running browser-only preview code on the server.

### Security and content

- **`v-html`** is used for CMS-driven rich text and block copy. Review for XSS risk in light of your stack’s content trust model; consider CSP and sanitization policies for production hardening beyond this kickstart.
- No secrets in code or committed env files; tokens stay in environment or secret stores.

### Repository requirements

- Public repository policy workflows expect **`SECURITY.md`** and a current-year **`LICENSE`**—do not remove without org approval.
- Default reviewers are listed in **`.github/CODEOWNERS`**.

### Reporting vulnerabilities

- Use the process in **`SECURITY.md`** (email `security@contentstack.com`); do not use public issues for undisclosed vulnerabilities.
