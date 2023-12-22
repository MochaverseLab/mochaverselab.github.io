/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "pages/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'ruda': 'Ruda, sansserif',
        'roboto-slab':  'Roboto Slab, serif'   
       }
    },
  },
  plugins: [],
}

