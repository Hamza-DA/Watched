const tailwindcss = require('tailwindcss');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#1d1d1d',
      nav: '#1b191c',
    }),
    extend: {
      fontFamily: {
        Display: ['"Bebas Neue"', 'Sans Serif'],
      },
      height: {
        180: '33rem',
      },
    },
  },
  variants: {
    extend: { width: ['responsive', 'hover', 'focus'] },
  },
  plugins: [require('tailwindcss-scroll-snap')],
};
