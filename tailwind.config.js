module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
         'hero-bg1': "url('/src/images/hero-bg-1.png')",
        }),

      fontFamily: {
        body: ['Lato'],
      },

      colors: {
        'orange': '#ff7e1d'
      }

    },

    

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
