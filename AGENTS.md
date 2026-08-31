# Repository standards

These instructions apply to the entire repository unless a more specific `AGENTS.md` exists in a nested directory.

## Architecture

- Keep the project statically generated with Astro, TypeScript, and Tailwind CSS.
- Do not add a client-side framework or server runtime unless a requirement cannot be met with Astro and minimal browser JavaScript.
- Treat `src/config/site.ts` as the source of truth for site identity, shared navigation, profile links, app metadata, and route construction.
- Keep app metadata and optional external website/store destinations in the central app registry.
- Do not create local app detail or legal pages; app-specific sites are separate projects.

## Code style

- Indent all supported files with four spaces; never use tabs.
- Use strict TypeScript and avoid `any`. Narrow unknown values explicitly.
- Prefer named exports for shared utilities and configuration.
- Use lowercase kebab-case for route folders and public asset names.
- Keep imports grouped at the top of the Astro frontmatter or module.
- Let Prettier handle formatting and ESLint handle correctness. Do not add conflicting stylistic ESLint rules.
- Use route helpers instead of repeating app and legal URL strings.
- Use the shared `Button.astro` variants for styled text actions. Keep navigation, card, and inline text links semantically distinct.
- Use `Card.astro` for shared surface, subtle, inverse, and framed card treatments instead of repeating border, background, radius, padding, and elevation classes.

## Interface standards

- Build mobile-first and verify layouts at narrow and wide viewport sizes.
- Support light and dark themes for every new interface.
- Use semantic HTML before adding ARIA. Every interactive control must be keyboard accessible and have a visible focus state.
- Provide meaningful alternative text for informative images and hide decorative imagery from assistive technology.
- Preserve sufficient contrast and honor `prefers-reduced-motion`.
- Keep transitions subtle and avoid unnecessary large corner radii.

## Performance standards

- Keep pages static and ship no client-side JavaScript unless it provides essential interaction or prevents a visible rendering problem.
- Put rendered raster images in `src/assets/` and import them through Astro's asset pipeline. Reserve `public/` for files that need stable, unprocessed URLs.
- Use responsive image dimensions and modern formats with a fallback when images are material to the page. Do not ship source-resolution images when a smaller displayed size is sufficient.
- Do not download media hidden at the current breakpoint. Mark above-the-fold, user-visible images as high priority; defer non-critical images.
- Self-host and preload only the font files required by the site. Do not add render-blocking third-party font requests.
- Preserve explicit image dimensions to prevent layout shift, and remove unused assets and client-side media-swapping code.
- Keep production CSS and JavaScript lean; prefer semantic HTML, CSS, and Astro build-time rendering over browser runtime work.

## Content and SEO

- Give each page a unique, descriptive title and meta description.
- Keep important content in static HTML rather than requiring client-side rendering.
- Emit canonical and social URLs only when a valid production origin is configured.
- Never publish placeholder contact details, a guessed domain, or claims that an unreleased app is available.
- Never add guessed app, App Store, or Play Store URLs. Omit unavailable destinations until verified.

## Verification

Before completing a change, run:

```sh
npm run format:check
npm run lint
npm run build
```

Update `README.md` whenever routes, commands, configuration, deployment steps, or project structure change.
