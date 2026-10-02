// Los tokens del sistema viven en src/data/tokens.js para que este config, el CSS
// generado y la página /sistema lean EL MISMO objeto. Si un color cambia allá, cambia
// el CSS y cambia la tabla de contraste calculada: no hay dos fuentes que puedan divergir.
import { tokens } from './src/data/tokens.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: tokens,
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        btn: '9999px', // Pill shape for buttons
        card: '1rem', // 16px for cards
        container: '1.5rem', // 24px for large blocks
      },
      maxWidth: {
        container: '1280px',
      },
      boxShadow: {
        soft: '0 4px 20px -4px rgba(45, 74, 62, 0.04)',
        hover: '0 12px 32px -6px rgba(45, 74, 62, 0.08)',
        float: '0 24px 48px -12px rgba(36, 41, 38, 0.12)',
      },
    },
  },
  // BlogPost.jsx usa `prose` / `prose-lg`: sin este plugin esas clases no hacen nada.
  plugins: [require('@tailwindcss/typography')],
};
