// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // TODO: cambiar por el dominio real cuando esté decidido
  site: 'https://valerie.example.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
