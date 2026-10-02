# Botanical Vitality — Sistema de diseño

Sistema de diseño del sitio **Lic. Yamila Titonel (Nutricionyat)**.

**La fuente de verdad es `tailwind.config.js`.** Este documento lo explica y lo justifica;
si hay una discrepancia entre los dos, manda el código. Todos los valores de color de acá
están extraídos de ese archivo, y todos los ratios de contraste fueron **calculados** con
la fórmula de luminancia relativa de WCAG 2.x (ver *Método* al final), no estimados.

---

## 1. Intención

El sitio tiene que sentirse como **una consulta cálida**, no como un hospital.
Tres decisiones sostienen todo lo demás:

1. **Verde laural profundo como color de marca, no verde "salud" brillante.** Un verde
   oscuro y terroso transmite calma y seriedad clínica sin caer en el verde quirófano.
2. **Un único acento cálido (persimón) usado con cuentagotas.** Aparece en lo que hay que
   mirar: la tarjeta destacada. Si se usa en todo, deja de destacar nada.
3. **Superficies cálidas (oatmeal) en lugar de blanco puro como fondo global.** El blanco
   puro se reserva para las tarjetas, así las tarjetas *flotan* sobre el fondo en vez de
   recortarse con bordes.

La marca es "naturaleza cultivada", no "naturaleza salvaje": el verde es profundo y
controlado, el beige es limpio, y el acento es un fruto, no una flor.

---

## 2. Color

### Tokens

| Token | Hex | Nombre | Rol |
|---|---|---|---|
| `brand` | `#163328` | Deep Laurel Sage | Color de marca. Botones primarios, títulos, superficies oscuras. |
| `brand.hover` | `#2D4A3E` | — | Estado hover del brand. |
| `brand.soft` | `#C9EAD9` | — | Fondos suaves, badges, chips de íconos. |
| `brand.container` | `#2D4A3E` | — | *(declarado, hoy sin uso)* |
| `accent` | `#D97D54` | Sun-dried Persimmon | Acento cálido. **Ver §4: no usar con texto blanco.** |
| `accent.hover` | `#E68A5F` | — | *(declarado, hoy sin uso)* |
| `surface` | `#F6FBF5` | Oatmeal canvas | Fondo global del sitio (cuerpo). |
| `surface.alt` | `#F0F5F0` | — | Fondo de secciones alternas (`.section-alt`). |
| `surface.muted` | `#EBEFEA` | — | Cajas de aviso legal, bloques de baja jerarquía. |
| `surface.white` | `#FFFFFF` | — | Tarjetas. Reservado para que las tarjetas floten. |
| `ink.title` | `#163328` | — | Títulos (igual al brand, por decisión). |
| `ink.body` | `#506351` | — | Texto de párrafo. |
| `ink.muted` | `#727974` | — | Metadatos, footer, disclaimers. **Ver §4.** |
| `secondary` | `#506351` | Tender Herb | Eyebrows, íconos, acentos secundarios (igual al `ink.body`). |
| `secondary.light` | `#D0E5CE` | — | *(declarado, hoy sin uso)* |

Notas de implementación:

- `ink.body` y `secondary` son **el mismo color** (`#506351`). Están duplicados por
  claridad semántica, no por diferencia visual.
- `ink.title` y `brand` son **el mismo color** (`#163328`), por la misma razón.
- Los tokens marcados *sin uso* no hay que borrarlos: documentan la intención de la escala.

### Cómo se combinan

| Combinación | Uso |
|---|---|
| `bg-surface` + texto `ink.body` | Fondo y cuerpo por defecto de todo el sitio. |
| `bg-surface-alt` + texto `ink.body` | Secciones alternas, para separar bloques sin líneas. |
| `bg-surface-white` + texto `ink.body` | Tarjetas (`shadow-soft`). |
| `bg-brand` + texto `white` | Botón primario, tarjeta destacada, banner de cita. |
| `bg-brand-soft` + texto `brand` | Chips de íconos, badges, mensajes de confirmación. |
| `border-brand/10` | Bordes de separación internos en tarjetas y header. |

