---
name: dev-workflow
description: Use when installing dependencies, running dev/build/preview, or understanding CI and governance for this repository.
---

# Dev workflow – kickstart-nuxt-ssr

## When to use

- Setting up the project locally or running it in development or production preview.
- Interpreting what runs on pull requests or who owns workflow files.
- You need the exact npm scripts; this repo does not define `test` or `lint` scripts.

## Instructions

### Install and generate Nuxt types

- Run `npm install`. The `postinstall` script runs `nuxt prepare`, which generates `.nuxt` and TypeScript stubs—required for a clean IDE and build.

### Commands (from `package.json`)

- `npm run dev` — local development server.
- `npm run build` — production build (`nuxt build`).
- `npm run generate` — static site generation (`nuxt generate`).
- `npm run preview` — preview the production build locally.

### Environment

- Copy `.env.example` to `.env` and fill values per the product [`README.md`](../../README.md). Never commit `.env` (see `.gitignore`).

### CI (GitHub Actions)

- [`.github/workflows/sca-scan.yml`](../../.github/workflows/sca-scan.yml) — runs on pull request `opened`, `synchronize`, `reopened`; Snyk Node scan and `contentstack/sca-policy`. Requires `SNYK_TOKEN` where configured.
- [`.github/workflows/policy-scan.yml`](../../.github/workflows/policy-scan.yml) — for **public** repos: asserts `SECURITY.md` (or `.github/SECURITY.md`) and a license file with the current year.
- [`.github/workflows/issues-jira.yml`](../../.github/workflows/issues-jira.yml) — creates Jira issues from new GitHub issues (Atlassian actions; secrets required).

There is no workflow that runs `nuxt build` or automated tests.

### Governance

- [`.github/CODEOWNERS`](../../.github/CODEOWNERS) — default reviewers `@contentstack/devex-pr-reviewers`; security-related workflows and Snyk files list `@contentstack/security-admin`.
- [`.talismanrc`](../../.talismanrc) — Talisman ignore configuration for specific paths (e.g. lockfile scanning).
