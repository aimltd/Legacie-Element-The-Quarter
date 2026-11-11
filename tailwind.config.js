import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,tsx.jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'freight': ['freight-big-pro', 'san-serif'],
        'poppins': ['poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
};