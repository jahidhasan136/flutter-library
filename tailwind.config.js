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
      screens: {
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
