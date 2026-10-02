import { Link } from 'react-router-dom';
import { site, pillars, plans, testimonials, faqs } from '../data/site.js';
import { Button, Container, Section } from '../components/ui.jsx';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* HERO */}
      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow mb-4">
                Nutrición Clínica & Hábitos Conscientes · @nutricionyat
              </span>
              <h1 className="text-4xl md:text-[56px] font-display font-semibold text-brand leading-[1.1] mb-6">
                Alimentación real y sostenible:{' '}
                <span className="italic font-normal text-secondary">
                  transformá tus hábitos
                </span>{' '}
                sin restricciones ni culpas.
              </h1>
              <p className="text-lg text-ink-body mb-8 max-w-xl">
                Acompañamiento nutricional personalizado basado en evidencia.
                Aprendé a nutrir tu cuerpo con comidas ricas, equilibradas y
                adaptadas a tu rutina real. Presencial y Online.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href={site.docturno} target="_blank" rel="noopener noreferrer">
                  Solicitar Turno en Docturno
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </Button>
                <Button to="/enfoque" variant="secondary">
                  Conocé mi Enfoque
                </Button>
              </div>
              {/* Cifra de muestra del mock. Al contratar, poner la real. */}
              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-brand/10 mt-10">
                <div>
                  <span className="text-2xl font-display font-semibold text-brand block">
                    +1.200
                  </span>
                  <span className="text-sm text-ink-body">
                    Pacientes acompañados
                  </span>
                </div>
                <div>
                  <span className="text-2xl font-display font-semibold text-brand block">
                    100%
                  </span>
                  <span className="text-sm text-ink-body">
                    Planes personalizados
                  </span>
                </div>
                <div>
                  <span className="text-2xl font-display font-semibold text-brand block">
                    Presencial & Online
                  </span>
                  <span className="text-sm text-ink-body">
                    Atención clínica integral
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-3 bg-brand-soft/50 rounded-2xl -rotate-1 pointer-events-none" />
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl p-3">
                  {/* TODO(CONTENIDO): foto real de Yamila en 4:5 (vertical). */}
                  <img
                    src="https://picsum.photos/seed/nutricionista/800/1000"
                    alt="Lic. Yamila Titonel en su consultorio"
                    className="w-full aspect-[4/5] object-cover rounded-xl"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl flex items-center justify-between shadow-md">
                    <div>
                      <span className="text-sm font-bold text-brand block">
                        Lic. Yamila Titonel
                      </span>
                      <span className="text-xs text-ink-body">
                        Nutricionista • Nutricionyat
                      </span>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-brand-soft flex items-center justify-center text-brand">
                      <span className="material-symbols-outlined text-sm">
                        verified
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PILARES */}
      <Section alt id="enfoque">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow mb-2">Metodología de Acompañamiento</span>
              <h2 className="text-3xl md:text-[40px] font-display font-semibold text-brand">
                Pilares para una nutrición equilibrada y duradera
              </h2>
            </div>
            <p className="text-ink-body max-w-md">
              Un enfoque cercano, educativo y práctico que te enseña a construir
              hábitos sólidos sin prohibiciones ni dietas temporales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div
                key={p.num}
                className="bg-white p-8 rounded-2xl flex flex-col justify-between shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-3xl text-secondary/40">
                      {p.num}
                    </span>
                    <span className="w-10 h-10 rounded-full bg-brand-soft flex items-center justify-center text-brand">
                      <span className="material-symbols-outlined">
                        {p.icon}
                      </span>
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-brand mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink-body mb-6">{p.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold bg-surface-alt px-3 py-1 rounded-full text-ink-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* BANNER QUOTE */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="relative rounded-3xl overflow-hidden shadow-xl bg-brand text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[440px]">
              <div className="lg:col-span-7 relative h-72 lg:h-auto">
                {/* TODO(CONTENIDO): foto real de un plato / comida casera. */}
                <img
                  src="https://picsum.photos/seed/mediterranean/1200/800"
                  alt="Comida saludable"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand/80 hidden lg:block" />
              </div>
              <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center">
                <div className="w-12 h-1 bg-brand-soft mb-8 rounded-full" />
                <blockquote className="text-2xl font-display leading-relaxed mb-8 text-surface">
                  “Comer sano no tiene por qué ser aburrido ni prohibitivo; se
                  trata de construir{' '}
                  <span className="italic text-brand-soft">
                    hábitos que puedas sostener para siempre
                  </span>{' '}
                  y disfrutar en el camino.”
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-brand-hover flex items-center justify-center text-brand-soft">
                      <span className="material-symbols-outlined">spa</span>
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white">
                        Lic. Yamila Titonel
                      </p>
                      <p className="text-xs text-white/70">
                        Nutrición Integral • @nutricionyat
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PLANES */}
      <Section id="planes">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow mb-2">Modalidades & Planes Clínicos</span>
            <h2 className="text-3xl md:text-[40px] font-display font-semibold text-brand mb-4">
              Opciones diseñadas para tu momento actual
            </h2>
            <p className="text-ink-body">
              Elegí la modalidad que mejor se adapte a tus necesidades de
              tiempo, localización y profundidad terapéutica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 flex flex-col justify-between ${
                  plan.highlighted
                    ? 'bg-brand text-white shadow-xl relative md:-translate-y-2'
                    : 'bg-white shadow-soft hover:shadow-lg'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-soft text-brand text-[11px] font-semibold uppercase px-4 py-1 rounded-full shadow-sm">
                    {plan.badge}
                  </div>
                )}
                <div>
                  <div className="flex items-center justify-between mb-6 pt-2">
                    <span
                      className={`text-[11px] font-semibold px-3 py-1 rounded-full ${
                        plan.highlighted
                          ? 'bg-brand-hover text-brand-soft'
                          : 'bg-surface-alt text-brand'
                      }`}
                    >
                      {plan.tag}
                    </span>
                    <span
                      className={`material-symbols-outlined ${
                        plan.highlighted ? 'text-brand-soft' : 'text-secondary'
                      }`}
                    >
                      {plan.icon}
                    </span>
                  </div>
                  <h3
                    className={`text-xl font-semibold mb-3 ${
                      plan.highlighted ? 'text-white' : 'text-brand'
                    }`}
                  >
                    {plan.title}
                  </h3>
                  <p
                    className={`text-sm mb-6 ${
                      plan.highlighted ? 'text-white/80' : 'text-ink-body'
                    }`}
                  >
                    {plan.description}
                  </p>
                  <ul className="flex flex-col gap-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <span
                          className={`material-symbols-outlined text-base mt-0.5 ${
                            plan.highlighted ? 'text-brand-soft' : 'text-brand'
                          }`}
                        >
                          check_circle
                        </span>
                        <span
                          className={
                            plan.highlighted ? 'text-white' : 'text-ink-body'
                          }
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  href={site.docturno}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={plan.highlighted ? 'accent' : 'secondary'}
                  className={`w-full ${
                    plan.highlighted
                      ? '!bg-white !text-brand hover:!bg-brand-soft'
                      : '!bg-surface-alt hover:!bg-brand hover:!text-white'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* TESTIMONIOS */}
      <Section alt id="testimonios">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="eyebrow mb-2">Experiencias Clínicas Reales</span>
            <h2 className="text-3xl md:text-[40px] font-display font-semibold text-brand">
              Historias de transformación sin extremos
            </h2>
          </div>
          {/* Testimonios de muestra del mock. Al contratar: reales con autorización,
              o se quita esta sección (y el eyebrow "Experiencias Clínicas Reales"). */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white p-8 rounded-2xl shadow-soft flex flex-col justify-between"
              >
                <span className="font-display text-5xl text-secondary/30 leading-none mb-4">
                  "
                </span>
                <p className="text-ink-body italic mb-8">{t.quote}</p>
                <div className="flex items-center gap-4 pt-4 border-t border-brand/10">
                  <div className="w-12 h-12 rounded-full bg-brand-soft flex items-center justify-center font-bold text-brand">
                    {t.initials}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-brand block">
                      {t.name}
                    </span>
                    <span className="text-xs text-ink-body">{t.detail}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="mb-10">
                <span className="eyebrow mb-2">Dudas Habituales</span>
                <h2 className="text-3xl md:text-[40px] font-display font-semibold text-brand">
                  Preguntas Frecuentes
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-soft overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      aria-expanded={openFaq === index}
                      className="w-full px-6 py-5 text-left flex items-center justify-between text-brand font-semibold focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <span
                        className={`material-symbols-outlined text-secondary transition-transform duration-300 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      >
                        expand_more
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6 text-sm text-ink-body border-t border-brand/5 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-surface-alt rounded-2xl p-8 flex flex-col justify-between shadow-md">
              <div>
                <div className="w-12 h-12 rounded-full bg-brand-soft flex items-center justify-center text-brand mb-6">
                  <span className="material-symbols-outlined text-2xl">
                    calendar_month
                  </span>
                </div>
                <h3 className="text-2xl font-display font-semibold text-brand mb-4">
                  Comenzá hoy tu proceso de cambio
                </h3>
                <p className="text-ink-body mb-8">
                  Tu camino hacia una relación de tranquilidad y disfrute con la
                  comida empieza hoy. Elegí tu día y horario disponible
                  directamente en nuestra agenda online.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  href={site.docturno}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center"
                >
                  Solicitar Turno en Docturno
                  <span className="material-symbols-outlined text-base">
                    east
                  </span>
                </Button>
                <Button
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="w-full justify-center !bg-white hover:!bg-brand-soft"
                >
                  <span className="material-symbols-outlined text-base">
                    photo_camera
                  </span>
                  Mensaje en Instagram @nutricionyat
                </Button>
                <span className="text-xs text-ink-body text-center mt-2">
                  Atención Presencial & Consultas Online
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
