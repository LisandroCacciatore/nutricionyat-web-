// FUENTE ÚNICA DE VERDAD DE LOS TOKENS DEL SISTEMA "BOTANICAL VITALITY".
//
// Este archivo lo consumen tres cosas, y por eso los valores viven acá y no duplicados:
//   1. tailwind.config.js  -> genera las clases (bg-brand, text-ink-body, ...)
//   2. src/pages/DesignSystem.jsx -> dibuja los swatches y calcula la tabla de contraste
//   3. DESIGN.md -> documenta el sistema (se mantiene a mano, pero sale de acá)
//
// Si se cambia un valor acá, cambia el CSS y la tabla de contraste. La tabla no puede
// quedar desactualizada porque no está escrita: se calcula.

export const tokens = {
  brand: {
    DEFAULT: '#163328', // Deep Laurel Sage — marca
    hover: '#2D4A3E',
    soft: '#C9EAD9',
    container: '#2D4A3E', // declarado, sin uso
  },
  accent: {
    DEFAULT: '#D97D54', // Sun-dried Persimmon — para superficies SIN texto encima
    hover: '#E68A5F', // declarado, sin uso
    // Variante oscurecida, para cuando el acento lleva texto blanco encima.
    // El acento crudo con blanco da 2.99: no llega ni al umbral de texto grande (3.0).
    // Este tono da 4.55. No está elegido a ojo: es el primer tono que alcanza 4.5 al
    // oscurecer el DEFAULT. El cálculo se ve en vivo en /sistema.
    deep: '#AC6343',
  },
  surface: {
    DEFAULT: '#F6FBF5', // Oatmeal canvas — fondo global
    alt: '#F0F5F0',
    muted: '#EBEFEA',
    white: '#FFFFFF',
  },
  ink: {
    title: '#163328',
    body: '#506351',
    // #727974 daba 4.26 sobre surface y 3.84 sobre surface.muted: fallaba AA en texto
    // de 12px, que es justo donde no aplica la excepción de texto grande. Este tono da
    // 5.00 y 4.50 respectivamente.
    muted: '#676E69',
  },
  secondary: {
    DEFAULT: '#506351', // Tender Herb
    light: '#D0E5CE', // declarado, sin uso
  },
};

/** Grupos de la paleta, con el rol de cada token. Ordena y explica los swatches. */
export const paletteGroups = [
  {
    name: 'brand',
    label: 'Marca',
    note: 'El verde laural profundo. Botones primarios, títulos y superficies oscuras.',
  },
  {
    name: 'accent',
    label: 'Acento',
    note: 'Persimón, un único acento cálido. Señala, no decora. Ojo con el texto blanco encima: ver contraste.',
  },
  {
    name: 'surface',
    label: 'Superficies',
    note: 'Oatmeal en lugar de blanco puro. El blanco se reserva a las tarjetas para que floten.',
  },
  {
    name: 'ink',
    label: 'Texto',
    note: 'Tres niveles de jerarquía: título, cuerpo y metadatos.',
  },
  {
    name: 'secondary',
    label: 'Secundario',
    note: 'Sirve para eyebrows e íconos. Comparte valor con ink.body, por semántica.',
  },
];

export const tokenNotes = {
  'brand.container': 'declarado, hoy sin uso',
  'accent.hover': 'declarado, hoy sin uso',
  'secondary.light': 'declarado, hoy sin uso',
};

/** Resuelve 'accent' o 'surface.white' al hex correspondiente. */
export function hex(path) {
  const [group, shade = 'DEFAULT'] = String(path).split('.');
  const g = tokens[group];
  if (!g) throw new Error(`Token desconocido: ${group}`);
  const v = g[shade];
  if (!v) throw new Error(`Shade desconocido: ${group}.${shade}`);
  return v;
}

/**
 * Pares a medir. `size` define el umbral: 'normal' = 4.5 (texto < 24px),
 * 'large' = 3.0 (≥24px, o ≥18.66px en negrita).
 * `alpha` compone el color de texto sobre el fondo antes de medir.
 */
