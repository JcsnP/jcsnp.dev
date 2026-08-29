import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

export const GET: APIRoute = () => {
    const lines = ['User-agent: *', 'Allow: /'];

    if (siteConfig.url) {
        lines.push(`Sitemap: ${new URL('/sitemap-index.xml', siteConfig.url)}`);
    }

    return new Response(`${lines.join('\n')}\n`, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
};
