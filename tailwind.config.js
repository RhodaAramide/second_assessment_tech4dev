/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        blueLight: "#4489FC",
        blue: "#151083",
        whiteDeep: "#D0D3DA",
        whiteLight: "#FCFCFD",
      },
      fontSize: {
        sm: ["14px", "16px"],
        lg: ["64px", "82px"],
      },
    },
  },
  plugins: [],
};
