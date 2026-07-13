// @ts-check
import { defineConfig } from 'astro/config';

// En GitHub Actions el sitio se publica en GitHub Pages bajo un
// subdirectorio; en local se sirve en la raíz. Cuando haya dominio
// propio y hosting definitivo, quitar este condicional y dejar `site`
// con el dominio real, sin `base`.
const enCI = Boolean(process.env.GITHUB_ACTIONS);

export default defineConfig({
  site: enCI ? 'https://juanpaqc.github.io' : 'https://valerie.example.com',
  base: enCI ? '/portfolio-valerie' : undefined,
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
