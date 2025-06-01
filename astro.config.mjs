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
    // Set the output directory for the build
    output: './dist',  // Make sure the build output is placed in 'dist'
    // Optional: You can configure other build-related options as needed
  },
});
