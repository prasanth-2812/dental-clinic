/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a1628",
          light: "#122543"
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#d5bc72",
          dark: "#a2873c"
        },
        cream: "#faf7f2",
        teal: "#1a6b6b",
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        'gold': '0 4px 14px 0 rgba(201, 168, 76, 0.39)',
        'soft': '0 10px 40px -10px rgba(10, 22, 40, 0.08)',
      }
    },
  },
  plugins: [],
}
