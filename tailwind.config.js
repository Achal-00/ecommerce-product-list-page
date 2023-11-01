/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "custom-font": ["Montserrat", "sans-serif"],
      },
      colors: {
        "custom-black": "#222222",
        "custom-white": "#e9e9e9",
      },
    },
  },
  plugins: [],
};
