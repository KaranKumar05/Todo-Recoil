/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'md': '721px',
      'sm': '614px'

    },
  },
  plugins: [require("daisyui")],
}