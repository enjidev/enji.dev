/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    '@next/next/no-html-link-for-pages': ['error', 'apps/enji.dev/src/pages/'],
    'no-underscore-dangle': ['error', { allow: ['_count', '_sum'] }],
    'import/extensions': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Packages and side effect imports.
          ['^@?\\w', '^\\u0000'],
          // Components and providers.
          ['^@/components', '^@/providers'],
          // Hooks
          ['^@/hooks'],
          // Utils, helpers, and lib
          ['^@/utils', '^@/helpers', '^@/lib'],
          // Other absolute imports.
          ['^@/'],
          // Relative imports.
          ['^\\.'],
          // Import type and types.
          ['^.*\\u0000$', '^@/types'],
          // Styles.
          ['^.+\\.s?css$'],
          // Anything not matched in another group.
          ['^'],
        ],
      },
    ],
    'react/require-default-props': ['error', { functions: 'defaultArguments' }],
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'ignore',
      },
    ],
  },
  ignorePatterns: [
    '.next',
    '.turbo',
    'node_modules',
    '**/*.js',
    '**/*.mjs',
    '**/*.jsx',
  ],
};
