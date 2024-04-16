/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#F0F0F0",
        textSecondary: "#989898",
        primary: "#111111",
      },
      // container: {
      //   center: true,
      //   padding: {
      //     default: "1rem",
      //     // xs: "1rem",
      //     // sm: "1rem",
      //     // lg: "4rem",
      //     // xl: "5rem",
      //     // "2xl": "6rem",
      //   },
      // },
      screens: {
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
