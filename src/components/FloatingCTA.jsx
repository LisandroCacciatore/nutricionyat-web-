import { useState } from 'react';
import { site, whatsappUrl } from '../data/site.js';
import { WhatsappIcon } from './icons.jsx';

// Botón flotante de acceso rápido a turnos (el brief lo pide siempre visible).
// Tres canales, en orden de intención: Docturno (reservar), WhatsApp (consulta rápida)
// e Instagram. WhatsApp y no Docturno es el que más convierte en consultas sueltas,
// pero el primario sigue siendo agendar.
export default function FloatingCTA() {
  const [open, setOpen] = useState(false);

  return (
    <aside
      aria-label="Accesos rápidos a turnos"
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end"
    >
      {open && (
        <div
          className="w-[300px] bg-surface-white rounded-2xl shadow-float border border-brand/10 overflow-hidden mb-4"
          style={{ animation: 'floatUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <div className="bg-brand p-5 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-white">
                  calendar_month
                </span>
              </div>
              <div>
                <div className="text-sm font-bold leading-tight">
                  Solicitar Turno
                </div>
                <div className="text-[11px] text-white/80">
                  Presencial & Online
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-3">
            <a
              href={site.docturno}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-brand text-white text-sm font-semibold py-3 rounded-btn no-underline hover:bg-brand-hover transition-colors"
            >
              Agenda en Docturno
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-brand-soft text-brand text-sm font-semibold py-3 rounded-btn no-underline hover:bg-brand/10 transition-colors"
            >
              <WhatsappIcon className="w-4 h-4" />
              Escribime por WhatsApp
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-surface-alt text-brand text-sm font-semibold py-3 rounded-btn no-underline hover:bg-brand-soft transition-colors"
            >
              <span className="material-symbols-outlined text-base">
                photo_camera
              </span>
              Escribir por Instagram
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir opciones de turno"
        aria-expanded={open}
        className="w-14 h-14 bg-brand rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer border-none text-white"
      >
        <span className="material-symbols-outlined text-2xl">
          {open ? 'close' : 'event_available'}
        </span>
      </button>

      <style>{`
        @keyframes floatUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </aside>
  );
}
