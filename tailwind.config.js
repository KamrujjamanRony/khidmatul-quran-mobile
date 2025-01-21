/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,js}",,
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.625rem',
        'sm': '0.75rem',
        'base': '0.875rem',
        'lg': '1rem',
        'xl': '1.125rem',
        '2xl': '1.25rem',
        '3xl': '1.375rem',
        '4xl': '1.5rem',
        '5xl': '1.625rem',
        '6xl': '1.75rem',
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs"),require("daisyui")],
  darkMode: "class",
}