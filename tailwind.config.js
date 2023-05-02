/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        polygon: 'polygon(0 0, 100% 0, 100% 100%, 0% 80%)',
      },
      colors:{
        "025FB5": "#025FB5",
        '1C6FB'   :"#1C6FBB",
        "FFFFFF":"#FFFFFF",
        "0966BB":"#0966BB",
        "000000":"#000000"
        },
      fontFamily: {
        sans: ['"Merienda"', 'sans-serif'],
      },
      width:{
        "1233":"1233px"
      },
      height:{
        "1211":"800px"
      }
    },
  },
  plugins: [],
}

