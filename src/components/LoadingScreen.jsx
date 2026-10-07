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
      className={`fixed inset-0 z-[9999999] w-full h-[100dvh] overflow-y-auto overflow-x-hidden scrollbar-none bg-bgBase text-neonCyan font-sans select-none transition-all duration-400 ${
        isFadingOut ? 'opacity-0 pointer-events-none scale-105 filter blur-sm' : 'opacity-100'
      }`}
      style={{
        scrollbarWidth: 'none', /* Firefox */
        msOverflowStyle: 'none' /* IE and Edge */
      }}
      aria-label="Carregando Portfólio"
    >
      <style>{`
        /* Scrollbar invisível */
        .scrollbar-none::-webkit-scrollbar {
          display: none !important;
          width: 0px !important;
          height: 0px !important;
          background: transparent !important;
        }
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
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(var(--accent-glow, 0, 229, 255), 0.12) 0%, var(--bg-base) 75%)'
        }}
      ></div>

      {/* Grid de interface (Radar/HUD) com a cor da página */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(var(--accent-glow, 0, 229, 255), 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(var(--accent-glow, 0, 229, 255), 0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      ></div>

      {/* Efeito de tela CRT/Scanline */}
      <div className="scanline"></div>

      {/* Wrapper com min-h-full auto flex garantindo que o conteúdo nunca corte em telas baixas/horizontais (ex: mobile 16:9) */}
      <div className="relative z-20 w-full min-h-[100dvh] flex flex-col items-center justify-center py-6 px-4 my-auto">
        {/* Container Principal do Shuriken */}
        <div className="relative flex flex-col items-center shrink-0">
          {/* Anéis de HUD externos com rotação harmoniosa e cores balanceadas */}
          <div
            className="absolute inset-0 -m-6 sm:-m-8 rounded-full border border-dashed hud-spin pointer-events-none"
            style={{
              borderColor: 'rgba(var(--accent-glow, 0, 229, 255), 0.2)',
              borderTopColor: 'var(--accent-primary)',
              borderBottomColor: 'var(--accent-secondary)'
            }}
          ></div>
          <div
            className="absolute inset-0 -m-3 sm:-m-4 rounded-full border hud-spin-reverse opacity-80 pointer-events-none"
            style={{
              borderColor: 'rgba(var(--accent-glow, 0, 229, 255), 0.15)',
              borderLeftColor: 'var(--accent-primary)',
              borderRightColor: 'var(--accent-secondary)'
            }}
          ></div>

          {/* Brilho de fundo (Core) */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 sm:w-24 h-20 sm:h-24 rounded-full blur-2xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(var(--accent-glow, 0, 229, 255), 0.22) 0%, transparent 70%)' }}
          ></div>

          {/* Shuriken Cyber Dual-Tone com Gradiente Perfeito */}
          <div className="animate-[spin_1.5s_linear_infinite] relative">
            <svg
              className="w-16 h-16 sm:w-24 sm:h-24 max-h-[18vh] drop-shadow-[0_0_12px_rgba(var(--accent-glow,0,229,255),0.6)]"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="shurikenGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent-primary)" />
                  <stop offset="100%" stopColor="var(--accent-secondary)" />
                </linearGradient>
                <linearGradient id="shurikenGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent-secondary)" />
                  <stop offset="100%" stopColor="var(--accent-primary)" />
                </linearGradient>
              </defs>
              <g transform="translate(100 100)">
                {/* Lâminas com degradê e harmonia dual-tone */}
                <path d="M 0 -95 L 18 -22 L 0 -10 L -18 -22 Z" fill="url(#shurikenGrad1)" />
                <path d="M 95 0 L 22 18 L 10 0 L 22 -18 Z" fill="url(#shurikenGrad2)" />
                <path d="M 0 95 L -18 22 L 0 10 L 18 22 Z" fill="url(#shurikenGrad1)" />
                <path d="M -95 0 L -22 -18 L -10 0 L -22 18 Z" fill="url(#shurikenGrad2)" />

                {/* Núcleo mecânico de precisão */}
                <circle cx="0" cy="0" r="18" fill="var(--bg-card)" stroke="url(#shurikenGrad1)" strokeWidth="3.5" />
                <circle cx="0" cy="0" r="6" fill="var(--accent-primary)" />
                <path d="M -10 -10 L 10 10 M -10 10 L 10 -10" stroke="var(--accent-secondary)" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </div>

        {/* Textos e Barra de Progresso Estilo HUD */}
        <div className="relative mt-8 sm:mt-12 flex flex-col items-center gap-2 sm:gap-2.5 shrink-0">
          <p className="text-[11px] sm:text-xs font-mono tracking-[0.35em] sm:tracking-[0.45em] animate-pulse-fast text-center font-bold">
            <span style={{ color: 'var(--accent-primary)' }}>INICIALIZANDO</span>{' '}
            <span style={{ color: 'var(--accent-secondary)' }}>SISTEMA_</span>
          </p>

          {/* Barra de carregamento com degradê dual-accent */}
          <div
            className="w-48 sm:w-56 h-[3px] rounded-full overflow-hidden relative border border-white/5"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
          >
            <div
              className="absolute top-0 left-0 h-full w-2/5 animate-slide rounded-full"
              style={{
                background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                boxShadow: '0 0 10px rgba(var(--accent-glow, 0, 229, 255), 0.7)'
              }}
            ></div>
          </div>

          {/* Detalhes de numeração estilo HUD */}
          <div className="flex w-48 sm:w-56 justify-between text-[9px] sm:text-[10px] font-mono mt-0.5 text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981] animate-pulse"></span>
              SYS.BOOT
            </span>
            <span className="font-semibold" style={{ color: 'var(--accent-primary)' }}>v2.0.4</span>
          </div>

          {/* Botão Pular Carregamento Estilo Cyberpunk */}
          <button
            id="btn-skip-loading"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              finalizarLoading(true);
            }}
            className="mt-3 sm:mt-4 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest py-1.5 px-4 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all cursor-pointer flex items-center gap-2 group backdrop-blur-sm"
          >
            <span>Pular</span>
            <span className="transition-transform group-hover:translate-x-0.5 font-bold" style={{ color: 'var(--accent-primary)' }}>&gt;</span>
            <span className="text-[8px] sm:text-[9px] text-gray-500 font-mono">[ESC]</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
