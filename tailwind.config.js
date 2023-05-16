/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl-min': { 'min': '1400px' },
      '3xl': { 'max': '1730px' },
      '2xl': { 'max': '1400px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1200px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'lg-min': { 'min': '1024px' },


      'md': { 'max': '739px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      boxShadow: {
        "box-shadow": "0 10px 60px rgba(38, 45, 118, 0.08)",
      }
    },
  },
  plugins: [],
}

