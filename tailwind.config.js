/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9900", // Orange
        secondary: "#4C4CFF", // Royal Blue
        accent: "#FF33CC", // Magenta
        additional: "#00CC66", // Lime Green (optional)
      },
    },
  },
  daisyui: {
    themes: ["night"],
  },
  plugins: [require("daisyui")],
};
