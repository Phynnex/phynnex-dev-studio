// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#8B06A3',    // Vibrant purple from logo
        'deep-blue': '#1A1070',         // Navy blue from PHYNNEX text
        'light-purple': '#D393F4',      // Light purple accent
        'off-white': '#FBFAFC',         // Background color
        'dark-gray': '#333333',         // Body text
        
        // Keeping your original color names as aliases for compatibility
        'purple': '#8B06A3',
        'perfume': '#D393F4',
        'whisper': '#FBFAFC',
        'creole': '#1A1070',
      },
      fontFamily: {
        'inter': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'montserrat': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}