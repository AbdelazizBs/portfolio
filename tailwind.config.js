const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**/*.{jsx,js}',
  ],
  theme: {
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },
    extend: {
      gridTemplateColumns:{
        'spec': 'repeat(auto-fit, minmax(140px, 1fr))',
      },
      letterSpacing: {
        'spec' : '0.01em',
      },
    }
  },
  plugins: []
}
