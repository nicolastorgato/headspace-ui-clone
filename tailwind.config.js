module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
         'hero-bg1': "url('/src/images/hero-bg-1.png')",
         'banner-bg': "url('/src/images/banner-bg.jpg')",
         'election-anxiety': "url('/src/images/latest-articles/Election-anxiety.png')",
         'walking-meditation': "url('/src/images/latest-articles/Walking meditation.svg')",
         'always-tired': "url('/src/images/latest-articles/Why-am-I-always-tired.svg')",
         'home-office': "url('/src/images/latest-articles/How-to-create-a-mindful-home-office.svg')",
         'mindful-eating': "url('/src/images/latest-articles/What-is-mindful-eating.svg')",
         'power-napping': "url('/src/images/latest-articles/Power-napping-101.svg')",
         'menu-article-1': "url('/src/images/menu-articles/article-1.svg')",
         'menu-article-2': "url('/src/images/menu-articles/article-2.svg')",
         'menu-article-3': "url('/src/images/menu-articles/article-3.png')",
         'menu-article-4': "url('/src/images/menu-articles/article-4.svg')",
         'menu-article-5': "url('/src/images/menu-articles/article-5.svg')",
         'menu-article-6': "url('/src/images/menu-articles/article-6.png')",
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
