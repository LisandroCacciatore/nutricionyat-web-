import { useState } from 'react';
import { Container, Section, Button } from '../components/ui.jsx';
import { site } from '../data/site.js';

// ⚠️ El formulario NO envía nada: handleSubmit solo cambia el estado local y
// muestra el mensaje de agradecimiento. No hay backend, webhook ni servicio de
// formularios conectado.
// Pendiente: decidir destino (webhook de n8n, Formspree, Netlify Forms) y
// agregar el checkbox de consentimiento de datos, que hoy no existe.
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO(FUNCIONALIDAD): reemplazar por el POST real al webhook/servicio elegido.
    setSubmitted(true);
  };

  return (
    <>
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow mb-4">Contacto & Turnos</span>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-brand mb-6">
              Comenzá tu proceso hoy
            </h1>
            <p className="text-lg text-ink-body">
              Elegí la modalidad que más te acomode. Podés sacar tu turno online
              en minutos o escribirme directamente.
            </p>
          </div>
        </Container>
      </Section>

      <Section alt>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left: Docturno + Info */}
            <div className="flex flex-col gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-soft">
                <div className="w-12 h-12 rounded-full bg-brand-soft flex items-center justify-center text-brand mb-6">
                  <span className="material-symbols-outlined text-2xl">
                    calendar_month
                  </span>
                </div>
                <h2 className="text-2xl font-display font-semibold text-brand mb-3">
                  Agenda Online en Docturno
                </h2>
                <p className="text-ink-body text-sm mb-6">
                  Elegí el día y horario que mejor te quede. La reserva se
                  confirma al instante y recibís todas las instrucciones por
                  email.
                </p>
                <Button
                  href={site.docturno}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center"
                >
                  Ir a la Agenda de Turnos
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </Button>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-soft">
                <h3 className="text-lg font-semibold text-brand mb-4">
                  Canales Directos
                </h3>
                <div className="flex flex-col gap-4">
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-ink-body no-underline hover:text-brand"
                  >
                    <span className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center text-brand">
                      <span className="material-symbols-outlined">
                        photo_camera
                      </span>
                    </span>
                    <span>
                      Instagram: <strong>@nutricionyat</strong>
                    </span>
                  </a>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-ink-body no-underline hover:text-brand"
                  >
                    <span className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center text-brand">
                      <span className="material-symbols-outlined">work</span>
                    </span>
                    <span>
                      LinkedIn: <strong>Yamila Andrea Titonel</strong>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white p-8 rounded-2xl shadow-soft">
              <h2 className="text-2xl font-display font-semibold text-brand mb-6">
                Enviame un mensaje
              </h2>
              {submitted ? (
                <div className="p-6 bg-brand-soft rounded-xl text-brand text-sm">
                  ¡Gracias por escribirme! Te responderé a la brevedad.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="nombre" className="block text-xs font-semibold text-brand mb-2">
                      Nombre completo
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      name="nombre"
                      required
                      autoComplete="name"
                      value={form.nombre}
                      onChange={handleChange}
                      className="w-full bg-surface-alt text-ink-title px-4 py-3 rounded-lg border border-brand/10 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-brand mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-surface-alt text-ink-title px-4 py-3 rounded-lg border border-brand/10 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-xs font-semibold text-brand mb-2">
                      Teléfono (opcional)
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      name="telefono"
                      autoComplete="tel"
                      value={form.telefono}
                      onChange={handleChange}
                      className="w-full bg-surface-alt text-ink-title px-4 py-3 rounded-lg border border-brand/10 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block text-xs font-semibold text-brand mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      required
                      value={form.mensaje}
                      onChange={handleChange}
                      className="w-full bg-surface-alt text-ink-title px-4 py-3 rounded-lg border border-brand/10 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all resize-y"
                    />
                  </div>
                  {/* TODO(LEGAL): falta el checkbox de consentimiento explícito
                      para el tratamiento de datos de salud. */}
                  <button type="submit" className="btn btn-primary w-full">
                    Enviar mensaje
                    <span className="material-symbols-outlined text-sm">
                      send
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
