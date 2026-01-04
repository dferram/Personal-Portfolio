module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        'primary-dark': '#F5F5F5',
        accent: '#1a2aeb',
        'accent-dark': '#0f1da8',
        'accent-light': '#3d4ef0',
        muted: '#666666',
        foreground: '#0a0a0a',
        'foreground-light': '#333333',
      },
      boxShadow: {
        clean: '0 2px 8px rgba(0, 0, 0, 0.08)',
        'clean-lg': '0 4px 16px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
