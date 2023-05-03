/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        gray: {
          200: "#121212",
          400: "B0B0B0",
          800: "#272727",
        },
        blue: {
          400: "#1977F3",
          700: "#15174D",
        },
        indigo: {
          600: "#4C50A9",
        },
        orange: {
          100: "rgb(255 237 213)",
        },
        yellow: {
          600: "#FCB541",
        },
      },
    },
  },
  plugins: [],
};
