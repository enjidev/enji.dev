/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['simple-import-sort'],
  extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
  rules: {
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
