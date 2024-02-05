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
        skyBlue: "#91D2F7"
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