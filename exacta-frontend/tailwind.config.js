/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': '0px',
      'tablet': '640px'
    },
    colors: {
      bg_main: "#2F5FFF",
      text_main: "#004696",
      text_blue: "263085",
      button_main: "#FFA43F",

      white: "#FFF",
      black: "#000",
      orange: "#DE7500",
      lightblue: "#2BCBFD",
      yellow: "#FFD502",


    }
  },
  plugins: [],
}
