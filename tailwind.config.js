/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
  content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      theme: {
          colors: {
              'blue': '#1fb6ff',
              'purple': '#7e5bef',
              'pink': '#ff49db',
              'orange': '#ff7849',
              'green': '#13ce66',
              'yellow': '#ffc82c',
              'gray-dark': '#273444',
              'gray': '#8492a6',
              'gray-light': '#d3dce6',
          },
          fontFamily: {
              sans: ['Graphik', 'sans-serif'],
              serif: ['Merriweather', 'serif'],
          },
          extend: {
              spacing: {
                  '8xl': '96rem',
                  '9xl': '128rem',
              },
              borderRadius: {
                  '4xl': '2rem',
              }
          }
      },
  },
  plugins: [],
})

