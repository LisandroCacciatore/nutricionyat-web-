import { Container, Section, Button } from '../components/ui.jsx';

export default function Approach() {
  return (
    <>
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="eyebrow mb-4">Mi Enfoque</span>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-brand mb-6">
              Nutrición real, sin extremos ni culpas
            </h1>
            <p className="text-lg text-ink-body">
              Mi trabajo se basa en la educación alimentaria, la flexibilidad y
              el respeto por tu cuerpo. No creo en las dietas restrictivas, sino
              en construir hábitos que puedas sostener toda la vida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-surface-alt p-8 rounded-3xl">
              <span className="material-symbols-outlined text-brand text-4xl mb-4">
                psychology
              </span>
              <h3 className="text-xl font-semibold text-brand mb-3">
                Sin Prohibiciones
              </h3>
              <p className="text-ink-body text-sm">
                Aprender a comer de todo, regular las porciones y entender que
                ningún alimento es "malo". La clave está en el equilibrio y la
                frecuencia, no en la restricción.
              </p>
            </div>
            <div className="bg-surface-alt p-8 rounded-3xl">
              <span className="material-symbols-outlined text-brand text-4xl mb-4">
                favorite
              </span>
              <h3 className="text-xl font-semibold text-brand mb-3">
                Salud Digestiva
              </h3>
              <p className="text-ink-body text-sm">
                Mejorar tu digestión, energía y relación con la comida.
                Identificar intolerancias reales y trabajar sobre la microbiota
                para que te sientas liviana y vital.
              </p>
            </div>
            <div className="bg-surface-alt p-8 rounded-3xl">
              <span className="material-symbols-outlined text-brand text-4xl mb-4">
                tune
              </span>
              <h3 className="text-xl font-semibold text-brand mb-3">
                Plan a tu Medida
              </h3>
              <p className="text-ink-body text-sm">
                Adaptado a tus tiempos, gustos, economía y estilo de vida. La
                nutrición debe ser aplicable a tu realidad, no una carga más.
              </p>
            </div>
            <div className="bg-surface-alt p-8 rounded-3xl">
              <span className="material-symbols-outlined text-brand text-4xl mb-4">
                fitness_center
              </span>
              <h3 className="text-xl font-semibold text-brand mb-3">
                Composición Corporal
              </h3>
              <p className="text-ink-body text-sm">
                Optimizar tu energía y rendimiento físico de forma progresiva.
                Sin efecto rebote, sin pasar hambre y con resultados sostenibles
                en el tiempo.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button
              href="https://6aac69026fc205a9.cartilla.drapp.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agenda tu primera consulta
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