Opacidades que sí se usan: `border-brand/10`, `border-brand/5`, `bg-brand/5` (hover del
botón secundario), `bg-surface/85` (header sticky con `backdrop-blur-xl`).

---

## 3. Tipografía

### Familias

| Rol | Familia | Pesos cargados |
|---|---|---|
| Display / títulos | **Playfair Display** | 500, 600, e itálica 400 |
| UI y cuerpo | **Plus Jakarta Sans** | 400, 500, 600, 700 |
| Íconos | **Material Symbols Outlined** | eje `wght` y `FILL` 100–700 / 0–1 |

Las tres se cargan desde Google Fonts en `index.html`, con `preconnect` a
`fonts.googleapis.com` y `fonts.gstatic.com`.

### Escala en uso

| Elemento | Clases | Tamaño |
|---|---|---|
| H1 de hero | `text-4xl md:text-[56px] font-display font-semibold leading-[1.1]` | 36 → 56px |
| H1 de página interna | `text-4xl md:text-5xl font-display font-semibold` | 36 → 48px |
| H2 de sección | `text-3xl md:text-[40px] font-display font-semibold` | 30 → 40px |
| H3 de tarjeta | `text-lg font-semibold` | 18px |
| Eyebrow (antetítulo) | `.eyebrow` | 12px, uppercase, `tracking-[0.05em]` |
| Cuerpo | `text-base` heredado del `body` | 16px, `line-height: 1.6` |
| Cuerpo destacado | `text-lg text-ink-body` | 18px |
| Metadatos / footer | `text-xs` | 12px |

Detalle a tener presente: la capa base aplica `font-display` a **todos** los `h1`–`h4`
(`src/index.css`), así que un `<h3 className="text-lg font-semibold">` de tarjeta
**también sale en Playfair Display**. Es intencional en el sistema —una tarjeta con
título en serif se lee editorial— pero conviene saberlo: si en algún momento se quiere
un título de tarjeta en sans, hay que ponerle `font-sans` explícito.

Los títulos usan `line-height: 1.25` por la capa base; el hero lo pisa a `1.1` porque a
56px el 1.25 abría demasiado el bloque.

---

## 4. Contraste medido

El README original afirmaba "contraste WCAG 2.1 AA/AAA siguiendo la paleta". Lo medí.
**La mayoría cumple; hay tres puntos que no**, y los tres son accionables.

| Combinación | Ratio | AA texto (4.5) | AA grande (3.0) | AAA (7.0) |
|---|---|---|---|---|
| `white` sobre `brand` — botón primario | **13.65** | ✅ | ✅ | ✅ |
| `ink.title` sobre `surface.white` | **13.65** | ✅ | ✅ | ✅ |
| `ink.title` sobre `surface` | **13.02** | ✅ | ✅ | ✅ |
| `brand.soft` sobre `brand` — badge | **10.57** | ✅ | ✅ | ✅ |
| `white` sobre `brand.hover` | **9.72** | ✅ | ✅ | ✅ |
| `white/80` sobre `brand` — subtítulo FAB | **9.26** | ✅ | ✅ | ✅ |
| `white/70` sobre `brand` | **7.49** | ✅ | ✅ | ✅ |
| `ink.body` sobre `surface.white` | **6.47** | ✅ | ✅ | ❌ |
| `ink.body` sobre `surface` | **6.18** | ✅ | ✅ | ❌ |
| `secondary` sobre `surface` — eyebrow | **6.18** | ✅ | ✅ | ❌ |
| `ink.body` sobre `surface.alt` | **5.86** | ✅ | ✅ | ❌ |
| `ink.muted` sobre `surface` | **4.26** | ❌ | ✅ | ❌ |
| `ink.muted` sobre `surface.muted` | **3.84** | ❌ | ✅ | ❌ |
| `white` sobre `accent` — botón accent | **2.99** | ❌ | ❌ | ❌ |
| `secondary/40` sobre `surface.alt` — número de pilar | **1.80** | ❌ | ❌ | ❌ |

