// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#8B06A3',
        'deep-blue': '#1A1070',
        'light-purple': '#D393F4',
        'off-white': '#FBFAFC',
        'dark-gray': '#333333',
        'purple': '#8B06A3',
        'perfume': '#D393F4',
        'whisper': '#FBFAFC',
        'creole': '#1A1070'
      },
      fontFamily: {
        'inter': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'montserrat': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
