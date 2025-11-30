/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': {
          50: '#f0f4ff',
          100: '#dde6ff',
          200: '#c2d3ff',
          300: '#9cb5ff',
          400: '#758dff',
          500: '#4d65f8',
          600: '#3a4aeb',
          700: '#15297c', // Tu color principal
          800: '#1a2266',
          900: '#1a1f52',
        }
      },
    },
  },
  plugins: [],
}