### Los tres problemas, con la corrección medida

**1. `white` sobre `accent` = 2.99.** El persimón `#D97D54` no aguanta texto blanco:
falla incluso el umbral de texto grande (3.0), por un centésimo.
*Corrección:* oscurecer el acento a **`#AC6343`**, que da **4.55** con blanco. Si el
acento se quiere solo para superficies sin texto (bordes, íconos, barras), `#D97D54`
está bien y no hay que tocar nada.

> Estado actual: **este fallo no es visible en el sitio**. El token `accent` se usa
> únicamente como nombre de variante (`ui.jsx:15`, y `variant="accent"` en `Home.jsx:293`
> y `Plans.jsx:93`), y en los dos usos reales el `className` sobreescribe el fondo a
> blanco (`!bg-white !text-brand`). O sea: `.btn-accent` es CSS latente. El día que
> alguien lo use tal cual está, el fallo aparece.

**2. `ink.muted` (`#727974`) falla AA sobre las dos superficies donde se usa.**
4.26 sobre `surface` y 3.84 sobre `surface.muted`, y se aplica a texto de 12px —footer,
"Actualizado 2026", el aviso médico— que es exactamente el caso donde no aplica la
excepción de texto grande.
*Corrección:* cambiar `ink.muted` a **`#676E69`**, que da **4.50** sobre `surface.muted`
(el fondo más exigente) y **5.00** sobre `surface`. Cubre los dos casos con un solo valor.

**3. `secondary/40` = 1.80 en los números de pilar ("01"–"04").**
Son `text-3xl` (30px), así que el umbral es 3.0, y están muy lejos.
*Corrección:* subir a **`secondary/70`** (`#808F81`, ratio **3.09**), o dejar la opacidad
y marcarlos `aria-hidden="true"` si se considera decoración pura. Hoy son contenido
(el orden de los pilares), así que corresponde subirlos.

---

## 5. Espaciado y layout

| Token / clase | Valor |
|---|---|
| `maxWidth.container` | `1280px` |
| `.container-page` | `max-w-container mx-auto px-5 md:px-12` |
| `.section` | `py-16 md:py-24` |
| Grillas | `gap-6` (4 columnas) / `gap-8` (3 columnas) / `gap-12` (2 columnas) |

Breakpoints: los de Tailwind por defecto (`sm` 640, `md` 768, `lg` 1024, `xl` 1280).

Dos breakpoints tienen intención específica:
- La navegación completa aparece recién en **`xl`**, y el CTA del header en **`sm`**.
  Entre `sm` y `xl` quedan el logo y el CTA: es el estado donde el tráfico de Instagram
  (mobile) ve la página, y se prioriza el botón sobre los links.
- El hero pasa a dos columnas en `lg` con una grilla de 12 (`col-span-7` texto /
  `col-span-5` imagen). El `4:5` de la foto de perfil es a propósito: es el formato de
  Instagram, así la imagen no se recorta raro viniendo de esa red.

---

## 6. Radios

| Token | Valor | Uso |
|---|---|---|
| `rounded-btn` | `9999px` | Botones. Píldora completa. |
| `rounded-card` | `1rem` | Tarjetas. |
| `rounded-container` | `1.5rem` | Bloques grandes (banner de cita, cajas destacadas). |
| `rounded-full` | — | Chips, badges, avatares, FAB. |
| `rounded-xl` | `0.75rem` | Sub-bloques dentro de tarjetas. |
| `rounded-lg` | `0.5rem` | Inputs del formulario. |

**Inconsistencia a resolver:** el código usa `rounded-2xl` y `rounded-3xl` (defaults de
Tailwind, que valen `1rem` y `1.5rem`) en lugar de los tokens `rounded-card` y
`rounded-container` que existen justamente para eso. El resultado visual es idéntico
hoy, pero si alguien cambia el token `card`, las tarjetas no se enteran. Unificar en los
tokens nombrados.

