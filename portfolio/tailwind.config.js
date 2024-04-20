/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.js", "./src/components/**/*.js"],
  theme: {
    extend: {
      grayscale: {
        0: '0',
        100: '100%',
      },
    },
  },
  variants: {
    grayscale: ['responsive', 'hover'],
  },
  plugins: [],
}

