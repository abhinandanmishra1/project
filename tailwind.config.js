/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          link: "#2639AA",
          darkblue: "#1D1D45",
          red: "#F2542A",
          dark: "#737373",
          darkest: "#000000",
          darker: "#262626",
          lighter: "#FAFAFA",
          lightest: "#FFFFFF",
        },
      },
      boxShadow: {
        custom: "-4px -2px 0px 15px rgba(231,166,26,0.82)",
      },
    },
  },
  plugins: [],
};
