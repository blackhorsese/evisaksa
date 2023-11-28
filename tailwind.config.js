/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#464646",
        secondary: "#02c39a",
        text: "#464646",
        grey: "#464546",
        light: "#464646",
        side: "#f9f9f9",
      },
      fontFamily: {
        displace: "Displace20",
      },
    },
  },
  plugins: [],
};
