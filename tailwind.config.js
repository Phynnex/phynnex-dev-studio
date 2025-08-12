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
        inter: ['var(--font-inter)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'drift': {
          '0%':   { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '25%':  { transform: 'translate3d(8px, -10px, 0) rotate(3deg)' },
          '50%':  { transform: 'translate3d(0, -18px, 0) rotate(-2deg)' },
          '75%':  { transform: 'translate3d(-10px, -6px, 0) rotate(2deg)' },
          '100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'drift-slow': 'drift 18s ease-in-out infinite',
        'drift-slower': 'drift 26s ease-in-out infinite',
        'drift-slowest': 'drift 34s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
