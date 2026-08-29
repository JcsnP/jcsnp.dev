export interface SiteLink {
    label: string;
    href: string;
    description?: string;
    external?: boolean;
}

export interface AppConfig {
    name: string;
    slug: string;
    platform: 'iOS' | 'Android' | 'Web';
    status: 'Coming soon' | 'Available';
    summary: string;
    accent: string;
}

export interface SiteConfig {
    name: string;
    author: {
        alias: string;
        fullName: string;
    };
    title: string;
    description: string;
    locale: string;
    themeColor: {
        light: string;
        dark: string;
    };
    url?: string;
    navigation: SiteLink[];
    profiles: SiteLink[];
    apps: AppConfig[];
}

export const routes = {
    home: '/',
    links: '/links/',
    appsSection: '/#apps',
    app: (slug: string) => `/apps/${slug}/`,
    privacyPolicy: (slug: string) => `/apps/${slug}/privacy-policy/`,
    termsOfService: (slug: string) => `/apps/${slug}/terms-of-service/`,
} as const;

const configuredUrl = import.meta.env.PUBLIC_SITE_URL?.trim();

export const siteConfig: SiteConfig = {
    name: 'jcsnp',
    author: {
        alias: 'jcsnp',
        fullName: 'Chitsanupong Paenyoi',
    },
    title: 'jcsnp — Software Developer',
    description: 'The portfolio and mobile applications of Chitsanupong Paenyoi.',
    locale: 'en',
    themeColor: {
        light: '#f7f7f4',
        dark: '#111210',
    },
    url: configuredUrl || undefined,
    navigation: [
        { label: 'Home', href: routes.home },
        { label: 'Apps', href: routes.appsSection },
        { label: 'Links', href: routes.links },
    ],
    profiles: [],
    apps: [
        {
            name: 'PhoneticAlphabet',
            slug: 'phonetic-alphabet',
            platform: 'iOS',
            status: 'Coming soon',
            summary: 'An upcoming iOS application by jcsnp.',
            accent: '#6c63ff',
        },
    ],
};

export function getApp(slug: string): AppConfig {
    const app = siteConfig.apps.find((candidate) => candidate.slug === slug);

    if (!app) {
        throw new Error(`Unknown app slug: ${slug}`);
    }

    return app;
}
