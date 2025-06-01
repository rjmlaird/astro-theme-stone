import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

export default defineConfig({
  integrations: [tailwind(), compress()],
  buildOptions: {
    outDir: './dist',
  },
  vite: {
    server: {
      hmr: true, // Hot Module Reloading for local development
    },
  },
});
