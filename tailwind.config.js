module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxl: { max: "1535px" },
      xl: { max: "1366px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "450px" },
      xxs: { max: "320px" },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        inter: ["Inter"],
      },
      colors: {
        main: {
          grayscale: {
            100: "#e2e1e6",
            200: "#c4c4cc",
            300: "#a7a6b3",
            400: "#898999",
            500: "#6c6b80",
            600: "#565666",
            700: "#41404d",
            800: "#2b2b33",
            900: "#16151a",
          },
          indigo: {
            100: "#dadbf6",
            200: "#b4b7ed",
            300: "#8f93e5",
            400: "#696fdc",
            500: "#444bd3",
            600: "#363ca9",
            700: "#292d7f",
            800: "#1b1e54",
            900: "#0e0f2a",
          },
          purple: {
            100: "#e8defd",
            200: "#d1befb",
            300: "#b99dfa",
            400: "#a27df8",
            500: "#8b5cf6",
            600: "#6f4ac5",
            700: "#533794",
            800: "#382562",
            900: "#1c1231",
          },
          blue: {
            100: "#dce8fd",
            200: "#b8d0fb",
            300: "#95b9f8",
            400: "#71a1f6",
            500: "#4e8af4",
            600: "#3e6ec3",
            700: "#2f5392",
            800: "#1f3762",
            900: "#101c31",
          },
          yellow: {
            100: "#ffecd4",
            200: "#ffd8aa",
            300: "#ffc57f",
            400: "#ffb155",
            500: "#ff9e2a",
            600: "#cc7e22",
            700: "#995f19",
            800: "#663f11",
            900: "#332008",
          },
          green: {
            100: "#cff1e6",
            200: "#9fe3cd",
            300: "#70d5b3",
            400: "#40c79a",
            500: "#10b981",
            600: "#0d9467",
            700: "#0a6f4d",
            800: "#064a34",
            900: "#03251a",
          },
          cyan: {
            100: "#d9f7fa",
            200: "#b4eff6",
            300: "#8ee6f1",
            400: "#69deed",
            500: "#43d6e8",
            600: "#36abba",
            700: "#28808b",
            800: "#1b565d",
            900: "#0d2b2e",
          },
          red: {
            100: "#fcdada",
            200: "#f9b4b4",
            300: "#f58f8f",
            400: "#f26969",
            500: "#ef4444",
            600: "#bf3636",
            700: "#8f2929",
            800: "#601b1b",
            900: "#300e0e",
          },
          pink: {
            100: "#fbdaeb",
            200: "#f7b6d6",
            300: "#f491c2",
            400: "#f06dad",
            500: "#ec4899",
            600: "#bd3a7a",
            700: "#8e2b5c",
            800: "#5e1d3d",
            900: "#2f0e1f",
          },
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [require("tailwindcss-question-mark")],
};
