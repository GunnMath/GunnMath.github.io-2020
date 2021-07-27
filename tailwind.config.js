module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gunn': {
          DEFAULT: '#BD1A18',
          '50': '#F7C4C3',
          '100': '#F5ADAC',
          '200': '#EF817F',
          '300': '#E95452',
          '400': '#E32725',
          '500': '#BD1A18',
          '600': '#A21615',
          '700': '#871311',
          '800': '#6C0F0E',
          '900': '#500B0A'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
