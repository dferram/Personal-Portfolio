module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#E50914',
        'accent-dark': '#B0060F',
        'accent-light': '#FF2A36',
        muted: '#A0A0A0',
        foreground: '#F0F0F0',
      },
      boxShadow: {
        glow: '0 0 25px rgba(229, 9, 20, 0.35)',
      },
    },
  },
  plugins: [],
};
