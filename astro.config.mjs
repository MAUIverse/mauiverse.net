import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mauiverse.net',
  integrations: [tailwind()],
  output: 'static',
});
