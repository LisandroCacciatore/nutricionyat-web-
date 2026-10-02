import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { blogPosts } from '../data/blog.js';
import { Container, Section } from '../components/ui.jsx';

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'Mitos Nutricionales', label: 'Hábitos & Mitos' },
  { id: 'Recetas Prácticas', label: 'Recetas Fáciles' },
  { id: 'Salud Digestiva', label: 'Salud Digestiva' },
  { id: 'Organización', label: 'Organización Semanal' },
];

export default function Blog() {
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(
    () =>
      filter === 'all'
        ? blogPosts
        : blogPosts.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <>
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mb-10">
            <span className="eyebrow mb-4">Educación & Hábitos Saludables</span>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-brand mb-6">
              Artículos, Recetas y Mitos de Nutrición
            </h1>
            <p className="text-lg text-ink-body">
              Información basada en evidencia científica explicada simple para
              tu día a día. Aprendé a nutrirte sin obsesiones ni culpas.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((c) => {
              const active = filter === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setFilter(c.id)}
                  aria-pressed={active}
                  className={`px-5 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    active
                      ? 'bg-brand text-white shadow-sm'
                      : 'bg-surface-alt text-ink-body hover:bg-brand-soft'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section alt>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-soft flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover"
                  />
                </Link>
                <div className="p-6 flex flex-col grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold bg-surface-alt text-brand px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-ink-body flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        schedule
                      </span>
                      {post.readingTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-brand mb-3 leading-snug">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-brand no-underline hover:text-secondary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-ink-body grow mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-brand/10">
                    <span className="text-xs text-ink-muted">
                      Actualizado 2026
                    </span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-xs font-semibold text-brand inline-flex items-center gap-1 no-underline hover:text-secondary"
                    >
                      Leer artículo
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
