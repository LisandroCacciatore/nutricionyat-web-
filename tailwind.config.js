/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Botanical Vitality Palette
        brand: {
          DEFAULT: '#163328', // Deep Laurel Sage
          hover: '#2D4A3E',
          soft: '#C9EAD9',
          container: '#2D4A3E',
        },
        accent: {
          DEFAULT: '#D97D54', // Sun-dried Persimmon
          hover: '#E68A5F',
        },
        surface: {
          DEFAULT: '#F6FBF5', // Oatmeal canvas
          alt: '#F0F5F0',
          muted: '#EBEFEA',
          white: '#FFFFFF',
        },
        ink: {
          title: '#163328',
          body: '#506351',
          muted: '#727974',
        },
        secondary: {
          DEFAULT: '#506351', // Tender Herb
          light: '#D0E5CE',
        },
      },
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
