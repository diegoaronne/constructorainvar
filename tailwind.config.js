/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./blog/*.html",
    "./js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        accent: '#FF9A00',
        'accent-dark': '#E68A00',
        main: '#000000',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
