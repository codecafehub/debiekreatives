// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 // tailwind.config.js

  theme: {
    extend: {
      // Updated color palette
      colors: {
        'brand-blue': '#0A74DA',
        'accent-blue': '#3B82F6',
        'brand-gold': '#FFC300', // <-- Add this line back
        'dark-bg': '#121212',
        'light-text': '#E5E7EB',
        'dark-text': '#1F2937',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      }
    },
     animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
  },
  plugins: [],
}


      