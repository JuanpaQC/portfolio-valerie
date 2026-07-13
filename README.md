# Portfolio de Valerie — actriz

Sitio estático bilingüe (ES/EN) hecho con [Astro](https://astro.build).
Sin base de datos ni CMS: todo el contenido vive en archivos del repositorio.

## Puesta en marcha

```sh
npm install
cp .env.example .env   # rellenar si se quiere formulario y videobook
npm run dev            # http://localhost:4321
```

## Cómo añadir un proyecto (obra, película, serie…)

1. Guarda la imagen en `src/assets/trabajos/` (la más grande que tengas;
   Astro genera los tamaños optimizados).
2. Crea un archivo en `src/content/trabajos/mi-proyecto.md`. El nombre del
   archivo es la URL (`/trabajo/mi-proyecto/`). Copia el frontmatter de
   cualquier archivo existente y rellena los campos.
3. `npm run dev` para comprobarlo, y push a `main` para publicar.

Los campos `*_en` (título, rol, alt, descripción en inglés) son opcionales:
si faltan, la página en inglés muestra el texto en español.

## Dónde se edita cada cosa

| Contenido                          | Archivo                          |
| ---------------------------------- | -------------------------------- |
| Nombre, frase, bio, statement, redes | `src/data/perfil.ts`           |
| CV (formación, teatro, cine…)      | `src/data/cv.ts`                 |
| Proyectos                          | `src/content/trabajos/*.md`      |
| Foto de portada / retrato          | `src/assets/portada.png` y `retrato.png` |
| Textos de menú y botones           | `src/i18n/ui.ts`                 |
| Formulario y videobook             | `.env` (ver `.env.example`)      |

## PDF del CV

El botón «Descargar en PDF» abre el diálogo de imprimir del navegador con una
hoja de estilos pensada para papel: guarda como PDF desde ahí. Así el PDF
siempre coincide con la web sin mantener dos versiones.

## Pendiente antes de publicar

- Sustituir las imágenes placeholder (degradados) por fotos reales.
- Rellenar los textos marcados `[PENDIENTE]` / `TODO`.
- Poner el dominio real en `astro.config.mjs` (`site`).
- Conectar el repositorio a Cloudflare Pages (o Netlify/Vercel) con despliegue
  automático en cada push a `main`.
