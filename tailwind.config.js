/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      maxWidth: {
        container: "960px",
      },
      backgroundImage: {
        banner: "url('../public/images/asset/banner.png')",
      },
      colors: {
        primary: "#222",
        secondery: "#727A80",
      },
    },
    fontFamily: {
      pop: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
