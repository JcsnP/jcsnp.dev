import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

const site = process.env.PUBLIC_SITE_URL?.trim() || undefined;

export default defineConfig({
    site,
    output: 'static',
    integrations: site ? [sitemap()] : [],
    vite: {
        plugins: [tailwindcss()],
    },
});
