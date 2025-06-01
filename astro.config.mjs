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
    // Set the output directory inside the project
    outDir: './dist', // This is relative to your project folder (greenorbit-web)
  },
});
