const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Fira Code', 'monospace']
    },
    screens: {
      xs: '460px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        brand: {
          'blue-900': '#0a192f',
          'blue-800': '#112240',
          'teal-500': '#64ffda',
          'gray-700': '#8892b0',
          'gray-500': '#a8b2d1',
          'gray-400': '#ccd6f6'
        }
      }
    }
  },
  plugins: []
}
