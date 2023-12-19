/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#3649F8",
        "brand-green": "#BFF128",
      },
    },
  },
  plugins: [],
};
