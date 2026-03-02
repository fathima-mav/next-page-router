/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#f5f0ec',
          100: '#EDE3D9',
          200: '#D6BFA2',
          300: '#A67B5B',
          400: '#8B5E3C',
          500: '#70432A',
          600: '#59321F',
          700: '#4B382A',
          800: '#362517',
          900: '#25180F',
        },
        champagne: {
          50: '#fff9f0',
          100: '#fff3e6',
          200: '#F9E7CF',
          300: '#FADFA6',
          400: '#F7E7CE',
          500: '#F3E0B5',
          600: '#EDD8A0',
          700: '#E6D28C',
          800: '#DCCB78',
          900: '#D4C364',
        },
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};