---

## 7. Elevación

| Token | Valor | Uso |
|---|---|---|
| `shadow-soft` | `0 4px 20px -4px rgba(45, 74, 62, 0.04)` | Reposo de tarjetas. |
| `shadow-hover` | `0 12px 32px -6px rgba(45, 74, 62, 0.08)` | Hover de tarjetas y botones. |
| `shadow-float` | `0 24px 48px -12px rgba(36, 41, 38, 0.12)` | Popover del botón flotante. |
| `shadow-md` / `shadow-xl` / `shadow-2xl` | defaults de Tailwind | Card de autor del hero, banner de cita, tarjeta destacada de Planes. |

Las sombras del sistema usan **verde tinteado** (`rgba(45, 74, 62, …)`), no negro: una
sombra negra sobre fondo cálido se lee como suciedad gris.

Quedaron **7 usos en sombras negras default de Tailwind**, que conviene tintear para
mantener la coherencia: 2×`shadow-md` + 3×`shadow-xl` en `Home.jsx`, 1×`shadow-xl` en el
FAB (`FloatingCTA.jsx`) y 1×`shadow-2xl` en la tarjeta destacada de `Plans.jsx`.

---

## 8. Componentes

Las clases utilitarias viven en `src/index.css` (`@layer components`); los componentes
React en `src/components/`.

### Botón — `ui.jsx` + `.btn`

Base: `inline-flex items-center justify-center gap-2 font-sans text-[14px] font-semibold
rounded-btn px-8 py-3.5 min-h-[48px] cursor-pointer transition-all duration-300`

| Variante | Clases | Cuándo |
|---|---|---|
| `primary` | `bg-brand text-white shadow-soft hover:shadow-hover hover:-translate-y-0.5` | Acción principal. Una por pantalla. |
| `secondary` | `bg-transparent text-brand border-[1.5px] border-brand hover:bg-brand/5` | Acción alternativa. |
| `accent` | `bg-accent text-white …` | **Ver §4: no usar hasta corregir el acento.** |

El `min-h-[48px]` no es decorativo: es el mínimo táctil para que el botón sea cómodo con
el dedo, porque más del 80% del tráfico llega desde el celular.

Se admiten *escapes* con `!` para casos puntuales —por ejemplo
`!bg-white !text-brand hover:!bg-brand-soft` en la tarjeta destacada— pero cada uno es
deuda técnica: si se repite tres veces, corresponde una variante nueva.

### Otros componentes

| Componente | Patrón |
|---|---|
| `.container-page` | Ancho máximo + padding lateral responsive. |
| `.section` / `.section-alt` | Bloque vertical + fondo alterno. |
| `.eyebrow` | Antetítulo: 12px, uppercase, `tracking-[0.05em]`, `text-secondary`. |
| Tarjeta de pilar | `bg-white p-8 rounded-2xl shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300` |
| Tarjeta de plan destacada | `bg-brand text-white shadow-xl relative md:-translate-y-2` + badge `absolute -top-3` |
| Tarjeta de testimonio | `bg-white p-8 rounded-2xl shadow-soft` + avatar circular `bg-brand-soft` con iniciales |
| Tarjeta de blog | `bg-white rounded-2xl overflow-hidden shadow-soft` + imagen `aspect-[16/10]` |
| Acordeón FAQ | Fondo blanco, chevron `expand_more` que rota 180° con `duration-300`. |
| Chip de filtro (blog) | Píldora; activo `bg-brand text-white`, inactivo `bg-surface-alt text-ink-body`. |
| Icono en chip | `w-10 h-10 rounded-full bg-brand-soft text-brand flex items-center justify-center` |
| Botón flotante (FAB) | `w-14 h-14 bg-brand rounded-full shadow-lg hover:scale-105`, `z-[9999]`, `bottom-6 right-6` |

