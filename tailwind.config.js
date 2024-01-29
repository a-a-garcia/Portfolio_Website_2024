/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#1A1B41",
        secondaryPink: "#D67AB1"
      },
      card: {
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        borderRadius: '0.375rem',
        padding: '1.25rem',
        backgroundColor: '#1A1B41',
      },
      // keyframes {
      //   appear: {
      //     '0%, 100%' : { }
      //   }
      // }
    },
  },
  plugins: [],
}