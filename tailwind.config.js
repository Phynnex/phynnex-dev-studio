// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // for Next.js 13+ app directory
    './pages/**/*.{js,ts,jsx,tsx}', // for Next.js 12 pages directory
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
      
        'primary-purple': '#5E209B',
        'secondary-magenta': '#B93FBB',
        'accent-violet': '#8D2FAB',
        'accent-purple': '#7729A4',
        'off-white': '#F7F7FA',
        'dark-gray': '#B1B1C4',
       
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
