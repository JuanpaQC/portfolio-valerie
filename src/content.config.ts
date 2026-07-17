import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Colección `trabajos`: cada archivo Markdown es un proyecto
 * (obra de teatro, cortometraje…). `imagenes` admite varias fotos
 * de la misma obra: se muestran en carrusel.
 *
 * Los campos `*_en` son opcionales: si faltan, la versión en inglés
 * reutiliza el valor en español.
 */
const trabajos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trabajos' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      titulo_en: z.string().optional(),
      categoria: z.enum(['teatro', 'cine', 'television', 'cortometraje', 'publicidad']),
      rol: z.string(), // personaje o papel, p.ej. "Nora" o "Actor 3"
      rol_en: z.string().optional(),
      director: z.string().optional(),
      compania: z.string().optional(), // compañía teatral o productora
      anio: z.number(),
      imagenes: z
        .array(
          z.object({
            src: image(),
            alt: z.string(), // descripción de la foto (accesibilidad)
            alt_en: z.string().optional(),
          }),
        )
        .min(1),
      video: z.string().url().optional(), // enlace a clip o tráiler
      descripcion: z.string().optional(),
      descripcion_en: z.string().optional(),
      orden: z.number().optional(), // orden dentro de su categoría
    }),
});

/**
 * Colección `publicaciones`: notas de prensa, posts o noticias donde
 * aparece Valerie (p.ej. la nota del TEC sobre FICCUA 2024).
 */
const publicaciones = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publicaciones' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      titulo_en: z.string().optional(),
      fecha: z.coerce.date(),
      fuente: z.string(), // quién lo publicó, p.ej. "Tecnológico de Costa Rica"
      url: z.string().url().optional(), // enlace a la nota original
      imagen: image().optional(),
      alt: z.string().optional(),
      alt_en: z.string().optional(),
      resumen: z.string().optional(),
      resumen_en: z.string().optional(),
    }),
});

export const collections = { trabajos, publicaciones };
