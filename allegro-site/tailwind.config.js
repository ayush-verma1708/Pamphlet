/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'allegro-dark': 'var(--allegro-dark)',
        'allegro-light': 'var(--allegro-light)',
        'allegro-gold': 'var(--allegro-gold)',
      },
      animation: {
        'scale-in': 'scale-in 0.3s ease-out forwards',
      },
      keyframes: {
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 