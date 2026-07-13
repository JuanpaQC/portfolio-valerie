export const locales = ['es', 'en'] as const;
export type Lang = (typeof locales)[number];

export const ui = {
  es: {
    'nav.trabajo': 'Trabajo',
    'nav.videobook': 'Videobook',
    'nav.sobreMi': 'Sobre mí',
    'nav.cv': 'CV',
    'nav.contacto': 'Contacto',
    'nav.inicio': 'Inicio',

    'categoria.teatro': 'Teatro',
    'categoria.cine': 'Cine',
    'categoria.television': 'Televisión',
    'categoria.cortometraje': 'Cortometrajes',
    'categoria.publicidad': 'Publicidad',

    'trabajo.titulo': 'Trabajo',
    'trabajo.rol': 'Papel',
    'trabajo.direccion': 'Dirección',
    'trabajo.compania': 'Compañía / Producción',
    'trabajo.verClip': 'Ver clip',
    'trabajo.volver': 'Volver a trabajo',

    'videobook.titulo': 'Videobook',
    'videobook.pendiente': 'Videobook disponible próximamente.',

    'sobreMi.titulo': 'Sobre mí',
    'cv.titulo': 'Currículum',
    'cv.descargar': 'Descargar en PDF',

    'contacto.titulo': 'Contacto',
    'contacto.nombre': 'Nombre',
    'contacto.email': 'Correo electrónico',
    'contacto.mensaje': 'Mensaje',
    'contacto.enviar': 'Enviar',
    'contacto.escribeme': 'Escríbeme a',

    'footer.derechos': 'Todos los derechos reservados.',
    'footer.desarrollo': 'Sitio diseñado y desarrollado por',
  },
  en: {
    'nav.trabajo': 'Work',
    'nav.videobook': 'Showreel',
    'nav.sobreMi': 'About',
    'nav.cv': 'Resume',
    'nav.contacto': 'Contact',
    'nav.inicio': 'Home',

    'categoria.teatro': 'Theatre',
    'categoria.cine': 'Film',
    'categoria.television': 'Television',
    'categoria.cortometraje': 'Short films',
    'categoria.publicidad': 'Commercials',

    'trabajo.titulo': 'Work',
    'trabajo.rol': 'Role',
    'trabajo.direccion': 'Directed by',
    'trabajo.compania': 'Company / Production',
    'trabajo.verClip': 'Watch clip',
    'trabajo.volver': 'Back to work',

    'videobook.titulo': 'Showreel',
    'videobook.pendiente': 'Showreel coming soon.',

    'sobreMi.titulo': 'About',
    'cv.titulo': 'Resume',
    'cv.descargar': 'Download PDF',

    'contacto.titulo': 'Contact',
    'contacto.nombre': 'Name',
    'contacto.email': 'Email',
    'contacto.mensaje': 'Message',
    'contacto.enviar': 'Send',
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
 * Rutas equivalentes entre idiomas, para el selector ES/EN
 * y las etiquetas hreflang.
 */
export const routes: Record<string, { es: string; en: string }> = {
  inicio: { es: `${base}/`, en: `${base}/en/` },
  trabajo: { es: `${base}/trabajo/`, en: `${base}/en/work/` },
  videobook: { es: `${base}/videobook/`, en: `${base}/en/showreel/` },
  sobreMi: { es: `${base}/sobre-mi/`, en: `${base}/en/about/` },
  cv: { es: `${base}/cv/`, en: `${base}/en/resume/` },
  contacto: { es: `${base}/contacto/`, en: `${base}/en/contact/` },
};

/** Ruta de detalle de un trabajo según idioma. */
export function trabajoUrl(lang: Lang, slug: string): string {
  return lang === 'es' ? `${base}/trabajo/${slug}/` : `${base}/en/work/${slug}/`;
}
