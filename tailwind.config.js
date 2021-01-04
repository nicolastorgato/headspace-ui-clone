module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
         'hero-bg1': "url('/src/images/hero-bg-1.png')",
        })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
