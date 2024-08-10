/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#f6f6f6"
        },
        dark: {
          background: "#1c1d25"
        }
      },
      rotate: {
        '-180': '-180deg',
        '-90': '-90deg',
        '-45': '-45deg',
        '45': '45deg',
        '90': '90deg',
        '180': '180deg',
      }
    },
  },
  plugins: [],
}

