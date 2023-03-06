/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#444444",
        secondary: "#00D1CD",
        disabled: "#98D8D6",
        greyBar: "#D9D9D9", 
        black: "#000",
        white: "#fff", 
      },
    },
  },
  plugins: [],
};
