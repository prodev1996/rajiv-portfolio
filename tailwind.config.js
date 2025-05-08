/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,jsx,ts,tsx}",        // every file under src/app
      "./src/app/components/**/*.{js,jsx,ts,tsx}" // just to be sure
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  