### Estados

- **Focus:** `outline: 2px solid #163328; outline-offset: 2px` sobre `:focus-visible`
  en `a`, `button` y `[tabindex]`. Un solo estilo para todo el sitio, sin excepciones.
- **Hover de tarjeta:** sube `-translate-y-1` y cambia la sombra. Nada de cambiar colores.
- **Hover de botón:** sube `-translate-y-0.5` y cambia la sombra. El color de fondo solo
  cambia en el secundario (`bg-brand/5`).

---

## 9. Movimiento

| Dónde | Qué |
|---|---|
| `html` | `scroll-behavior: smooth` |
| Transiciones | `duration-300` como default del sistema |
| Botones y tarjetas | `hover:-translate-y-0.5` / `-translate-y-1` |
| FAB | `hover:scale-105` |
| Popover del FAB | `floatUp` 0.3s `cubic-bezier(0.16, 1, 0.3, 1)` (salida suave, sin rebote) |
| Acordeón | chevron `rotate-180` en `duration-300` |

Regla: **el movimiento es de elevación, no de transformación.** Las cosas suben y la
sombra se agranda. No hay escalados de contenido, rotaciones ni rebotes: el sistema
quiere transmitir calma, y un rebote transmite lo contrario.

Pendiente: no hay bloque `@media (prefers-reduced-motion: reduce)`. Con transiciones de
0.3s y desplazamientos de 4px el riesgo es bajo, pero corresponde agregarlo antes de
producción. También está pendiente revisar `::-webkit-scrollbar { display: none }` en
`index.css`: oculta la barra de scroll en desktop, que en páginas largas es una
referencia útil de posición.

---

## 10. Reglas de uso

**Sí**
- Una sola acción `primary` visible por pantalla.
- Tarjetas sobre `surface` o `surface.alt`, nunca sobre `surface.white`.
- El acento (`accent`) para señalar, no para decorar.
- Todo texto interactivo con `min-h-[48px]` de alto.

**No**
- Texto blanco sobre `accent` sin corregir el tono (§4).
- Texto de 12px en `ink.muted` sin corregir el valor (§4).
- Sombras negras nuevas: tintearlas con el verde del sistema (§7).
- Mezclar `rounded-card` y `rounded-2xl` en el mismo nivel de jerarquía (§6).
- Verde "salud" brillante, gradientes de color, o cualquier estética que empuje el sitio
  hacia lo clínico frío.

---

## 11. Reutilizar el sistema en otro vertical

Este sistema es la instancia **Botanical Vitality** de una estructura reutilizable. Para
otro cliente del mismo nicho (dentista, kinesiólogo) o de otro rubro, se cambian **solo
los valores de color** en `tailwind.config.js` —la estructura de tokens (`brand`,
`accent`, `surface`, `ink`, `secondary`) se mantiene— más las tipografías si hace falta.
Todo lo demás (escala, espaciado, radios, sombras, componentes, estados) queda igual.

Eso es deliberado: permite entregar un sitio nuevo en horas en lugar de días, y es la
razón por la que los tokens tienen **nombres funcionales** (`brand`, `ink`, `surface`) y
no nombres de color (`green`, `grey`).

---

## Método

Los ratios de contraste se calcularon con la fórmula de luminancia relativa de WCAG 2.x:
se linealiza cada canal sRGB (`c/12.92` si `c ≤ 0.03928`, si no `((c+0.055)/1.055)^2.4`),
se combina con `0.2126R + 0.7152G + 0.0722B`, y el ratio es `(L₁+0.05)/(L₂+0.05)` sobre
el más claro y el más oscuro. Los valores con alfa se componen sobre el fondo antes de
medir. Umbrales: **4.5** para texto normal, **3.0** para texto grande (≥24px, o ≥18.66px
en negrita), **7.0** para AAA.

Los valores de los tokens provienen de `tailwind.config.js`; los patrones de clases, de
`src/index.css`, `src/components/` y `src/pages/`.
