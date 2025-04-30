/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        }
      },
      animation: {
        blink: 'blink 1s step-end infinite'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
} 