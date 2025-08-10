// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // for Next.js 13+ app directory
    './pages/**/*.{js,ts,jsx,tsx}', // for Next.js 12 pages directory
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add your color palette here
        'primary-purple': '#5E209B',
        'secondary-magenta': '#B93FBB',
        'accent-violet': '#8D2FAB',
        'accent-purple': '#7729A4',
        'deep-blue': '#3E4095',
        'navy-blue': '#26137E',
        'off-white': '#F7F7FA',
        'dark-gray': '#B1B1C4',
       
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
