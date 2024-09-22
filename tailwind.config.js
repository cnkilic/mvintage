/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      height: {
        '460': '460px', // Add custom height
      },
    },
  },
  plugins: [],
}

