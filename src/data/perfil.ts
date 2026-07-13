import type { Lang } from '../i18n/ui';

type Bilingue = Record<Lang, string>;

/**
 * Datos personales de la artista. Fuente única: cambiar aquí y se
 * actualiza en todo el sitio. Los textos marcados [PENDIENTE] son
 * provisionales hasta tener los definitivos.
 */
export const perfil = {
  nombre: 'Valerie Jimenez', // TODO: nombre artístico completo
  profesion: { es: 'Actriz', en: 'Actress' } satisfies Bilingue,

  // Frase de la portada: una sola línea, con intención.
  frase: {
    es: '',
    en: '',
  } satisfies Bilingue,

  email: 'hola@example.com', // TODO: correo real
  instagram: 'https://instagram.com/usuario', // TODO
  imdb: '', // opcional, si tiene ficha

  // Crédito del pie de página. Si url está vacío se muestra solo el nombre.
  desarrollador: {
    nombre: 'Juanpa Quesada Caballero', // TODO: confirmar nombre y enlace
    url: '',
  },

  // Representación (opcional; si está vacío no se muestra)
  agencia: {
    nombre: '',
    email: '',
    telefono: '',
  },

  statement: {
    es: [
      '[PENDIENTE] Uno o dos párrafos en primera persona sobre qué le interesa como actriz: qué tipo de historias busca, desde dónde trabaja los personajes, qué la mueve en escena.',
      '[PENDIENTE] Segundo párrafo opcional.',
    ],
    en: [
      '[PENDING] One or two first-person paragraphs about what drives her as an actress.',
      '[PENDING] Optional second paragraph.',
    ],
  } satisfies Record<Lang, string[]>,

  // Bio corta en tercera persona: la que copian medios y programas de mano.
  bio: {
    es: '[PENDIENTE] Valerie es una actriz formada en… Ha trabajado en teatro, cine y televisión, destacando en… Actualmente…',
    en: '[PENDING] Valerie is an actress trained at… She has worked in theatre, film and television…',
  } satisfies Bilingue,
};
