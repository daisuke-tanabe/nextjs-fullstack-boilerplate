import eslint from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

import globals from 'globals';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default tseslint.config(
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...compat.extends('next/core-web-vitals'),
    ],
    rules: {
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': false,
          'ts-nocheck': false,
          'ts-check': false,
        }
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },

  {
    files: ['**/*.{js,jsx,mjs}'],
    extends: [tseslint.configs.disableTypeChecked],
  },

  {
    ignores: ['**/node_modules/**', '**/.next/**', '**/out/**', '**/build/**'],
  },

  eslintConfigPrettier,
);
