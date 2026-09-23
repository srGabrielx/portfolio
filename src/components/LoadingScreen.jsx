import React, { useState, useEffect, useRef } from 'react';
import { playChime, unlockChime } from '../lib/sound';

export function LoadingScreen({ onLoadingComplete }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  const completedRef = useRef(false);
  const onCompleteRef = useRef(onLoadingComplete);
  onCompleteRef.current = onLoadingComplete;

  const finalizarLoading = (immediate = false) => {
    if (completedRef.current) return;
    completedRef.current = true;

    playChime();

    if (immediate) {
      setIsFadingOut(true);
      setTimeout(() => {
        if (onCompleteRef.current) onCompleteRef.current();
      }, 150);
    } else {
      setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          if (onCompleteRef.current) onCompleteRef.current();
        }, 300);
      }, 350);
    }
  };

  useEffect(() => {
    // Registra desbloqueio em qualquer primeiro gesto do usuário
    const handleUserGesture = () => {
      unlockChime();
    };

    window.addEventListener('pointerdown', handleUserGesture, { passive: true });
    window.addEventListener('touchstart', handleUserGesture, { passive: true });
    window.addEventListener('click', handleUserGesture, { passive: true });

    const timer = setTimeout(() => {
      finalizarLoading(false);
    }, 2200);

    const handleKeyDown = (e) => {
      unlockChime();
      if (e.key === 'Escape') {
        finalizarLoading(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('pointerdown', handleUserGesture);
      window.removeEventListener('touchstart', handleUserGesture);
      window.removeEventListener('click', handleUserGesture);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      onPointerDown={() => {
        unlockChime();
      }}
      className={`fixed inset-0 z-[9999999] flex flex-col items-center justify-center overflow-hidden bg-bgBase text-neonCyan font-sans select-none transition-all duration-400 ${
        isFadingOut ? 'opacity-0 pointer-events-none scale-105 filter blur-sm' : 'opacity-100'
      }`}
      aria-label="Carregando Portfólio"
    >
      <style>{`
        .hud-spin { animation: spin 4s linear infinite; }
        .hud-spin-reverse { animation: spin 3s linear infinite reverse; }
        .neon-glow { filter: drop-shadow(0 0 10px rgba(var(--accent-glow), 0.85)); }
        .scanline {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(var(--accent-glow), 0.03) 51%);
          background-size: 100% 4px;
          pointer-events: none;
          z-index: 10;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
        .animate-slide { animation: slide 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        @keyframes pulse-fast {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-fast { animation: pulse-fast 1s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>

      {/* Fundo com degradê radial sutil correspondente à predefinição da página */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(var(--accent-glow), 0.12) 0%, var(--bg-base) 100%)'
        }}
      ></div>

      {/* Grid de interface (Radar/HUD) com a cor da página */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(var(--accent-glow), 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(var(--accent-glow), 0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      ></div>

      {/* Efeito de tela CRT/Scanline */}
      <div className="scanline"></div>

      {/* Container Principal do Shuriken */}
      <div className="relative z-20 flex flex-col items-center">
        {/* Anéis de HUD externos com a cor pré-definida da página */}
        <div
          className="absolute inset-0 -m-8 rounded-full border hud-spin pointer-events-none"
          style={{
            borderColor: 'rgba(var(--accent-glow), 0.12)',
            borderTopColor: 'rgba(var(--accent-glow), 0.65)',
            borderBottomColor: 'rgba(var(--accent-glow), 0.65)'
          }}
        ></div>
        <div
          className="absolute inset-0 -m-4 rounded-full border hud-spin-reverse opacity-70 pointer-events-none"
          style={{
            borderColor: 'rgba(var(--accent-glow), 0.2)',
            borderLeftColor: 'var(--accent-primary)'
          }}
        ></div>

        {/* Brilho de fundo (Core) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full blur-2xl pointer-events-none"
          style={{ backgroundColor: 'rgba(var(--accent-glow), 0.22)' }}
        ></div>

        {/* Shuriken Aggressive (Lâminas e linhas com a cor pré-definida da página) */}
        <div className="animate-[spin_1.5s_linear_infinite] neon-glow relative">
          <svg
            width="100"
            height="100"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(100 100)">
              {/* Lâminas mais angulares com a cor primária da página */}
              <path d="M 0 -95 L 18 -22 L 0 -10 L -18 -22 Z" fill="var(--accent-primary)" />
              <path d="M 95 0 L 22 18 L 10 0 L 22 -18 Z" fill="var(--accent-primary)" />
              <path d="M 0 95 L -18 22 L 0 10 L 18 22 Z" fill="var(--accent-primary)" />
              <path d="M -95 0 L -22 -18 L -10 0 L -22 18 Z" fill="var(--accent-primary)" />

              {/* Núcleo mecânico */}
              <circle cx="0" cy="0" r="18" fill="var(--bg-base)" stroke="var(--accent-primary)" strokeWidth="4" />
              <circle cx="0" cy="0" r="6" fill="var(--accent-primary)" />
              <path d="M -12 -12 L 12 12 M -12 12 L 12 -12" stroke="var(--bg-base)" strokeWidth="3" />
            </g>
          </svg>
        </div>
      </div>

      {/* Textos e Barra de Progresso Estilo HUD */}
      <div className="relative z-20 mt-16 flex flex-col items-center gap-3">
        <p
          className="text-xs font-mono tracking-[0.4em] animate-pulse-fast"
          style={{
            color: 'var(--accent-primary)',
            filter: 'drop-shadow(0 0 5px rgba(var(--accent-glow), 0.8))'
          }}
        >
          INICIALIZANDO SISTEMA_
        </p>

        {/* Barra de carregamento com a cor da página */}
        <div
          className="w-56 h-[2px] rounded-full overflow-hidden relative"
          style={{ backgroundColor: 'rgba(var(--accent-glow), 0.15)' }}
        >
          <div
            className="absolute top-0 left-0 h-full w-1/3 animate-slide"
            style={{
              backgroundColor: 'var(--accent-primary)',
              boxShadow: '0 0 8px var(--accent-primary)'
            }}
          ></div>
        </div>

        {/* Detalhes de numeração estilo caça */}
        <div
          className="flex w-56 justify-between text-[10px] font-mono mt-1"
          style={{ color: 'rgba(var(--accent-glow), 0.6)' }}
        >
          <span>SYS.BOOT</span>
          <span>v2.0.4</span>
        </div>

        {/* Botão Pular Carregamento */}
        <button
          id="btn-skip-loading"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            finalizarLoading(true);
          }}
          className="mt-4 text-[10px] font-mono uppercase tracking-widest py-1.5 px-4 rounded border transition-all cursor-pointer flex items-center gap-1.5"
          style={{
            color: 'var(--accent-primary)',
            borderColor: 'rgba(var(--accent-glow), 0.25)',
            backgroundColor: 'rgba(var(--accent-glow), 0.06)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(var(--accent-glow), 0.6)';
            e.currentTarget.style.backgroundColor = 'rgba(var(--accent-glow), 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(var(--accent-glow), 0.25)';
            e.currentTarget.style.backgroundColor = 'rgba(var(--accent-glow), 0.06)';
          }}
        >
          <span>Pular</span>
          <span style={{ color: 'var(--accent-secondary)' }}>&gt;</span>
          <span className="text-[9px] opacity-60 ml-1 font-mono">[ESC]</span>
        </button>
      </div>
    </div>
  );
}

export default LoadingScreen;
