/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#38bdf8',    // sky-400
        secondary: '#facc15',  // yellow-400
        accent: '#ef4444',     // red-500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Tiro Kannada', 'serif'],
      },
    },
  },
  plugins: [],
} 