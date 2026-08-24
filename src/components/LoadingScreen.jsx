import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, CheckCircle2 } from 'lucide-react';

export function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const statusMessages = [
    'Carregando kernel Python & IA...',
    'Inicializando modelos LLM & RAG...',
    'Montando interface gráfica interativa...',
    'Sistema operacional pronto.'
  ];

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2600; // 2.6 segundos: rápido, dinâmico e sem cansar o usuário

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(Math.round((elapsed / duration) * 100), 100);

      setProgress(rawProgress);

      const step = Math.min(
        Math.floor((rawProgress / 100) * statusMessages.length),
        statusMessages.length - 1
      );
      setStatusIndex(step);

      if (rawProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            if (onLoadingComplete) onLoadingComplete();
          }, 350);
        }, 150);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      if (onLoadingComplete) onLoadingComplete();
    }, 150);
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[9999999] flex flex-col items-center justify-center bg-bgBase transition-all duration-400 select-none cursor-pointer ${
        isFadingOut ? 'opacity-0 pointer-events-none scale-105 filter blur-sm' : 'opacity-100'
      }`}
      aria-label="Carregando Portfólio"
    >
      {/* Background Ambient Glow */}
      <div className="absolute w-96 h-96 bg-neonCyan/15 rounded-full blur-[120px] pointer-events-none -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-neonOrange/15 rounded-full blur-[120px] pointer-events-none -bottom-20 -right-20"></div>
      <div className="hero-grid absolute inset-0 opacity-20 pointer-events-none"></div>

      {/* Central Cyber Container */}
      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6 text-center">
        {/* Glowing Logo Badge */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-2 bg-gradient-to-r from-neonCyan via-neonOrange to-accentTertiary rounded-2xl blur-lg opacity-60 animate-pulse-glow"></div>
          <div className="relative w-20 h-20 rounded-2xl bg-bgCard border border-white/15 flex items-center justify-center shadow-2xl">
            <div className="relative flex items-center justify-center">
              <span className="font-mono font-black text-2xl tracking-tighter bg-name-gradient bg-clip-text text-transparent">
                GG
              </span>
              <span className="absolute -bottom-2 -right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-bgCard animate-pulse"></span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-1">
          Gabriel Gonçalves
        </h2>
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-8">
          <Cpu className="w-3.5 h-3.5 text-neonCyan animate-spin" style={{ animationDuration: '3s' }} />
          <span>PORTFÓLIO IA & PYTHON</span>
        </div>

        {/* Terminal Status Box */}
        <div className="w-full bg-bgCard/90 border border-white/10 rounded-xl p-4 mb-4 backdrop-blur-md text-left shadow-lg">
          <div className="flex items-center justify-between text-[11px] font-mono text-gray-500 mb-2 border-b border-white/5 pb-1.5">
            <span className="flex items-center gap-1.5 text-gray-400">
              <Terminal className="w-3 h-3 text-neonCyan" /> boot_sequence.sh
            </span>
            <span className="text-neonCyan font-bold font-mono">{progress}%</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-gray-300 min-h-[24px]">
            {progress === 100 ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
            ) : (
              <span className="w-1.5 h-1.5 rounded-full bg-neonCyan animate-ping shrink-0"></span>
            )}
            <span className="truncate">{statusMessages[statusIndex]}</span>
          </div>
        </div>

        {/* Progress Bar with Glow */}
        <div className="w-full bg-white/5 rounded-full h-2 mb-4 overflow-hidden border border-white/10 relative">
          <div
            className="h-full bg-gradient-to-r from-neonCyan via-accentTertiary to-neonOrange transition-all duration-75 rounded-full shadow-[0_0_15px_rgba(var(--accent-glow),0.9)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Skip hint */}
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest hover:text-gray-300 transition-colors">
          Toque para pular &gt;
        </span>
      </div>
    </div>
  );
}

export default LoadingScreen;
