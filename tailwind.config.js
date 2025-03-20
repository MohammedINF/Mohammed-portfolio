/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: { 
      fontFamily:{
      hamaFont: ['"MuseoModerno"', 'sans-serif'],
      Pacifico: ['Pacifico','cursive'],
      Permanent: ['permanent','cursive'],
        Arabic: ['Lalezar','cursive'],
        Kurdish:['Kurdish'],
        oswald: ['"Oswald"', 'sans-serif'],

        
    },
  },
   
  },
  plugins: [],
}