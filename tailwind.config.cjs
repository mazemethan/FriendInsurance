/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",'./node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Kanit"', 'sans-serif'],
        'press-start':['"Prompt"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
