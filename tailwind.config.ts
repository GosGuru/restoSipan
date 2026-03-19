import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sipan: {
          bg: '#0A0A0F',
          blue: '#2070B0',
          'blue-light': '#3A8FD4',
          red: '#C00010',
          text: '#F0F0F0',
          muted: '#A0A8B4',
          card: '#12121A',
          border: '#1E1E2A',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
