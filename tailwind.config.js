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
        "000000":"#000000",
        "nav-hover": "linear-gradient(180deg, rgba(246, 118, 0, 0.6) 0%, rgba(255, 255, 255, 0.5) 52.08%, rgba(66, 248, 2, 0.4) 100%)"
      },
      fontFamily: {
        sans: ['"Merienda"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

