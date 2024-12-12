/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", 
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto Condensed', 'sans-serif'],
      }
    },
  },
plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"], // Escolha os temas
  },
};