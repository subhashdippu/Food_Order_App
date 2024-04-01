/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: "#3333cc",
        red: "#e60000",
        secondary: "#555",
        primaryBG: "#f2f2f2",
      },
      fontFamily: {
        primary: ["public Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}

