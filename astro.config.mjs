import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// Supports weights 400-900
import '@fontsource-variable/playfair-display';
// Supports weights 100-900
import '@fontsource-variable/public-sans';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
});
