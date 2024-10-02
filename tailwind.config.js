/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F0F9FF",
        secondary: "#6904EC",
        black: "#020D44",
      },
      height: {
        screen: "100dvh",
        "screen-small": "100svh",
        "screen-large": "100lvh",
      },
      weight: {
        screen: "100dvw",
        "screen-small": "100svw",
        "screen-large": "100lvw",
      },
    },
  },
  plugins: [],
};
