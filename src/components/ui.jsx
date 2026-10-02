import { Link } from 'react-router-dom';

export function Button({
  to,
  href,
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const base = 'btn';
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
  };
  const cls = `${base} ${variants[variant] || ''} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}

export function Container({ children, className = '' }) {
  return <div className={`container-page ${className}`}>{children}</div>;
}

export function Section({ children, alt = false, className = '', id }) {
  return (
    <section
      id={id}
      className={`section ${alt ? 'section-alt' : ''} ${className}`}
    >
      {children}
    </section>
  );
}
