import { NavLink } from 'react-router-dom';
import { nav } from '../data/site.js';

/**
 * Panel de navegación para mobile.
 *
 * Existe porque el Navbar completo está oculto hasta `xl` (1280px): sin esto, en un
 * celular los links del menú solo aparecían en el footer, al final de la página. Y más
 * del 80% del tráfico llega desde Instagram, o sea desde el teléfono.
 *
 * Recibe `open` por prop (en lugar de manejar su propio estado) para poder renderizarse
 * y verificarse de forma aislada: un render de servidor normal no puede abrir un estado
 * interno, pero sí puede renderizar este panel con `open`.
 */
export default function MobileMenu({ open, onNavigate = () => {} }) {
  if (!open) return null;

  return (
    <div
      id="menu-mobile"
      className="xl:hidden border-t border-brand/10 bg-surface-white shadow-soft"
    >
      <nav aria-label="Navegación mobile" className="container-page py-1">
        <ul className="list-none">
          {nav.map((item) => (
            <li key={item.to} className="border-b border-brand/5 last:border-b-0">
              <NavLink
                to={item.to}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `flex items-center min-h-[56px] text-base font-semibold no-underline transition-colors ${
                    isActive ? 'text-brand' : 'text-ink-body hover:text-brand'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
