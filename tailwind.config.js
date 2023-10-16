/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'my-image': "url('/src/images/bg-mac.jpg')",
      }
    },
  },
  plugins: [],
}

