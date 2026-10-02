import { plans } from '../data/site.js';
import { Button, Container, Section } from '../components/ui.jsx';

export default function Plans() {
  return (
    <>
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="eyebrow mb-4">Planes y Consultas</span>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-brand mb-6">
              Opciones diseñadas para tu momento actual
            </h1>
            <p className="text-lg text-ink-body">
              Elegí la modalidad que mejor se adapte a tus necesidades de
              tiempo, localización y profundidad terapéutica.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 md:p-10 flex flex-col justify-between ${
                  plan.highlighted
                    ? 'bg-brand text-white shadow-2xl relative lg:-translate-y-4'
                    : 'bg-surface-alt shadow-soft hover:shadow-lg'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-soft text-brand text-xs font-bold uppercase px-5 py-1.5 rounded-full shadow-sm">
                    {plan.badge}
                  </div>
                )}
                <div>
                  <div className="flex items-center justify-between mb-8 pt-2">
                    <span
                      className={`text-[11px] font-semibold px-4 py-1.5 rounded-full ${
                        plan.highlighted
                          ? 'bg-brand-hover text-brand-soft'
                          : 'bg-white text-brand'
                      }`}
                    >
                      {plan.tag}
                    </span>
                    <span
                      className={`material-symbols-outlined text-2xl ${
                        plan.highlighted ? 'text-brand-soft' : 'text-secondary'
                      }`}
                    >
                      {plan.icon}
                    </span>
                  </div>
                  <h2
                    className={`text-2xl font-display font-semibold mb-4 ${
                      plan.highlighted ? 'text-white' : 'text-brand'
                    }`}
                  >
                    {plan.title}
                  </h2>
                  <p
                    className={`mb-8 ${
                      plan.highlighted ? 'text-white/80' : 'text-ink-body'
                    }`}
                  >
                    {plan.description}
                  </p>
                  <ul className="flex flex-col gap-4 mb-10">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
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
                  href="https://6aac69026fc205a9.cartilla.drapp.com.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={plan.highlighted ? 'accent' : 'secondary'}
                  className={`w-full ${
                    plan.highlighted
                      ? '!bg-white !text-brand hover:!bg-brand-soft'
                      : '!bg-white hover:!bg-brand hover:!text-white'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
