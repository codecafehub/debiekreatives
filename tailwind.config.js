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
        'brand-blue': '#0A74DA',      // The main, vibrant brand blue
        'accent-blue': '#3B82F6',     // A slightly lighter blue for hovers/highlights
        'dark-bg': '#121212',         // The main dark background
        'light-text': '#E5E7EB',     // A soft white (off-white) for text
        'dark-text': '#1F2937',      // A dark grey for text on light backgrounds
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
