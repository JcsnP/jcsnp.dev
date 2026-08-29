import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
    {
        ignores: ['dist/', '.astro/', 'node_modules/'],
    },
    js.configs.recommended,
    tseslint.configs.recommended,
    eslintPluginAstro.configs['flat/recommended'],
    {
        files: ['**/*.{js,mjs,cjs,ts,astro}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
);
