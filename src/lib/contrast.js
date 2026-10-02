// Cálculo de contraste según WCAG 2.x.
// Fórmula de luminancia relativa: se linealiza cada canal sRGB, se combinan con los
// coeficientes de percepción, y el ratio sale de (L_claro + 0.05) / (L_oscuro + 0.05).
// Implementado acá para que la tabla del sitio se calcule en vivo desde los tokens,
// en lugar de estar escrita a mano (donde quedaría desactualizada al primer cambio).

/** '#163328' -> [0.16, 0.33, 0.28] ya linealizado */
export function linearize(hex) {
  const h = hex.replace('#', '');
  const ch = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  return ch.map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
}

/** Luminancia relativa (0 = negro, 1 = blanco). */
export function luminance(hex) {
  const [r, g, b] = linearize(hex);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** Ratio de contraste entre dos colores opacos. Va de 1 (idénticos) a 21 (negro/blanco). */
export function contrast(a, b) {
  const la = luminance(a);
  const lb = luminance(b);
  const [hi, lo] = la > lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}

/** Compone un color con alfa sobre un fondo opaco y devuelve el hex resultante. */
export function composite(fg, bg, alpha) {
  const f = fg.replace('#', '');
  const b = bg.replace('#', '');
  const out = [0, 2, 4].map((i) => {
    const cf = parseInt(f.slice(i, i + 2), 16);
    const cb = parseInt(b.slice(i, i + 2), 16);
    return Math.round(alpha * cf + (1 - alpha) * cb);
  });
  return '#' + out.map((v) => v.toString(16).padStart(2, '0')).join('').toUpperCase();
}

/** Devuelve el texto ('#FFFFFF' o '#163328') que mejor contrasta sobre un fondo. */
export function bestTextOn(bg, candidates = ['#FFFFFF', '#163328']) {
  return candidates.reduce((best, c) =>
    contrast(c, bg) > contrast(best, bg) ? c : best
  );
}

export const AA_NORMAL = 4.5;
export const AA_LARGE = 3.0;
export const AAA_NORMAL = 7.0;

/**
 * Oscurece `fg` hasta que alcance `target` de contraste sobre `bg`.
 * Devuelve el primer tono que cumple, o null si ninguno lo hace.
 * Se usa para calcular las correcciones en vez de escribirlas a mano.
 */
export function darkenTo(fg, bg, target = AA_NORMAL) {
  const h = fg.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  for (let step = 0; step <= 255; step++) {
    const f = 1 - step / 255;
    const cand =
      '#' +
      [r, g, b]
        .map((c) => Math.round(c * f).toString(16).padStart(2, '0'))
        .join('')
        .toUpperCase();
    if (contrast(cand, bg) >= target) return cand;
  }
  return null;
}

/**
 * Evalúa un ratio.
 * `size`: 'normal' (umbral 4.5) o 'large' (≥24px, o ≥18.66px en negrita → 3.0).
 */
export function evaluate(ratio, size = 'normal') {
  const aa = size === 'large' ? AA_LARGE : AA_NORMAL;
  return {
    aa: ratio >= aa,
    aaGrande: ratio >= AA_LARGE,
    aaa: ratio >= AAA_NORMAL,
    veredicto: ratio >= AA_NORMAL ? 'AA' : ratio >= AA_LARGE ? 'Solo texto grande' : 'No cumple',
  };
}