export const contrastPairs = [
  { fg: 'surface.white', bg: 'brand', size: 'normal', context: 'Botón primario (14px semibold)' },
  { fg: 'ink.title', bg: 'surface.white', size: 'normal', context: 'Títulos en tarjetas' },
  { fg: 'ink.title', bg: 'surface', size: 'normal', context: 'Títulos de sección' },
  { fg: 'brand.soft', bg: 'brand', size: 'normal', context: 'Badge sobre tarjeta destacada' },
  { fg: 'surface.white', bg: 'brand.hover', size: 'normal', context: 'Hover del brand' },
  { fg: 'surface.white', alpha: 0.8, bg: 'brand', size: 'normal', context: 'Subtítulo del botón flotante (white/80)' },
  { fg: 'surface.white', alpha: 0.7, bg: 'brand', size: 'normal', context: 'Texto atenuado sobre brand (white/70)' },
  { fg: 'ink.body', bg: 'surface.white', size: 'normal', context: 'Cuerpo en tarjetas' },
  { fg: 'ink.body', bg: 'surface', size: 'normal', context: 'Cuerpo por defecto' },
  { fg: 'secondary', bg: 'surface', size: 'normal', context: 'Eyebrow uppercase (12px semibold)' },
  { fg: 'ink.body', bg: 'surface.alt', size: 'normal', context: 'Cuerpo en secciones alternas' },
  { fg: 'ink.muted', bg: 'surface', size: 'normal', context: 'Footer y metadatos (12px)' },
  { fg: 'ink.muted', bg: 'surface.muted', size: 'normal', context: 'Aviso médico (12px)' },
  { fg: 'surface.white', bg: 'accent', size: 'normal', context: 'Acento crudo con texto blanco — NO usar, ver accent.deep' },
  { fg: 'surface.white', bg: 'accent.deep', size: 'normal', context: 'Botón accent corregido (14px semibold)' },
  { fg: 'accent.deep', bg: 'surface.white', size: 'normal', context: 'Etiquetas de falla en /sistema (11px)' },
  { fg: 'secondary', alpha: 0.7, bg: 'surface.alt', size: 'large', context: 'Números de pilar (30px, corregido de /40 a /70)' },
];

/** Escala tipográfica, con las clases reales del sitio. */
export const typeScale = [
  {
    label: 'H1 de hero',
    cls: 'text-4xl md:text-[56px] font-display font-semibold leading-[1.1]',
    spec: 'Playfair Display 600 · 36 → 56px · line-height 1.1',
    sample: 'Alimentación real y sostenible',
  },
  {
    label: 'H1 de página interna',
    cls: 'text-4xl md:text-5xl font-display font-semibold',
    spec: 'Playfair Display 600 · 36 → 48px · line-height 1.25',
    sample: 'Nutrición real, sin extremos ni culpas',
  },
  {
    label: 'H2 de sección',
    cls: 'text-3xl md:text-[40px] font-display font-semibold',
    spec: 'Playfair Display 600 · 30 → 40px',
    sample: 'Pilares para una nutrición equilibrada',
  },
  {
    label: 'H3 de tarjeta',
    cls: 'text-lg font-semibold',
    spec: 'Playfair Display 600 · 18px — heredado de la capa base, no es sans',
    sample: 'Plan a tu Medida',
  },
  {
    label: 'Eyebrow',
    cls: 'eyebrow',
    spec: 'Plus Jakarta Sans 600 · 12px · uppercase · tracking 0.05em',
    sample: 'Metodología de Acompañamiento',
  },
  {
    label: 'Cuerpo destacado',
    cls: 'text-lg text-ink-body',
    spec: 'Plus Jakarta Sans 400 · 18px',
    sample: 'Acompañamiento nutricional personalizado basado en evidencia.',
  },
  {
    label: 'Cuerpo',
    cls: 'text-base text-ink-body',
    spec: 'Plus Jakarta Sans 400 · 16px · line-height 1.6',
    sample: 'Aprendé a nutrir tu cuerpo con comidas ricas, equilibradas y adaptadas a tu rutina real.',
  },
  {
    label: 'Metadatos',
    cls: 'text-xs text-ink-muted',
    spec: 'Plus Jakarta Sans 400 · 12px',
    sample: 'Actualizado 2026 · 5 min de lectura',
  },
];

export const radiusTokens = [
  { token: 'rounded-btn', value: '9999px', use: 'Botones (píldora completa)' },
  { token: 'rounded-card', value: '1rem', use: 'Tarjetas — equivale a rounded-2xl' },
  { token: 'rounded-container', value: '1.5rem', use: 'Bloques grandes — equivale a rounded-3xl' },
  { token: 'rounded-xl', value: '0.75rem', use: 'Sub-bloques dentro de tarjetas' },
  { token: 'rounded-lg', value: '0.5rem', use: 'Inputs del formulario' },
  { token: 'rounded-full', value: '9999px', use: 'Chips, badges, avatares, FAB' },
];

export const shadowTokens = [
  { token: 'shadow-soft', value: '0 4px 20px -4px rgba(45, 74, 62, 0.04)', use: 'Reposo de tarjetas' },
  { token: 'shadow-hover', value: '0 12px 32px -6px rgba(45, 74, 62, 0.08)', use: 'Hover de tarjetas y botones' },
  { token: 'shadow-float', value: '0 24px 48px -12px rgba(36, 41, 38, 0.12)', use: 'Popover del botón flotante' },
];
