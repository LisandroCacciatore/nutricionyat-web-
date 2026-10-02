import { Link, NavLink } from 'react-router-dom';
import { nav, site } from '../data/site.js';
import { Button } from './ui.jsx';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-surface/85 backdrop-blur-xl border-b border-brand/10">
      <div className="container-page flex items-center justify-between h-20">
        <Link
          to="/"
          className="flex items-center gap-3 no-underline"
          aria-label={`${site.name} - Nutrición Integral`}
        >
          <div className="flex flex-col">
            <span className="text-xl font-bold text-brand leading-tight tracking-tight font-display">
              Lic. Yamila Titonel
            </span>
            <span className="text-[10px] uppercase tracking-widest text-secondary font-semibold">
              Nutricionyat • Nutrición Integral
            </span>
          </div>
        </Link>

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

        <div className="flex items-center gap-4">
          <Button
            href={site.docturno}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex !px-6 !py-2.5 !text-[13px]"
          >
            Solicitar Turno
          </Button>
          {/* TODO(CONTENIDO): reemplazar por foto real de Yamila (retrato cuadrado). */}
          <img
            src="https://picsum.photos/seed/doctor/100/100"
            alt="Lic. Yamila Titonel"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-brand-soft"
          />
        </div>
      </div>
    </header>
  );
}
