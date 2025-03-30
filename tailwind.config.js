/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      scale: {
        '200': '2',
      },
      transitionDuration: {
        '3000': '3000ms',
      },
    },
  },
  plugins: [],
};