/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

  
    extend: {
      colors : {
        "color-grey-100": "#F2EBEF",
        "white": "#FFFF",
        "color-grey-500": "#998E94",
        "color-grey-800" : "#262123",
        "color-bg-black" : "#0D0B0C",
  
      },
      backgroundImage : {
        'hero-mobile' : "url('./src/assets/hero-mobile.png')",
      }
    },
  },
  plugins: [],
}

