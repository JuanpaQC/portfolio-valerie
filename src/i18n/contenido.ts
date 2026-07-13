import type { Lang } from './ui';

/**
 * Devuelve el campo traducido de un frontmatter bilingüe:
 * para 'en' usa `<campo>_en` si existe; si no, cae al español.
 */
export function traducido(
  data: Record<string, unknown>,
  campo: string,
  lang: Lang,
): string {
  if (lang === 'en') {
    const en = data[`${campo}_en`];
    if (typeof en === 'string' && en.length > 0) return en;
  }
  return String(data[campo] ?? '');
}
