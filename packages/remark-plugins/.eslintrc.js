/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['typescript'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
