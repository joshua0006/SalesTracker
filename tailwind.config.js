/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // This enables dark mode
  theme: {
    extend: {
      colors: {
        gray: {
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        black: "#000000",
      },
    },
  },
  plugins: [],
};
