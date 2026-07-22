// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://la-belle-bete.netlify.app/",
  integrations: [preact()]
});