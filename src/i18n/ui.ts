export const locales = ['es', 'en'] as const;
export type Lang = (typeof locales)[number];

export const ui = {
  es: {
    'nav.inicio': 'Inicio',
    'nav.abrirMenu': 'Abrir menú',
    'nav.cerrarMenu': 'Cerrar menú',

    'seccion.sobreMi': 'Sobre mí',
    'seccion.experiencia': 'Experiencia',
    'seccion.book': 'Book fotográfico',
    'seccion.publicaciones': 'Publicaciones',

    'categoria.teatro': 'Teatro',
    'categoria.cine': 'Cine',
    'categoria.television': 'Televisión',
    'categoria.cortometraje': 'Cortometraje',
    'categoria.publicidad': 'Publicidad',

    'trabajo.estreno': 'Estreno',
    'trabajo.rol': 'Papel',
    'trabajo.direccion': 'Dirección',
    'trabajo.compania': 'Producción',
    'trabajo.verClip': 'Ver clip',
    'trabajo.verCorto': 'Ver corto',

    'carrusel.anterior': 'Foto anterior',
    'carrusel.siguiente': 'Foto siguiente',

    'publicaciones.leer': 'Leer la publicación',

    'contacto.escribeme': 'Escríbeme a',

    'footer.derechos': 'Todos los derechos reservados.',
    'footer.desarrollo': 'Sitio diseñado y desarrollado por',
  },
  en: {
    'nav.inicio': 'Home',
    'nav.abrirMenu': 'Open menu',
    'nav.cerrarMenu': 'Close menu',

    'seccion.sobreMi': 'About me',
    'seccion.experiencia': 'Experience',
    'seccion.book': 'Photo book',
    'seccion.publicaciones': 'Press & news',

    'categoria.teatro': 'Theatre',
    'categoria.cine': 'Film',
    'categoria.television': 'Television',
    'categoria.cortometraje': 'Short films',
    'categoria.publicidad': 'Commercials',

    'trabajo.estreno': 'Premiere',
    'trabajo.rol': 'Role',
    'trabajo.direccion': 'Directed by',
    'trabajo.compania': 'Production',
    'trabajo.verClip': 'Watch clip',
    'trabajo.verCorto': 'Watch the short film',

    'carrusel.anterior': 'Previous photo',
    'carrusel.siguiente': 'Next photo',

    'publicaciones.leer': 'Read the article',

    'contacto.escribeme': 'Write to me at',

    'footer.derechos': 'All rights reserved.',
    'footer.desarrollo': 'Site designed and developed by',
  },
} as const;

export type UiKey = keyof (typeof ui)['es'];

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key];
  };
}

/**
 * Prefijo del sitio (config `base` de Astro). En local es "" y en
 * GitHub Pages "/nombre-del-repo"; siempre sin barra final.
 */
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

/**
 * El sitio es una sola página por idioma; la navegación son anclas
 * que hacen scroll a cada sección.
 */
export const routes: Record<string, { es: string; en: string }> = {
  inicio: { es: `${base}/`, en: `${base}/en/` },
};

/** Secciones de la página única, en el orden en que aparecen. */
export const secciones = [
  { id: 'sobre-mi', clave: 'seccion.sobreMi' },
  { id: 'experiencia', clave: 'seccion.experiencia' },
  { id: 'book', clave: 'seccion.book' },
  { id: 'publicaciones', clave: 'seccion.publicaciones' },
] as const;
