import { Button, Container } from '../components/ui.jsx';

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-6xl font-display font-bold text-brand mb-4">404</h1>
      <h2 className="text-2xl font-display font-semibold text-brand mb-4">
        Página no encontrada
      </h2>
      <p className="text-ink-body mb-8">
        La página que buscás no existe o fue movida.
      </p>
      <Button to="/">Volver al inicio</Button>
    </Container>
  );
}
