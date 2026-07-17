import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';

import retrato from '../assets/Vale-Profile-Picture.jpeg';

export interface FotoBook {
  imagen: ImageMetadata;
  alt: Record<Lang, string>;
}

/**
 * Book fotográfico: para añadir una foto, guardarla en `src/assets/book/`,
 * importarla arriba y añadir una entrada a esta lista con su descripción.
 */
export const book: FotoBook[] = [
  {
    imagen: retrato,
    alt: {
      es: 'Retrato de Valerie Jimenez',
      en: 'Portrait of Valerie Jimenez',
    },
  },
  // TODO: añadir las fotos reales del book en src/assets/book/
];
