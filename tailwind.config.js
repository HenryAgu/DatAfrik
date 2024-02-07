/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        yellow: "#FFFF00",
        skyBlue: "#91D2F7",
        gray: "#D9D9D9",
        darkGray: "#757070",
        skyBlue: "#91D2F7",
        customBlack: "#0D0E30",
      },
      fontFamily:{
        inter: ['Inter', 'sans-serif']
      },
      fontSize:{
        paragraph: "16px",
      }
    },
  },
  plugins: [],
}