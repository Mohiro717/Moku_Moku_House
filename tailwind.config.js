/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#f8f4e9',
        'coffee-dark': '#3b2f2f',
        'coffee-light': '#c5a880',
        'pastel-blue': '#a0c4ff',
        'vivid-pink': '#ff69b4',
        'vivid-green': '#7fffd4',
        'pastel-green': '#b9fbc0',
        'coffee-mid': '#6f4e37',
      },
      fontFamily: {
        'playfair-display': ['Playfair Display', 'serif'],
        'noto-sans-jp': ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
