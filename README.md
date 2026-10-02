# Nutricionyat — Lic. Yamila Titonel

Sitio web de nutrición clínica integrativa y hábitos conscientes.
Construido con **React 18 + Vite 5 + Tailwind CSS 3** (sistema de diseño *Botanical Vitality*).

Repo: https://github.com/LisandroCacciatore/nutricionyat-web-

## 🛠️ Stack

- **React 18** + **Vite 5**
- **React Router 6** (navegación SPA, con `basename` derivado de `BASE_URL`)
- **Tailwind CSS 3** + `@tailwindcss/typography` (para el cuerpo de los artículos)
- **Playfair Display** + **Plus Jakarta Sans** + Material Symbols (Google Fonts)

## 📦 Instalación local

```bash
git clone https://github.com/LisandroCacciatore/nutricionyat-web-.git
cd nutricionyat-web-
npm install
npm run dev
```

Abrí http://localhost:5173

## 🏗️ Build de producción

```bash
npm run build     # genera ./dist
npm run preview   # sirve ./dist localmente
```

## 🌐 Deploy

### GitHub Pages (ya configurado)

El repo tiene `.github/workflows/deploy.yml`. En cada push a `main`:
1. Instala dependencias (`npm ci`).
2. Buildea con `VITE_BASE=/nutricionyat-web-/`.
3. Publica `./dist` en Pages.

URL: https://lisandrocacciatore.github.io/nutricionyat-web-/

**Requisito:** en *Settings → Pages → Source* tiene que estar seleccionado
**GitHub Actions** (no "Deploy from a branch"). Si no está, el workflow corre
pero no publica nada.

Para probar el build de Pages en local:

```bash
VITE_BASE=/nutricionyat-web-/ npm run build && npm run preview
```

### Vercel / Netlify (dominio propio)

Importar el repo. Detectan Vite solos. **No** hay que setear `VITE_BASE`:
sin esa variable la base es `/`, que es lo correcto para un dominio raíz
(ej. yamilatitonel.com).

## 📝 Personalización

| Qué | Dónde |
|---|---|
| Datos de la profesional, links, servicios, FAQ, testimonios | `src/data/site.js` |
| Artículos del blog | `src/data/blog.js` |
| Colores, tipografías, radios, sombras | `tailwind.config.js` |
| Cuerpo del artículo (texto común) | `src/pages/BlogPost.jsx` |

## ⚠️ Pendientes antes de publicar

Esto **no** son detalles cosméticos: son datos que faltan y que no se pueden inventar.

- [ ] **Testimonios inventados.** Los 3 de `src/data/site.js` no son pacientes reales.
      Reemplazar por testimonios reales con autorización, o eliminar la sección
      (incluido el eyebrow "Experiencias Clínicas Reales" en `Home.jsx`).
- [ ] **"+1.200 Pacientes acompañados"** en el hero: cifra sin verificar. Pedir la real.
- [ ] **WhatsApp**: el brief lo pedía como canal principal y no hay número.
      Falta cargarlo en `FloatingCTA.jsx` y en `site.js`.
- [ ] **Matrícula** (M.N. / M.P.): no figura en el sitio. Agregar en el footer.
- [ ] **LinkedIn**: `site.linkedin` apunta a la home de linkedin.com. Poner la URL real.
- [ ] **Email** `info@nutricionyat.com`: confirmar que el dominio y el buzón existan.
- [ ] **Formulario de contacto**: no envía nada (solo estado local). Definir destino
      (webhook de n8n, Formspree o Netlify Forms) y agregar el checkbox de
      consentimiento de datos de salud.
- [ ] **Páginas legales**: los links de privacidad / términos / consentimiento
      apuntan a `#`. Escribirlas.
- [ ] **Imágenes**: todas son placeholders de `picsum.photos`. Reemplazar por fotos
      reales de Yamila y de sus platos (con autorización).
- [ ] **Blog**: los 9 artículos comparten el mismo cuerpo de texto genérico.
      Escribir contenido real o dejar el blog apagado.
- [ ] **SEO**: falta JSON-LD (schema `Person` / `LocalBusiness`), `og:url`,
      `og:image`, `sitemap.xml` y `robots.txt`. Requiere dominio propio definido.

## ♿ Accesibilidad

- Focus rings visibles en todos los elementos interactivos.
- `aria-label` en navegación, `aria-expanded` en el acordeón y el botón flotante,
  `aria-pressed` en los filtros del blog, `htmlFor`/`id` en los campos del formulario.
- Pendiente de revisar: `::-webkit-scrollbar { display: none }` oculta la barra de
  scroll en desktop, que es una referencia útil de posición en páginas largas.

## 📄 Licencia

© 2026 Lic. Yamila Titonel (Nutricionyat). Todos los derechos reservados.
