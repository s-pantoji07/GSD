/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#4CAF50',
        secondaryGreen: '#81C784',
        darkGreen: '#2E7D32',
        neutralLight: '#F5F5F5',
        neutralMedium: '#E0E0E0',
        neutralDark: '#424242',
        accentYellow: '#FFEB3B',
        accentOrange: '#FF9800',
        accentBlue: '#2196F3',
      },
    },
  },
  plugins: [],
}