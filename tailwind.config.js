/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          50: '#E8ECF2',
          100: '#C5CED9',
          200: '#9EADC0',
          300: '#778CA7',
          400: '#5A6B7D',
          500: '#3D4A58',
          600: '#2A3544',
          700: '#1A2538',
          800: '#0F2442',
          900: '#0A1628',
        },
        brand: {
          orange: '#E8720C',
          'orange-light': '#F07820',
          'orange-dark': '#C45F08',
        },
        surface: {
          light: '#F4F6F9',
          dark: '#0F2442',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-0.5rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
