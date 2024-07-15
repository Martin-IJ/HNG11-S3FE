/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          light: "#F3F4F6",
          dark: "#D9D9D9",
          fair: "#E8EAEE"
        },
        secondary: {
          extraLight: "#D4F1C4",
          light: "#69CE31",
          dark: "#3F7C1D",
        },
        tertiary: "#353535",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        playFair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
