module.exports = {
  purge: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        point: 'var(--color-point)',
        sub: 'var(--color-sub)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
