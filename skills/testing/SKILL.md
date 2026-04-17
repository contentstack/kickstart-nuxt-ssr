---
name: testing
description: Use when adding automated tests, fixtures, or policies around credentials and secrets in test code.
---

# Testing – kickstart-nuxt-ssr

## When to use

- You are introducing or maintaining unit, integration, or E2E tests.
- You need to know what exists today and how to avoid leaking Contentstack tokens.

## Instructions

### Current state

- **`package.json` has no `test` script** and the repository does not include a `tests/` tree or configured runner (Vitest, Jest, Playwright, etc.). Document any new test commands there when you add them.

### Credentials and secrets

- **Never** embed API keys, delivery tokens, or preview tokens in test files or committed fixtures. Use environment variables or CI secrets, and prefer mocked Contentstack responses for unit tests where possible.
- Follow `.gitignore` rules: local `.env` files must not be committed.

### If you add tests later

- Align with Nuxt conventions (e.g. Vitest with `@nuxt/test-utils` or project docs from Nuxt 4) and add a single `npm test` (or `npm run test`) script so agents and CI can discover how to run tests. Update [`AGENTS.md`](../../AGENTS.md) and this skill when you do.
