/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.js", "./src/homeComponents/**/*.js", "./src/grpComponents/**/*.js", "./src/backEndComponents/**/*.js"],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0%' },
          '100%': { backgroundPosition: '-200% 0%' },
        },
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
};
