/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    screens: {
      xsm: "482px",
      sm: "640px",
      md: "770px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1320px",
    },
    extend: {
      letterSpacing: {
        tightest: "-0.07em",
      },
      fontWeight: {
        mediumbold: "550",
      },
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
        cyan: {
          930: "#22505f",
        },
      },
      fontFamily: {
        roboto: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};
