import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import pagefind from 'astro-pagefind';

export default defineConfig({
  site: 'https://mauiverse.net',
  integrations: [tailwind(), pagefind()],
  output: 'static',
});
