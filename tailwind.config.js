/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111",
        secondary: "#F0F0F0",
        textPrimary: "#111",
        textSecondary: "#989898",
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
      fontSize: {
        h1: "40px",
        h2: "32px",
        h3: "24px",
        h4: "20px",
        h5: "16px",
        h6: "14px",
        h7: "12px",
      },
    },
  },
  plugins: [],
};
