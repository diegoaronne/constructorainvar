# Constructora Invar — Sitio Web

Sitio web corporativo de Constructora Invar (Choluteca, Honduras).

## Tecnologías
- HTML5
- Tailwind CSS (compilado localmente)
- JavaScript vanilla

## Compilar Tailwind CSS

El sitio usa Tailwind CSS compilado localmente (NO el CDN). Para regenerar el CSS:

```bash
# Instalar dependencias (solo la primera vez)
npm install

# Compilar el CSS minificado
npm run build:css

# O dejarlo en modo "watch" mientras editas
npm run watch:css
```

El CSS compilado se genera en `css/style.css`.

> **Importante:** Si agregas clases nuevas de Tailwind en el HTML, debes volver a compilar para que aparezcan en el CSS final.

## Estructura
- `index.html` — Página principal
- `blog/` — Artículos del blog
- `css/style.css` — CSS compilado de Tailwind
- `input.css` — Archivo fuente de Tailwind
- `img/` — Imágenes optimizadas
- `js/script.js` — Lógica del frontend
- `sitemap.xml` — Mapa del sitio para SEO
- `robots.txt` — Directivas para crawlers
