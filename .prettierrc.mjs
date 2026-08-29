/** @type {import('prettier').Config} */
export default {
    tabWidth: 4,
    useTabs: false,
    printWidth: 100,
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
};
