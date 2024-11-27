/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-gold': '#D4AF37',
        'dark-bg': '#121212',
        'accent-gold': '#FFD700',
        'light-text': '#F5F5F5'
      },
      backgroundColor: {
        'primary-gold': '#D4AF37',
        'dark-bg': '#121212',
      },
      textColor: {
        'primary-gold': '#D4AF37',
        'accent-gold': '#FFD700',
        'light-text': '#F5F5F5'
      }
    },
  },
  plugins: [],
}