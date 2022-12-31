const GLOBAL_RULES = {
  'no-plusplus': 'off',
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
};

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: { es6: true, node: true, browser: true },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 11,
  },
  rules: {
    ...GLOBAL_RULES,
  },
  overrides: [
    {
      files: ['**/*.tsx', '**/*.ts'],
      plugins: ['@typescript-eslint', 'simple-import-sort'],
      extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime',
        'turbo',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./apps/**/tsconfig.json', './packages/**/tsconfig.json'],
      },
      rules: {
        ...GLOBAL_RULES,
        'react/require-default-props': [
          'error',
          { functions: 'defaultArguments' },
        ],
        'react/jsx-props-no-spreading': [
          'error',
          {
            html: 'ignore',
          },
        ],
      },
    },
  ],
};
