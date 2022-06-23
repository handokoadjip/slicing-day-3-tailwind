/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        brygada: ["'Brygada 1918'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
