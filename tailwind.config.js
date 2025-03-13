/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A2B5F',
          dark: '#0A1B4F',
          light: '#2A3B7F'
        },
        secondary: {
          DEFAULT: '#FF6B35',
          dark: '#FF4B15',
          light: '#FF8B55'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Arial', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark', 'light'],
      textColor: ['dark', 'light'],
    },
  },
  plugins: [],
  important: true,
}
