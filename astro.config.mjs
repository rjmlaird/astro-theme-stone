import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true,
  },
  integrations: [tailwind(), compress()],
  buildOptions: {
    // Update the output directory to your specified path
    output: '/Volumes/DevProjects/greenorbitspace/greenorbit-web/node_modules/@alpinejs/collapse/dist',
  },
});
