import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { nav, site } from '../data/site.js';
import { Button } from './ui.jsx';
import MobileMenu from './MobileMenu.jsx';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // Escape cierra el menú y devuelve el foco al botón que lo abrió.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        document.getElementById('btn-menu-mobile')?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-surface/85 backdrop-blur-xl border-b border-brand/10">
      <div className="container-page flex items-center justify-between h-20">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3 no-underline"
          aria-label={`${site.name} - Nutrición Integral`}
        >
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold text-brand leading-tight tracking-tight font-display">
              Lic. Yamila Titonel
            </span>
            {/* La segunda línea se oculta en pantallas chicas para dejar aire al CTA. */}
            <span className="hidden sm:block text-[10px] uppercase tracking-widest text-secondary font-semibold">
              Nutricionyat • Nutrición Integral
            </span>
          </div>
        </Link>

        {/* Navegación completa: solo desde xl. Abajo de eso manda el menú hamburguesa. */}
        <nav aria-label="Navegación principal" className="hidden xl:block">
          <ul className="flex items-center gap-8 list-none">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `text-[14px] font-semibold no-underline transition-colors py-2 ${
                      isActive
                        ? 'text-brand border-b-2 border-secondary'
                        : 'text-ink-body hover:text-brand'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* El CTA de agendar tiene que estar SIEMPRE visible: en pantallas chicas
              va con la etiqueta corta, no oculto. min-h-[48px] lo hereda de `.btn`. */}
          <Button
            href={site.docturno}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="!px-4 !text-[12px] sm:!px-6 sm:!py-2.5 sm:!text-[13px]"
          >
            <span className="sm:hidden">Turno</span>
            <span className="hidden sm:inline">Solicitar Turno</span>
          </Button>

          <button
            type="button"
            id="btn-menu-mobile"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            className="xl:hidden w-12 h-12 shrink-0 flex items-center justify-center rounded-btn text-brand border-[1.5px] border-brand/20 hover:bg-brand/5 transition-colors cursor-pointer bg-transparent"
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>

          {/* El avatar es placeholder y en mobile compite con el CTA: se oculta. */}
          <img
            src="https://picsum.photos/seed/doctor/100/100"
            alt="Lic. Yamila Titonel"
            className="hidden sm:block w-9 h-9 rounded-full object-cover ring-2 ring-brand-soft"
          />
        </div>
      </div>

      <MobileMenu open={menuOpen} onNavigate={closeMenu} />
    </header>
  );
}
