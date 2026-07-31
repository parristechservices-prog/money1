import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6f5',
          100: '#d8eeec',
          200: '#b7ded6',
          300: '#8dcbc0',
          400: '#5da7a0',
          500: '#3b7e7f',
          600: '#325f62',
          700: '#2b4d4f',
          800: '#243e3f',
          900: '#1c2f31'
        }
      }
    }
  },
  plugins: [],
};

export default config;
