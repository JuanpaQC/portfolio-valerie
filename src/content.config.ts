import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Colección `trabajos`: cada archivo Markdown es un proyecto
 * (obra de teatro, película, serie, corto…).
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
      rol: z.string(), // personaje o papel, p.ej. "Nora" o "Protagonista"
      rol_en: z.string().optional(),
      director: z.string().optional(),
      compania: z.string().optional(), // compañía teatral o productora
      anio: z.number(),
      imagen: image(),
      alt: z.string(), // descripción de la imagen (accesibilidad)
      alt_en: z.string().optional(),
      video: z.string().url().optional(), // enlace a clip o tráiler
      descripcion: z.string().optional(),
      descripcion_en: z.string().optional(),
      destacado: z.boolean().default(false), // aparece primero en la galería
      orden: z.number().optional(), // orden dentro de su categoría
    }),
});

export const collections = { trabajos };
