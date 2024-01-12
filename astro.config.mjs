import vue from "@astrojs/vue";
import { defineConfig } from 'astro/config';
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
      vue({appEntrypoint: '/src/pages/_app',  reactivityTransform: true}),
    sentry(),
    spotlightjs(),
    sitemap(),
  ],
});
