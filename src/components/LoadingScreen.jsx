import React, { useState, useEffect, useRef } from 'react';
import { playChime, unlockChime } from '../lib/sound';

export function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
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
    const startTime = Date.now();
    const duration = 2200;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(Math.round((elapsed / duration) * 100), 100);

      setProgress(rawProgress);

      if (rawProgress >= 100) {
        clearInterval(interval);
        setProgress(100);
        finalizarLoading(false);
      }
    }, 20);

    const handleKeyDown = (e) => {
      unlockChime();
      if (e.key === 'Escape') {
        finalizarLoading(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      onPointerDown={() => {
        unlockChime();
      }}
      className={`fixed inset-0 z-[9999999] flex flex-col items-center justify-center overflow-hidden bg-black text-green-500 font-sans select-none transition-all duration-400 ${
        isFadingOut ? 'opacity-0 pointer-events-none scale-105 filter blur-sm' : 'opacity-100'
      }`}
      aria-label="Carregando Portfólio"
    >
      <style>{`
        .hud-spin { animation: spin 4s linear infinite; }
        .hud-spin-reverse { animation: spin 3s linear infinite reverse; }
        .neon-glow { filter: drop-shadow(0 0 10px rgba(34, 197, 94, 0.8)); }
        .scanline {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(34, 197, 94, 0.03) 51%);
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

      {/* Fundo com degradê radial sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#064e3b20_0%,_#000000_100%)] pointer-events-none"></div>

      {/* Grid de interface (Radar/HUD) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e0a_1px,transparent_1px),linear-gradient(to_bottom,#22c55e0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      {/* Efeito de tela CRT/Scanline */}
      <div className="scanline"></div>

      {/* Container Principal do Shuriken */}
      <div className="relative z-20 flex flex-col items-center">
        {/* Anéis de HUD externos */}
        <div className="absolute inset-0 -m-8 rounded-full border border-green-500/10 border-t-green-500/60 border-b-green-500/60 hud-spin pointer-events-none"></div>
        <div className="absolute inset-0 -m-4 rounded-full border border-green-500/20 border-l-green-500/80 hud-spin-reverse opacity-70 pointer-events-none"></div>

        {/* Brilho de fundo (Core) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-green-500/20 rounded-full blur-2xl pointer-events-none"></div>

        {/* Shuriken Aggressive (Linhas retas e cortantes) */}
        <div className="animate-[spin_1.5s_linear_infinite] neon-glow relative">
          <svg
            width="100"
            height="100"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(100 100)">
              {/* Lâminas mais angulares e agressivas */}
              <path d="M 0 -95 L 18 -22 L 0 -10 L -18 -22 Z" fill="#22c55e" />
              <path d="M 95 0 L 22 18 L 10 0 L 22 -18 Z" fill="#22c55e" />
              <path d="M 0 95 L -18 22 L 0 10 L 18 22 Z" fill="#22c55e" />
              <path d="M -95 0 L -22 -18 L -10 0 L -22 18 Z" fill="#22c55e" />

              {/* Núcleo mecânico */}
              <circle cx="0" cy="0" r="18" fill="#000" stroke="#22c55e" strokeWidth="4" />
              <circle cx="0" cy="0" r="6" fill="#22c55e" />
              <path d="M -12 -12 L 12 12 M -12 12 L 12 -12" stroke="#000" strokeWidth="3" />
            </g>
          </svg>
        </div>
      </div>

      {/* Textos e Barra de Progresso Estilo HUD */}
      <div className="relative z-20 mt-16 flex flex-col items-center gap-3">
        <p className="text-xs font-mono tracking-[0.4em] text-green-400 animate-pulse-fast drop-shadow-[0_0_5px_rgba(34,197,94,0.8)]">
          INICIALIZANDO SISTEMA_
        </p>

        {/* Barra de carregamento com progresso real integrado ao estilo HUD */}
        <div className="w-56 h-[2px] bg-green-950/80 rounded-full overflow-hidden relative">
          <div
            className="absolute top-0 left-0 h-full bg-green-400 transition-all duration-75 shadow-[0_0_8px_#22c55e]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Detalhes de numeração e status */}
        <div className="flex w-56 justify-between text-[10px] font-mono text-green-600/60 mt-1">
          <span>SYS.BOOT [{progress}%]</span>
          <span>v2.0.4</span>
        </div>

        {/* Botão Pular Carregamento integrado ao estilo cibernético */}
        <button
          id="btn-skip-loading"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            finalizarLoading(true);
          }}
          className="mt-4 text-[10px] font-mono text-green-500/70 hover:text-green-300 uppercase tracking-widest py-1.5 px-4 rounded border border-green-500/20 hover:border-green-500/50 bg-green-950/20 hover:bg-green-900/30 transition-all cursor-pointer flex items-center gap-1.5"
        >
          <span>Pular</span>
          <span className="text-green-400">&gt;</span>
          <span className="text-[9px] text-green-700 ml-1 font-mono">[ESC]</span>
        </button>
      </div>
    </div>
  );
}

export default LoadingScreen;
