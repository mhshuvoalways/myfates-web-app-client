/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-gold": "#262A56",
        "my-cream": "#f1ede8",
        "my-blue": "#262A56",
        "my-yellow": "#EF940F",
        "my-text-gray": "#7a7a7a",
        "my-bg-pastel": "#FEF6EB",
      },
      screens: {
        mobile: "340px",
      },
    },
  },
  plugins: [],
};
