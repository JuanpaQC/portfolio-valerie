import { getCollection, type CollectionEntry } from 'astro:content';

export type Trabajo = CollectionEntry<'trabajos'>;
export type Categoria = Trabajo['data']['categoria'];

/** Orden fijo de las categorías en la galería y la navegación. */
export const ordenCategorias: Categoria[] = [
  'teatro',
  'cine',
  'television',
  'cortometraje',
  'publicidad',
];

/** Trabajos agrupados por categoría, ordenados (orden asc, luego año desc). */
export async function trabajosPorCategoria(): Promise<Map<Categoria, Trabajo[]>> {
  const todos = await getCollection('trabajos');
  const grupos = new Map<Categoria, Trabajo[]>();

  for (const categoria of ordenCategorias) {
    const lista = todos
      .filter((t) => t.data.categoria === categoria)
      .sort((a, b) => {
        const oa = a.data.orden ?? Number.MAX_SAFE_INTEGER;
        const ob = b.data.orden ?? Number.MAX_SAFE_INTEGER;
        if (oa !== ob) return oa - ob;
        return b.data.anio - a.data.anio;
      });
    if (lista.length > 0) grupos.set(categoria, lista);
  }
  return grupos;
}
