# Proyecto: Currículum artístico web

Sitio web tipo currículum/portafolio para **Valerie, actriz**. Este archivo es
el contexto que Claude Code debe usar como fuente de verdad al construir y
mantener el proyecto. Si algo entra en conflicto con lo de aquí, preguntar
antes de asumir.

**Decisiones fijadas (2026-07-13):** la artista es actriz (teatro, cine, TV);
el sitio es bilingüe español/inglés (español por defecto, inglés bajo `/en/`);
estilos con CSS propio (sin Tailwind); el PDF del CV se genera con la hoja de
estilos de impresión (`window.print()`), sin mantener un PDF aparte.

---

## Objetivo

Un sitio que funcione a la perfección: rápido, impecable en móvil, con las
imágenes de obra viéndose de la mejor forma posible, y fácil de mantener por
una sola persona tocando código (no hace falta CMS ni panel de administración).

La prioridad de diseño es: la obra manda. La interfaz debe desaparecer y dejar
respirar a las piezas. Minimalismo intencional, no plantilla genérica.

---

## Stack

- **Framework:** Astro (sitio estático / SSG). Sin base de datos, sin backend.
- **Estilos:** CSS propio o Tailwind (a elección de quien implemente; mantener
  consistencia). Evitar dependencias pesadas.
- **Contenido:** Astro Content Collections (Markdown/MDX) para las obras y el CV.
- **Imágenes:** componente `<Image />` de Astro para optimización automática
  (formatos modernos, tamaños responsive, lazy loading). Nunca `<img>` a pelo
  para las fotos de obra.
- **Formulario de contacto:** servicio externo sin servidor (Formspree o el de
  Netlify). El endpoint va en variable de entorno.
- **Hosting:** Cloudflare Pages (o Netlify/Vercel). Despliegue automático en
  cada push a `main`.
- **Dominio:** propio (ej. `nombreartista.com`) apuntando al hosting.

---

## Arquitectura de páginas

Rutas en español (por defecto) con equivalente en inglés bajo `/en/`:

- `/` · `/en/`                       → Inicio: una imagen potente, nombre, una frase.
- `/trabajo` · `/en/work`            → Galería agrupada por CATEGORÍAS (teatro,
                                       cine, televisión, cortometraje, publicidad).
- `/trabajo/[slug]` · `/en/work/…`   → Detalle de cada proyecto con su ficha.
- `/videobook` · `/en/showreel`      → Vídeo embebido (URL en variable de entorno).
- `/sobre-mi` · `/en/about`          → Foto, statement y bio corta.
- `/cv` · `/en/resume`               → CV formal + botón de descarga en PDF.
- `/contacto` · `/en/contact`        → Correo, redes, representación y formulario.

Las páginas de ambos idiomas comparten maquetación: cada ruta es un envoltorio
fino sobre los componentes de `src/components/paginas/`, parametrizados por
`lang`. Textos de interfaz en `src/i18n/ui.ts`; datos personales y CV en
`src/data/`.

Generar las páginas de trabajo dinámicamente desde las Content Collections:
añadir un proyecto nuevo debe ser crear un archivo Markdown + su imagen y hacer
push, sin tocar el diseño.

---

## Modelo de contenido

### Colección `trabajos` (cada archivo = un proyecto)
Esquema real en `src/content.config.ts`. Los campos `*_en` son opcionales:
si faltan, la versión inglesa reutiliza el valor en español.
```
titulo / titulo_en:            string
categoria:                     teatro | cine | television | cortometraje | publicidad
rol / rol_en:                  string   # personaje o papel
director:                      string (opcional)
compania:                      string (opcional)  # compañía o productora
anio:                          number
imagen:                        ruta a la imagen (src/assets/trabajos/)
alt / alt_en:                  string   # accesibilidad, obligatorio
video:                         URL (opcional, clip o tráiler)
descripcion / descripcion_en:  string (opcional)
destacado:                     boolean (opcional)
orden:                         number (opcional, dentro de la categoría)
```

### CV formal — orden estándar para actriz
Definido en `src/data/cv.ts` (bilingüe). Incluir solo secciones con contenido;
las vacías no se renderizan:
1. Formación
2. Teatro
3. Cine y televisión
4. Premios y reconocimientos
5. Habilidades (idiomas, canto, danza, acentos…)

El mismo CV debe poder descargarse como **PDF** (muchas convocatorias lo
piden). Implementado con la hoja de estilos `@media print` y un botón que
lanza `window.print()`: el PDF siempre está sincronizado con la web.

### Bio y statement
- Statement: 1–2 párrafos sobre qué explora y por qué.
- Bio: versión corta en tercera persona (la que copian los medios).

---

## Principios de implementación

- **Mobile-first.** Muchas galerías y clientes miran desde el móvil.
- **Rendimiento.** Sin JS innecesario. Astro por defecto no envía JS al cliente;
  mantenerlo así salvo componentes que lo necesiten de verdad.
- **Accesibilidad.** `alt` descriptivo en toda la obra, contraste correcto,
  navegación por teclado.
- **SEO básico.** Títulos por página, meta descripción, Open Graph con una
  imagen de obra para que se vea bien al compartir.
- **Nada de secretos en el repo.** Todo lo sensible o configurable, en `.env`.

---

## Variables de entorno
Ver `.env.example`. Copiar a `.env` y rellenar. Las que empiezan por `PUBLIC_`
se exponen al navegador (Astro); el resto se quedan en build.

---

## Comandos

```
npm install        # instalar
npm run dev        # desarrollo local
npm run build      # build de producción
npm run preview    # previsualizar el build
```

---

## Decisiones pendientes (confirmar antes de fijar)

- Nombre artístico completo, correo, redes y dominio real (placeholders en
  `src/data/perfil.ts` y `astro.config.mjs`, marcados con TODO / [PENDIENTE]).
- Textos definitivos: statement, bio, entradas reales del CV y proyectos.
- Fotos reales: sustituir los degradados placeholder de `src/assets/`.
- ¿Sección de novedades / próximos estrenos? Opcional, no incluida.
- ¿Datos de representación / agencia? Hueco previsto en `perfil.ts`.

## Decisiones ya tomadas

- Disciplina: **actriz** (teatro, cine, TV, cortometraje, publicidad).
- Idioma: **bilingüe ES/EN** con el i18n nativo de Astro
  (`prefixDefaultLocale: false`; español en la raíz, inglés bajo `/en/`).
- Estilos: **CSS propio** (`src/styles/global.css`), sin Tailwind.
- Tienda / venta: NO incluida; añadir solo si se pide.
- PDF del CV: vía estilos de impresión, sin archivo PDF aparte.
