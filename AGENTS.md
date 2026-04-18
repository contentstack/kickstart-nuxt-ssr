# Contentstack Kickstart: Nuxt SSR – Agent guide

**Universal entry point** for contributors and AI agents. Detailed conventions live in **`skills/*/SKILL.md`**.

## What this repo is

| Field | Detail |
|-------|--------|
| **Name:** | [kickstart-nuxt-ssr](https://github.com/contentstack/kickstart-nuxt-ssr) |
| **Purpose:** | Minimal Nuxt SSR application that connects to Contentstack using the Delivery SDK, Live Preview (including Visual Builder), and Tailwind CSS. It demonstrates SDK initialization, preview query handling, and a single page entry backed by Contentstack content. |
| **Out of scope (if any):** | This is an application kickstart, not a published SDK package. It does not ship its own HTTP client beyond what Nuxt and the Contentstack SDK use. |

## Tech stack (at a glance)

| Area | Details |
|------|---------|
| **Language** | TypeScript; Vue 3 SFCs. Root `tsconfig.json` extends `.nuxt/tsconfig.json`. |
| **Build** | npm; Nuxt 4 (`nuxt build`). Key files: `nuxt.config.ts`, `package.json`. |
| **Tests** | No automated test runner or test directories are configured in this repository. |
| **Lint / coverage** | No project-level ESLint, Prettier, or coverage scripts or root configs. |
| **Other** | Nuxt 4, `@nuxtjs/tailwindcss`, `@contentstack/delivery-sdk`, `@contentstack/live-preview-utils`, `@timbenniks/contentstack-endpoints`. |

## Commands (quick reference)

| Command type | Command |
|--------------|---------|
| **Install / prepare** | `npm install` (runs `postinstall` → `nuxt prepare`) |
| **Development** | `npm run dev` |
| **Build** | `npm run build` |
| **Static generate** | `npm run generate` |
| **Preview production build** | `npm run preview` |

There is **no** `test` or `lint` npm script in this repository today.

**CI:** Pull requests run workflows in [`.github/workflows/sca-scan.yml`](.github/workflows/sca-scan.yml) (Snyk and Contentstack SCA policy) and, for public repositories, [`.github/workflows/policy-scan.yml`](.github/workflows/policy-scan.yml) (`SECURITY.md` and license checks). [`.github/workflows/issues-jira.yml`](.github/workflows/issues-jira.yml) creates Jira tickets from new GitHub issues. There is no workflow that runs `nuxt build` or automated tests.

## Where the documentation lives: skills

| Skill | Path | What it covers |
|-------|------|----------------|
| Dev workflow | [`skills/dev-workflow/SKILL.md`](skills/dev-workflow/SKILL.md) | Commands, CI, CODEOWNERS, Talisman. |
| Contentstack kickstart | [`skills/contentstack-kickstart/SKILL.md`](skills/contentstack-kickstart/SKILL.md) | Delivery SDK, env vars, Live Preview, plugin and composable behavior. |
| Nuxt, Vue, and TypeScript | [`skills/nuxt-vue-typescript/SKILL.md`](skills/nuxt-vue-typescript/SKILL.md) | App layout, composables, types, Tailwind module. |
| Testing | [`skills/testing/SKILL.md`](skills/testing/SKILL.md) | Current testing state; credentials policy if tests are added. |
| Code review | [`skills/code-review/SKILL.md`](skills/code-review/SKILL.md) | PR and security checklist for this kickstart. |

[`skills/README.md`](skills/README.md) only notes the `SKILL.md` layout; the table above is the canonical index.

## Using Cursor (optional)

If you use **Cursor**, [`.cursor/rules/README.md`](.cursor/rules/README.md) only points to **`AGENTS.md`**—same docs as everyone else.
