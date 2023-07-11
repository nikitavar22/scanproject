/** @type {import('tailwindcss').Config} **/

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontWeight: {
      thin: '100',
      hairline: '100',
      light: '300',
      normal: '400',
      medium: '550',
      bold: '700',
      black: '900',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif:['Ferry', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}