/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transform: {
        'rotate-x-180': 'rotateX(180deg)',
      },
      boxShadow: {
        'custom': '0 2px 10px #1E3851', 
        'dark': '0 2px 5px #d6d7d7b3', 
      },
    },
  },
  plugins: [
        require('tailwind-scrollbar'),
  ],
}

