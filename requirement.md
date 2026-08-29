# jcsnp website

Create a website for my portfolio. The main page shows developer information and a list of mobile application projects.

Each app has a separate website project. This portfolio only lists apps and links to their external website, App Store listing, and Play Store listing when those destinations are available.

## Apps section

Render apps as cards on the landing page and link hub. Do not create local app detail, privacy-policy, or terms-of-service pages.

## technical requirement

This website must be statically generated because it will be deployed with GitHub Pages.

### additional technical requirement

- typescript
- tailwindcss
- light/dark mode supported
- custom font from google fonts: [Figtree](https://fonts.google.com/specimen/Figtree)

## design

i prefer modern ui, material, little rounded border corner, transition.

## Initial page

create a short landing page that display about my short information then render grid of apps that link to mock app.

## Important ambiguities

- my aka is `jcsnp` my full name is `Chitsanupong Paenyoi`
- mock app name called `PhoneticAlphabet` it's iOS application, no store yet
- app website and store links will be added when available
- default theme is system if possible, fallback to light
- github page deployment mode: custom domain
- i can't decide tld yet.
- improve the SEO

## Links page

Provide `/links/` as a curated directory of the portfolio, apps, verified external app destinations, and future profile links.
