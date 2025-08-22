// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // looks at your React components
  ],
  darkMode: "class", // so your dark/light mode works
  theme: {
    extend: {},
  },
  plugins: [],
};
