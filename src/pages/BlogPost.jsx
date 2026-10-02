import { Link, useParams } from 'react-router-dom';
import { site } from '../data/site.js';
import { blogPosts } from '../data/blog.js';
import { Button, Container } from '../components/ui.jsx';

// ⚠️ El cuerpo del artículo es texto genérico idéntico para los 9 posts.
// Antes de publicar: escribir el contenido real de cada uno, o dejar el blog
// apagado. Si un paciente entra a 9 artículos y todos dicen lo mismo, el blog
// resta credibilidad en vez de sumarla.
export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-3xl font-display font-semibold text-brand mb-4">
          Artículo no encontrado
        </h1>
        <Link to="/blog" className="text-brand font-semibold no-underline">
          ← Volver al blog
        </Link>
      </Container>
    );
  }

  return (
    <article className="py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="text-sm font-semibold text-brand no-underline mb-6 inline-block hover:text-secondary"
          >
            ← Volver al blog
          </Link>

          <span className="eyebrow mb-4">{post.category}</span>
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-brand mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-ink-muted mb-10 pb-6 border-b border-brand/10">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">
                person
              </span>
              Por Lic. Yamila Titonel
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">
                schedule
              </span>
              {post.readingTime} de lectura
            </span>
          </div>

          <img
            src={post.image}
            alt={post.title}
            className="w-full aspect-[16/9] object-cover rounded-2xl mb-10"
          />

          <div className="prose prose-lg max-w-none text-ink-body leading-relaxed">
            <p className="text-lg mb-6">{post.excerpt}</p>
            <p className="mb-6">
              En el ámbito de la nutrición, los mitos y las modas suelen
              generar confusión y frustración. Mi objetivo es brindarte
              información clara y basada en evidencia para que puedas tomar
              decisiones informadas sobre tu alimentación.
            </p>
            <p className="mb-6">
              Si querés profundizar en este tema aplicado a tu propia
              situación, podés agendar una consulta personalizada.
            </p>

            <blockquote className="border-l-4 border-brand bg-surface-alt p-6 my-8 italic text-brand font-display text-xl">
              "La mejor dieta es la que podés sostener en el tiempo sin
              sacrificar tu salud mental ni tu vida social."
            </blockquote>

            <p className="mb-6">
              Recordá que cada persona es única y que lo que funciona para una
              puede no funcionar para otra. La personalización es clave en
              nutrición.
            </p>
          </div>

          <div className="mt-12 p-8 bg-surface-alt rounded-2xl text-center">
            <h3 className="text-xl font-display font-semibold text-brand mb-3">
              ¿Querés trabajar estos temas en tu proceso?
            </h3>
            <p className="text-ink-body mb-6">
              Agenda tu consulta inicial y empecemos a construir hábitos
              sostenibles.
            </p>
            <Button
              href={site.docturno}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Turno
            </Button>
          </div>
        </div>
      </Container>
    </article>
  );
}
