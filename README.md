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

## 🎭 Es un mock: qué es real y qué es de muestra

Este repo es un **mock para una propuesta comercial**, no el sitio en producción.
El contenido de abajo es **de ejemplo**, puesto para que la propuesta se vea completa
y para que Yamila pueda imaginarse el sistema terminado. Al contratar, cada ítem se
reemplaza por el dato real.

Consecuencia técnica ya aplicada: `index.html` lleva `<meta name="robots" content="noindex, nofollow">`.
Un sitio público con el nombre real de una profesional y testimonios de pacientes
fabricados **no debe quedar en Google**. Ese meta tag hay que quitarlo el día que el
sitio pase a producción en el dominio propio.

> Por qué no hay `robots.txt`: en una *project page* (`usuario.github.io/<repo>/`) los
> crawlers **solo leen `/robots.txt` en la raíz del host**, que en `github.io` no nos
> pertenece. Un `robots.txt` dentro del repo no lo leería nadie. El meta tag es lo que sí funciona.

### Contenido de muestra a reemplazar al contratar

- [ ] **Los 3 testimonios** de `src/data/site.js` son inventados, igual que el título
      "Experiencias Clínicas Reales". En una demo se entiende; en producción serían
      publicidad engañosa. Reemplazar por reales con autorización, o quitar la sección.
- [ ] **"+1.200 Pacientes acompañados"** en el hero: cifra de ejemplo. Poner la real.
- [ ] **Respuestas del FAQ**: describen una operatoria (50-60 min, entrega en 48 hs,
      facturación) que Yamila tiene que confirmar o reescribir con sus palabras.
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
- [ ] **Imágenes**: todas son placeholders de `picsum.photos`. En el mock se ven como
      fotos; en producción van las reales de Yamila y de sus platos.
- [ ] **Blog**: los 9 artículos comparten el mismo cuerpo de texto genérico.
- [ ] **SEO**: falta JSON-LD (schema `Person` / `LocalBusiness`), `og:url`,
      `og:image`, `sitemap.xml` y `robots.txt` en la raíz del dominio.
- [ ] **Favicon**: falta (hoy `/favicon.ico` da 404).


## ♿ Accesibilidad

- Focus rings visibles en todos los elementos interactivos.
- `aria-label` en navegación, `aria-expanded` en el acordeón y el botón flotante,
  `aria-pressed` en los filtros del blog, `htmlFor`/`id` en los campos del formulario.
- Pendiente de revisar: `::-webkit-scrollbar { display: none }` oculta la barra de
  scroll en desktop, que es una referencia útil de posición en páginas largas.

## 📄 Licencia

© 2026 Lic. Yamila Titonel (Nutricionyat). Todos los derechos reservados.
