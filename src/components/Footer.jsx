import { Link } from 'react-router-dom';
import { nav, site } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="bg-surface-alt pt-20 pb-10 mt-20">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl text-brand mb-4">
              Lic. Yamila Andrea Titonel
            </h3>
            <p className="text-sm text-ink-body mb-6">
              Nutricionyat • Nutrición clínica integrativa y hábitos conscientes.
              Alimentación real y sostenible adaptada a tu vida cotidiana.
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold bg-surface-white px-4 py-1.5 rounded-full w-fit text-brand">
                Lic. en Nutrición • Nutricionyat
              </span>
              {/* TODO(CONTENIDO): agregar matrícula nacional y provincial (M.N. / M.P.).
                  El brief lo pide y hoy no figura en ningún lado del sitio. */}
              <span className="text-xs text-ink-muted">
                Planes personalizados · Presencial & Online
              </span>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-semibold text-brand mb-6">Navegación</h4>
            <ul className="flex flex-col gap-3 list-none">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-ink-body no-underline hover:text-brand transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Modalidades */}
          <div>
            <h4 className="font-semibold text-brand mb-6">Modalidades</h4>
            <div className="flex flex-col gap-4">
              <div className="bg-surface-white p-4 rounded-xl shadow-soft">
                <span className="text-xs font-semibold text-brand block mb-1">
                  Presencial
                </span>
                <p className="text-xs text-ink-body">
                  Consultorio médico con turnos gestionados en cartilla online
                  DrApp.
                </p>
              </div>
              <div className="bg-surface-white p-4 rounded-xl shadow-soft">
                <span className="text-xs font-semibold text-brand block mb-1">
                  Online
                </span>
                <p className="text-xs text-ink-body">
                  Videoconsultas personalizadas para pacientes de todo el país y
                  el exterior.
                </p>
              </div>
            </div>
          </div>

          {/* Canales */}
          <div>
            <h4 className="font-semibold text-brand mb-6">Canales de Turno</h4>
            <div className="flex flex-col gap-4">
              <a
                href={site.docturno}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold py-3 px-4 rounded-lg no-underline hover:bg-brand-hover transition-colors w-fit"
              >
                <span className="material-symbols-outlined text-base">
                  calendar_month
                </span>
                Agenda en Docturno
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-body hover:text-brand transition-colors flex items-center gap-2 no-underline"
              >
                <span className="material-symbols-outlined text-base">
                  photo_camera
                </span>
                Instagram: @nutricionyat
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-body hover:text-brand transition-colors flex items-center gap-2 no-underline"
              >
                <span className="material-symbols-outlined text-base">
                  work
                </span>
                Yamila Andrea Titonel
              </a>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="bg-surface-muted p-6 rounded-xl mb-10">
          <p className="text-xs text-ink-muted leading-relaxed">
            <strong className="text-brand font-semibold">
              Aviso Médico & Ético Legal:
            </strong>{' '}
            La información contenida en este sitio web y los recursos educativos
            ofrecidos tienen carácter informativo y de educación para la salud. No
            sustituyen el diagnóstico, asesoramiento o tratamiento médico
            personalizado ni constituyen una prescripción terapéutica directa sin
            evaluación previa en consulta clínica. Cada tratamiento nutricional
            requiere una historia clínica exhaustiva y seguimiento profesional
            específico.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-brand/10 pt-6">
          <span className="text-xs text-ink-body">
            © {new Date().getFullYear()} Lic. Yamila Titonel (Nutricionyat).
            Todos los derechos reservados.
          </span>
          {/* TODO(LEGAL): estas tres páginas no existen todavía.
              El brief pide aviso legal, política de privacidad y consentimiento
              informado. Hoy los links no llevan a ningún lado (href="#"). */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-ink-muted hover:text-brand no-underline">
              Política de Privacidad
            </a>
            <a href="#" className="text-xs text-ink-muted hover:text-brand no-underline">
              Términos de Servicio
            </a>
            <a href="#" className="text-xs text-ink-muted hover:text-brand no-underline">
              Consentimiento Informado
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
