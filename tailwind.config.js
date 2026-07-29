tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                bgBase: '#050505',
                bgCard: '#121214',
                bgCardHover: '#18181b',
                neonOrange: '#ff6b00',
                neonCyan: '#00e5ff',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            backgroundImage: {
                'name-gradient': 'linear-gradient(90deg, #ff4500 0%, #ffaa00 45%, #00e5ff 100%)',
                'btn-orange': 'linear-gradient(90deg, #ff6b00 0%, #ff9500 100%)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'marquee': 'marquee 30s linear infinite',
                'push-bar': 'pushBar 6s ease-in-out infinite',
                'walk-bounce': 'walkBounce 0.4s ease-in-out infinite',
                'float': 'float 4s ease-in-out infinite',
                'float-delayed': 'floatDelayed 5s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 3s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(15px)' },
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
                    '0%, 100%': { filter: 'drop-shadow(0 0 10px rgba(0,229,255,0.4))' },
                    '50%': { filter: 'drop-shadow(0 0 25px rgba(0,229,255,0.8))' },
                }
            }
        }
    }
}