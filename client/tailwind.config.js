/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0E0147',
          dark: '#080028',
          light: '#1B0A66',
        },
        brand: {
          orange: '#E1552D',
          orangeDark: '#C8431F',
          purple: '#7A35F0',
          purpleDark: '#6424D6',
        },
        ink: '#1A1A1A',
      },
      fontFamily: {
        sans: ['"Poppins"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Baloo 2"', '"Poppins"', 'ui-sans-serif', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(120% 120% at 80% 10%, #2A0F8A 0%, #0E0147 45%, #080028 100%)',
      },
      boxShadow: {
        dropdown: '0 20px 40px -12px rgba(8, 0, 40, 0.25)',
        card: '0 10px 30px -10px rgba(8, 0, 40, 0.15)',
      },
      keyframes: {
        fadeSlideDown: {
          '0%': { opacity: 0, transform: 'translateY(-8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeSlideDown: 'fadeSlideDown 0.18s ease-out',
      },
    },
  },
  plugins: [],
};
