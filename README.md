# jcsnp.xyz

The personal portfolio of Chitsanupong Paenyoi (`jcsnp`) and a shared home for independently designed mobile-app pages. The site is statically generated for GitHub Pages.

## Stack

- Astro and TypeScript
- Tailwind CSS
- ESLint and Prettier
- GitHub Pages
- Figtree from Google Fonts

## Getting started

```sh
npm install
npm run dev
```

The development server prints the local URL after it starts.

## Commands

| Command                | Purpose                                       |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Start the Astro development server            |
| `npm run build`        | Type-check and build the static site          |
| `npm run preview`      | Preview the production build                  |
| `npm run lint`         | Check JavaScript, TypeScript, and Astro files |
| `npm run lint:fix`     | Apply safe ESLint fixes                       |
| `npm run format`       | Format supported files with Prettier          |
| `npm run format:check` | Verify formatting without changing files      |

## Routes

- `/` — developer portfolio and app grid
- `/links/` — curated directory of portfolio, app, legal, and future profile links
- `/apps/phonetic-alphabet/` — PhoneticAlphabet app page
- `/apps/phonetic-alphabet/privacy-policy/` — mock privacy policy
- `/apps/phonetic-alphabet/terms-of-service/` — mock terms of service

## Project structure

```text
src/
    components/      Shared interface elements
    config/          Typed site identity, navigation, routes, profiles, and app registry
    layouts/         Shared page shell and metadata
    pages/           Static routes, with app-owned pages in separate folders
    styles/          Global Tailwind and accessibility styles
public/              Static assets
```

## Website configuration

Edit `src/config/site.ts` to update site identity, navigation, external profiles, and the app registry. Shared pages and components consume this configuration so labels and routes stay consistent.

Unique marketing and legal copy belongs in the corresponding folder under `src/pages/apps/`; it should not be moved into the global configuration.

### Adding an app

1. Register typed app metadata in `siteConfig.apps`.
2. Create `src/pages/apps/<app-slug>/index.astro`.
3. Add separate `privacy-policy/index.astro` and `terms-of-service/index.astro` files.
4. Use the route helpers from `src/config/site.ts` for internal URLs.
5. Run all verification commands before publishing.

## Theme and SEO

The initial theme follows the operating-system preference and falls back to light. A manual choice is saved locally in the browser. Both themes preserve visible focus states and support reduced-motion preferences.

Page metadata is rendered statically. Set `PUBLIC_SITE_URL` to the final HTTPS origin to enable canonical URLs and sitemap generation:

```sh
PUBLIC_SITE_URL=https://your-domain.example npm run build
```

On PowerShell:

```powershell
$env:PUBLIC_SITE_URL = 'https://your-domain.example'
npm run build
```

Do not add a `CNAME` until the final custom domain has been selected.

## Deployment

Build with `npm run build` and publish the generated `dist/` directory through GitHub Pages. Configure `PUBLIC_SITE_URL` in the deployment workflow after the production domain is known.

## Contributing

Use four spaces for indentation. Run these checks before considering a change complete:

```sh
npm run format:check
npm run lint
npm run build
```

See `AGENTS.md` for the repository-wide coding standards.
