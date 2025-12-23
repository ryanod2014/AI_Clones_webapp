/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary dark theme colors
        'void': '#0a0a0f',
        'obsidian': '#12121a',
        'slate-dark': '#1a1a24',
        'slate-medium': '#24242f',
        // Accent colors
        'electric': '#00D9FF',
        'electric-dim': '#00a8c7',
        'coral': '#FF6B6B',
        'coral-dim': '#cc5555',
        'mint': '#00FF94',
        'violet': '#A855F7',
        // Text colors
        'text-primary': '#f0f0f5',
        'text-secondary': '#9999aa',
        'text-muted': '#666677',
      },
      fontFamily: {
        'display': ['"JetBrains Mono"', 'monospace'],
        'body': ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slide-up 0.4s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}





