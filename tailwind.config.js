/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#142a25",
        forest: "#173b31",
        moss: "#71856a",
        cream: "#f8f7f1",
        orange: "#e66a3b",
      },
      boxShadow: { soft: "0 14px 40px rgba(20,42,37,.07)" },
    },
  },
  plugins: [],
};
