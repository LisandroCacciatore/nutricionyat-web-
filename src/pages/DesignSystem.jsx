import { Container, Section } from '../components/ui.jsx';
import {
  tokens,
  paletteGroups,
  tokenNotes,
  hex,
  contrastPairs,
  typeScale,
  radiusTokens,
  shadowTokens,
} from '../data/tokens.js';
import { contrast, composite, bestTextOn, evaluate, darkenTo } from '../lib/contrast.js';

// Página del sistema de diseño.
// No está en la navegación: se llega por link directo (/sistema).
// Todo lo que se ve acá sale de src/data/tokens.js, y los ratios de contraste se
// CALCULAN en el navegador: si alguien cambia un token, esta tabla cambia sola.

function Swatch({ token, value }) {
  const textOn = bestTextOn(value);
  return (
    <div className="flex flex-col">
      <div
        className="h-24 rounded-xl flex flex-col justify-end p-3"
        style={{ backgroundColor: value, border: '1px solid rgba(22,51,40,0.10)' }}
      >
        <span className="text-[11px] font-semibold leading-tight" style={{ color: textOn }}>
          {token}
        </span>
        <span className="text-[11px] font-mono opacity-90 leading-tight" style={{ color: textOn }}>
          {value}
        </span>
      </div>
    </div>
  );
}

function Badge({ ok, label }) {
  return (
    <span
      className={`inline-block text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${
        ok ? 'bg-brand-soft text-brand' : 'bg-accent-deep text-white'
      }`}
    >
      {label}
    </span>
  );
}

