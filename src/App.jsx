import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Plans from './pages/Plans.jsx';
import Approach from './pages/Approach.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import Contact from './pages/Contact.jsx';
import DesignSystem from './pages/DesignSystem.jsx';
import NotFound from './pages/NotFound.jsx';

// En GitHub Pages el sitio vive en una subcarpeta (https://usuario.github.io/nutricionyat-web-/).
// Vite expone esa base en import.meta.env.BASE_URL; React Router necesita saberla,
// si no las rutas (/planes, /blog) rompen al recargar. En dominio propio BASE_URL es '/'.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="planes" element={<Plans />} />
          <Route path="enfoque" element={<Approach />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contacto" element={<Contact />} />
          {/* Sistema de diseño: a propósito FUERA de la navegación.
              Se llega por link directo (/sistema) para mostrarlo en la propuesta
              sin ensuciar el recorrido normal del visitante. */}
          <Route path="sistema" element={<DesignSystem />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
