/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      colors: {
        'orange-company': '#F9A109'
      }  
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwindcss-animated'),
  ],
}