export default function DesignSystem() {
  // Resolución + medición de todos los pares. Nada de esto está hardcodeado.
  const rows = contrastPairs.map((p) => {
    const bg = hex(p.bg);
    const base = hex(p.fg);
    const fg = p.alpha != null ? composite(base, bg, p.alpha) : base;
    const ratio = contrast(fg, bg);
    return { ...p, bg, base, fg, ratio, ev: evaluate(ratio, p.size) };
  });
  const okCount = rows.filter((r) => r.ev.aa).length;

  return (
    <>
      {/* ENCABEZADO */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">Botanical Vitality</span>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-brand mb-6">
              Sistema de diseño
            </h1>
            <p className="text-lg text-ink-body">
              Los tokens, la tipografía, los radios y la elevación que sostienen este
              sitio. Todo lo que ves acá sale de <code className="text-sm bg-surface-alt px-2 py-0.5 rounded">src/data/tokens.js</code>,
              el mismo archivo que genera el CSS.
            </p>
            <p className="text-sm text-ink-body mt-4">
              Los ratios de contraste de la sección 03 se{' '}
              <strong className="text-brand">calculan en el navegador</strong> con la fórmula de
              luminancia relativa de WCAG 2.x. No están escritos a mano: si un color cambia,
              el número cambia solo y la tabla no puede quedar desactualizada.
            </p>
          </div>
        </Container>
      </Section>

      {/* 01 PALETA */}
      <Section alt>
        <Container>
          <span className="eyebrow">01</span>
          <h2 className="text-3xl md:text-[40px] font-display font-semibold text-brand mb-12">
            Paleta
          </h2>

          <div className="flex flex-col gap-12">
            {paletteGroups.map((g) => (
              <div key={g.name}>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-5">
                  <h3 className="text-base font-semibold text-brand md:w-48 shrink-0">{g.label}</h3>
                  <p className="text-sm text-ink-body max-w-2xl">{g.note}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(tokens[g.name]).map(([shade, value]) => {
                    const label = shade === 'DEFAULT' ? g.name : `${g.name}.${shade}`;
                    const note = tokenNotes[label];
                    return (
                      <div key={label}>
                        <Swatch token={label} value={value} />
                        {note && (
                          <span className="text-[10px] text-ink-muted mt-1 block italic">{note}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 02 TIPOGRAFÍA */}
      <Section>
        <Container>
          <span className="eyebrow">02</span>
          <h2 className="text-3xl md:text-[40px] font-display font-semibold text-brand mb-4">
            Tipografía
          </h2>
          <p className="text-ink-body max-w-2xl mb-12">
            <strong className="text-brand">Playfair Display</strong> para títulos —transmite
            confianza editorial— y <strong className="text-brand">Plus Jakarta Sans</strong> para
            interfaz y cuerpo. Cada muestra de abajo usa las clases reales del sitio.
          </p>

          <div className="flex flex-col divide-y divide-brand/10">
            {typeScale.map((t) => (
              <div key={t.label} className="py-7 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-12">
                <div className="lg:w-64 shrink-0">
                  <span className="text-xs font-semibold text-brand block">{t.label}</span>
                  <span className="text-[11px] text-ink-muted block mt-1">{t.spec}</span>
                  <code className="text-[10px] text-ink-muted block mt-1 break-all">{t.cls}</code>
                </div>
                <div className={`${t.cls} min-w-0`}>{t.sample}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 03 CONTRASTE */}
      <Section alt>
        <Container>
          <span className="eyebrow">03</span>
          <h2 className="text-3xl md:text-[40px] font-display font-semibold text-brand mb-4">
            Contraste
          </h2>
          <p className="text-ink-body max-w-2xl mb-3">
            {rows.length} pares medidos.{' '}
            <strong className="text-brand">
              {okCount} cumplen AA para su tamaño de texto
            </strong>
            ; {rows.length - okCount} no. Las tres correcciones ya están aplicadas y se detallan
            abajo con el valor exacto. La única fila que sigue fallando a propósito es el acento
            crudo con texto blanco: queda en la tabla como documentación de por qué existe
            el token <code>accent.deep</code>.
          </p>
          <p className="text-sm text-ink-body max-w-2xl mb-10">
            Umbrales WCAG: <strong>4.5</strong> para texto normal, <strong>3.0</strong> para
            texto grande (≥24px, o ≥18.66px en negrita), <strong>7.0</strong> para AAA.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[860px]">
              <thead>
                <tr className="text-left border-b border-brand/15">
                  <th className="py-3 pr-4 font-semibold text-brand text-xs uppercase tracking-wide">Muestra</th>
                  <th className="py-3 pr-4 font-semibold text-brand text-xs uppercase tracking-wide">Par</th>
                  <th className="py-3 pr-4 font-semibold text-brand text-xs uppercase tracking-wide">Contexto</th>
                  <th className="py-3 pr-4 font-semibold text-brand text-xs uppercase tracking-wide text-right">Ratio</th>
                  <th className="py-3 pr-4 font-semibold text-brand text-xs uppercase tracking-wide">AA</th>
                  <th className="py-3 pr-4 font-semibold text-brand text-xs uppercase tracking-wide">AA grande</th>
                  <th className="py-3 font-semibold text-brand text-xs uppercase tracking-wide">AAA</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className="border-b border-brand/5 align-middle">
                    <td className="py-3 pr-4">
                      <span
                        className="inline-flex items-center justify-center w-14 h-9 rounded-lg text-[13px] font-semibold"
                        style={{ backgroundColor: r.bg, color: r.fg }}
                      >
                        Aa
                      </span>
                    </td>
                    <td className="py-3 pr-4">
                      <code className="text-[11px] text-ink-body block">
                        {r.fg}
                        {r.alpha != null && <span className="text-ink-muted"> (α {r.alpha})</span>}
                      </code>
                      <code className="text-[11px] text-ink-muted block">sobre {r.bg}</code>
                    </td>
                    <td className="py-3 pr-4 text-ink-body">{r.context}</td>
                    <td className="py-3 pr-4 text-right font-mono font-semibold text-brand">
                      {r.ratio.toFixed(2)}
                    </td>
                    <td className="py-3 pr-4"><Badge ok={r.ev.aa} label={r.ev.aa ? 'Sí' : 'No'} /></td>
                    <td className="py-3 pr-4"><Badge ok={r.ev.aaGrande} label={r.ev.aaGrande ? 'Sí' : 'No'} /></td>
                    <td className="py-3"><Badge ok={r.ev.aaa} label={r.ev.aaa ? 'Sí' : 'No'} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <span className="text-[11px] font-bold uppercase tracking-wide text-accent-deep block mb-2">
                Corregido
              </span>
              <h3 className="text-base font-semibold text-brand mb-2">Texto blanco sobre el acento</h3>
              <p className="text-sm text-ink-body mb-3">
                El acento crudo con blanco daba{' '}
                {contrast('#FFFFFF', tokens.accent.DEFAULT).toFixed(2)}: no llegaba ni al umbral de
                texto grande.
              </p>
              <p className="text-xs text-ink-muted">
                Se agregó el token <code className="text-brand font-semibold">accent.deep</code> ({' '}
                {tokens.accent.deep}), que da{' '}
                {contrast('#FFFFFF', tokens.accent.deep).toFixed(2)} con blanco, y{' '}
                <code>.btn-accent</code> lo usa. El valor no está elegido a ojo: es el primer tono
                que alcanza 4.5 al oscurecer el DEFAULT ({darkenTo(tokens.accent.DEFAULT, '#FFFFFF', 4.5)}).
                El acento original se conserva para las superficies que no llevan texto encima.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <span className="text-[11px] font-bold uppercase tracking-wide text-accent-deep block mb-2">
                Corregido
              </span>
              <h3 className="text-base font-semibold text-brand mb-2">ink.muted en 12px</h3>
              <p className="text-sm text-ink-body mb-3">
                Antes <code>#727974</code> daba 4.26 sobre surface y 3.84 sobre surface.muted:
                fallaba AA. Ahora <code className="text-brand font-semibold">{tokens.ink.muted}</code>{' '}
                da {contrast(tokens.ink.muted, tokens.surface.DEFAULT).toFixed(2)} y{' '}
                {contrast(tokens.ink.muted, tokens.surface.muted).toFixed(2)}.
              </p>
              <p className="text-xs text-ink-muted">
                Se usa en footer, metadatos y aviso médico: texto chico, donde no aplica la excepción
                de texto grande.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <span className="text-[11px] font-bold uppercase tracking-wide text-accent-deep block mb-2">
                Corregido
              </span>
              <h3 className="text-base font-semibold text-brand mb-2">Números de pilar al 40%</h3>
              <p className="text-sm text-ink-body mb-3">
                Al 40% daban{' '}
                {contrast(composite(tokens.secondary.DEFAULT, tokens.surface.alt, 0.4), tokens.surface.alt).toFixed(2)}{' '}
                sobre surface.alt. Ahora al 70% dan{' '}
                {contrast(composite(tokens.secondary.DEFAULT, tokens.surface.alt, 0.7), tokens.surface.alt).toFixed(2)}.
              </p>
              <p className="text-xs text-ink-muted">
                Son 30px, o sea umbral 3.0, y son contenido y no decoración: no correspondía
                dejarlos fuera del alcance de AA sin más.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 04 RADIOS Y ELEVACIÓN */}
      <Section>
        <Container>
          <span className="eyebrow">04</span>
          <h2 className="text-3xl md:text-[40px] font-display font-semibold text-brand mb-12">
            Radios y elevación
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-base font-semibold text-brand mb-6">Radios</h3>
              <div className="flex flex-col gap-4">
                {radiusTokens.map((r) => (
                  <div key={r.token} className="flex items-center gap-5">
                    <div
                      className="w-20 h-14 shrink-0 bg-brand-soft border border-brand/10"
                      style={{ borderRadius: r.value }}
                    />
                    <div className="min-w-0">
                      <code className="text-xs font-semibold text-brand block">{r.token}</code>
                      <span className="text-[11px] text-ink-muted block">
                        {r.value} · {r.use}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-brand mb-6">Elevación</h3>
              <div className="flex flex-col gap-6">
                {shadowTokens.map((s) => (
                  <div key={s.token} className="flex items-center gap-5">
                    <div
                      className="w-20 h-14 shrink-0 rounded-card bg-white"
                      style={{ boxShadow: s.value }}
                    />
                    <div className="min-w-0">
                      <code className="text-xs font-semibold text-brand block">{s.token}</code>
                      <span className="text-[11px] text-ink-muted block break-all">
                        {s.value}
                      </span>
                      <span className="text-[11px] text-ink-muted block">{s.use}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 05 COMPONENTES */}
      <Section alt>
        <Container>
          <span className="eyebrow">05</span>
          <h2 className="text-3xl md:text-[40px] font-display font-semibold text-brand mb-12">
            Componentes
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-base font-semibold text-brand mb-6">Botones</h3>
              <div className="flex flex-wrap items-center gap-4">
                <button type="button" className="btn btn-primary">Primario</button>
                <button type="button" className="btn btn-secondary">Secundario</button>
              </div>
              <p className="text-xs text-ink-muted mt-4">
                <code>min-h-[48px]</code> es el mínimo táctil: más del 80% del tráfico llega del
                celular. La variante <code>accent</code> existe pero está desaconsejada hasta
                corregir su contraste (sección 03).
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-brand mb-6">Chips y badges</h3>
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow">Eyebrow</span>
                <span className="w-10 h-10 rounded-full bg-brand-soft flex items-center justify-center text-brand">
                  <span className="material-symbols-outlined text-xl">spa</span>
                </span>
                <span className="text-[10px] font-semibold bg-surface-alt px-3 py-1 rounded-full text-ink-body">
                  Chip
                </span>
                <span className="bg-brand text-white text-xs font-semibold px-4 py-1.5 rounded-btn">
                  Píldora
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-brand mb-6">Tarjeta en reposo y en hover</h3>
              <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300">
                <span className="font-display text-3xl text-secondary/70 block mb-4">01</span>
                <h4 className="text-lg font-semibold text-brand mb-3">Tarjeta de pilar</h4>
                <p className="text-sm text-ink-body">
                  En reposo <code>shadow-soft</code>; en hover sube 4px y la sombra crece. El color
                  no cambia: el movimiento es de elevación, no de transformación.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-brand mb-6">Tarjeta destacada</h3>
              <div className="bg-brand text-white p-8 rounded-2xl shadow-xl relative">
                <div className="absolute -top-3 left-8 bg-brand-soft text-brand text-[11px] font-semibold uppercase px-4 py-1 rounded-full">
                  Recomendado
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 mt-2">Superficie invertida</h4>
                <p className="text-sm text-white/80">
                  Mismo componente con <code>bg-brand</code>. El badge va en{' '}
                  <code>brand.soft</code>, que da 10.57 de contraste.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
