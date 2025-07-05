module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#111111',       // Background base
        text: '#EAEAEA',       // Primary readable text
        accent: '#00F5A0',     // Vibrant green accent
        muted: '#6B7280',
        brand: '#00F5A0',
        dark: '#111111',
        light: '#EAEAEA',      // Soft gray for secondary content
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        accent: '0 4px 14px rgba(0, 245, 160, 0.25)', // soft glow in accent
      },
      borderColor: {
        DEFAULT: '#222', // subtle borders in dark UI
      }
    }
  },
  plugins: [],
}
