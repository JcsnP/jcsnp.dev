export interface SiteLink {
    label: string;
    href: string;
    description?: string;
    external?: boolean;
}

export interface AppConfig {
    name: string;
    slug: string;
    mark: string;
    icon?: {
        light: string;
        dark: string;
    };
    platforms: Array<'iOS' | 'Android' | 'Web'>;
    status: 'Coming soon' | 'Available';
    summary: string;
    accent: string;
    links: {
        website?: string;
        appStore?: string;
        playStore?: string;
    };
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

const basePath = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
const publicAsset = (path: string) => `${basePath}${path.replace(/^\//, '')}`;

export const routes = {
    home: basePath,
    links: `${basePath}links/`,
    appsSection: `${basePath}#apps`,
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
        light: '#f1f1ef',
        dark: '#080808',
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
            mark: 'PA',
            icon: {
                light: publicAsset(
                    'assets/images/phonetic-alphabet/AppIcon-iOS-Default-128x128@1x.png',
                ),
                dark: publicAsset(
                    'assets/images/phonetic-alphabet/AppIcon-iOS-Dark-128x128@1x.png',
                ),
            },
            platforms: ['iOS'],
            status: 'Coming soon',
            summary: 'An upcoming iOS application by jcsnp.',
            accent: '#6c63ff',
            links: {},
        },
    ],
};
