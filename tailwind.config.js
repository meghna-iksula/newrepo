/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        red: {
          850: "#9a1a28",
        },
        moss: {
          default: "#a9b089",
        },
        zinc: {
          250: "#e0e1dd",
          350: "#697c6b",
          750: "#252c26",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
