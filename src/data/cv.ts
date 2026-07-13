import type { Lang } from '../i18n/ui';

type Bilingue = Record<Lang, string>;

export interface EntradaCV {
  anio: string; // "2024" o "2022–2024"
  texto: Bilingue;
}

export interface SeccionCV {
  id: string;
  titulo: Bilingue;
  entradas: EntradaCV[];
}

/**
 * CV formal de actriz, en el orden habitual del sector.
 * Incluir solo secciones con contenido: las vacías no se renderizan.
 * Datos de ejemplo [PENDIENTE] hasta tener el CV real.
 */
export const cv: SeccionCV[] = [
  {
    id: 'formacion',
    titulo: { es: 'Formación', en: 'Training' },
    entradas: [
      {
        anio: '2020–2024',
        texto: {
          es: '[PENDIENTE] Interpretación textual, Escuela / conservatorio, ciudad.',
          en: '[PENDING] Acting, School / conservatory, city.',
        },
      },
      {
        anio: '2023',
        texto: {
          es: '[PENDIENTE] Taller de interpretación ante la cámara, con…',
          en: '[PENDING] On-camera acting workshop, with…',
        },
      },
    ],
  },
  {
    id: 'teatro',
    titulo: { es: 'Teatro', en: 'Theatre' },
    entradas: [
      {
        anio: '2024',
        texto: {
          es: '[PENDIENTE] Título de la obra — personaje. Dir. Nombre. Sala, ciudad.',
          en: '[PENDING] Play title — role. Dir. Name. Venue, city.',
        },
      },
    ],
  },
  {
    // Sin entradas por ahora: la sección no se muestra hasta que
    // tenga su primer crédito en cine o TV.
    id: 'cine-tv',
    titulo: { es: 'Cine y televisión', en: 'Film & television' },
    entradas: [],
  },
  {
    id: 'premios',
    titulo: { es: 'Premios y reconocimientos', en: 'Awards' },
    entradas: [],
  },
  {
    id: 'habilidades',
    titulo: { es: 'Habilidades', en: 'Skills' },
    entradas: [
      {
        anio: '',
        texto: {
          es: '[PENDIENTE] Idiomas (nivel), canto (registro), danza, esgrima escénica, acentos, carné de conducir…',
          en: '[PENDING] Languages (level), singing (range), dance, stage combat, accents, driving licence…',
        },
      },
    ],
  },
];
