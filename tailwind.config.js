/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgBase: 'var(--bg-base)',
        bgCard: 'var(--bg-card)',
        bgCardHover: 'var(--bg-card-hover)',
        neonOrange: 'var(--accent-secondary)',
        neonCyan: 'var(--accent-primary)',
        accentTertiary: 'var(--accent-tertiary)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'name-gradient': 'var(--hero-gradient)',
        'btn-orange': 'var(--btn-gradient)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
        'push-bar': 'pushBar 2.5s cubic-bezier(0.8, 0, 0.2, 1) infinite',
        'walk-bounce': 'walkBounce 0.4s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-delayed': 'floatDelayed 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s infinite',
        'gradient': 'gradient 6s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pushBar: {
          '0%, 15%': { width: '0%' },
          '85%, 100%': { width: 'calc(100% - 34px)' },
        },
        walkBounce: {
          '0%, 100%': { transform: 'translateY(-50%) rotate(0deg)' },
          '50%': { transform: 'translateY(-55%) rotate(8deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(10deg)' },
        },
        floatDelayed: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(15px) rotate(-10deg)' },
        },
        pulseGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 10px rgba(var(--accent-glow), 0.4))' },
          '50%': { filter: 'drop-shadow(0 0 25px rgba(var(--accent-glow), 0.8))' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      }
    }
  },
  plugins: [],
}