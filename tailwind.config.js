const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    container: {
      center: true,
    },
    textShadow: {
      default: '0px 2px 0px #e3e3e3',
    },
    extend: {
      backgroundColor: {
        accent: '#f05a23',
      },
      fontFamily: {
        body: ['Roboto Lt', 'sans-serif'],
        heading: ['LEMON MILK', 'sans-serif'],
      },
      width: {
        article: '20rem',
      },
      colors: {
        primary: '#f05a23',
        secondary: '#410f6d',
        tertiary: '#12a2ff',

        'purple-dark': '#ae2cf1',
        'purple-light': '#7776ff',

        'orange-dark': '#f05a23',
        'orange-light': '#f28e26',
      },
    },
  },
  variants: {
    margin: ['first', 'last', 'responsive'],
    padding: ['first', 'last', 'responsive'],
  },
  plugins: [require('tailwindcss-textshadow')],
};
