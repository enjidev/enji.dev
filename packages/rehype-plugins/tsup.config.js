import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  const production = options.env?.NODE_ENV === 'production';

  return {
    entry: ['src/index.ts'],
    format: ['esm'],
    sourcemap: production ? false : 'inline',
    minify: production,
    clean: true,
  };
});
