/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#003876', // Primary blue
          800: '#004B8D', // Secondary blue
        },
        yellow: {
          500: '#FFB81C', // Primary yellow
          400: '#FFD700', // Hover yellow
        }
      },
      container: {
        center: true,
        padding: '1rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out'
      }
    },
  },
  plugins: [],
};