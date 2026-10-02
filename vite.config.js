import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base:
//   '/'                        -> dominio propio, Vercel, Netlify (raíz del sitio)
//   '/nutricionyat-web-/'      -> GitHub Pages como "project page" (subcarpeta del repo)
//
// El workflow de GitHub Pages (.github/workflows/deploy.yml) setea VITE_BASE solo.
// Para probar el build de Pages localmente:
//   VITE_BASE=/nutricionyat-web-/ npm run build
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
});
