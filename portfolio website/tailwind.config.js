/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      animation: {
        spin_slow: 'spin 3s linear infinite',
      },
    },
  },
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // update this based on your project files
  ],
  plugins: [],
};
