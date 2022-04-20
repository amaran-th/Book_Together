const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      basic: ['GowunDodum-Regular'],
      title: ['Cafe24Ohsquareair'],
      content: ['MaruBuri-Regular'],
    },
    extend: {
      colors: {
        main: 'var(--color-main)',
        point: 'var(--color-point)',
        sub: 'var(--color-sub)',
        rose: colors.rose,
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms')],
}
