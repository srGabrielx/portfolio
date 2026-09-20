import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Cpu, CheckCircle2, Volume2 } from 'lucide-react';
import { playSubtleBellChime, initAudioUnlock, isAudioUnlocked } from '../lib/sound';

export function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [audioReady, setAudioReady] = useState(false);

  const completedRef = useRef(false);
  const onCompleteRef = useRef(onLoadingComplete);
  onCompleteRef.current = onLoadingComplete;

  const statusMessages = [
    'Carregando kernel Python & IA...',
    'Inicializando modelos LLM & RAG...',
    'Montando interface gráfica interativa...',
    'Sistema operacional pronto.'
  ];

  useEffect(() => {
    // Pré-ativa o contexto de áudio em qualquer interação
    initAudioUnlock(() => setAudioReady(true));
    if (isAudioUnlocked()) {
      setAudioReady(true);
    }

    const startTime = Date.now();
    const duration = 2200; // Carregamento rápido, ágil e sem cansar o usuário

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
        setProgress(100);
        setStatusIndex(statusMessages.length - 1);

        if (!completedRef.current) {
          completedRef.current = true;
          // Toca o sino cristalino
          playSubtleBellChime();

          // Libera e transita a tela automaticamente sem travar no Chrome ou qualquer navegador
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              if (onCompleteRef.current) onCompleteRef.current();
            }, 380);
          }, 320);
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const handleSkip = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (completedRef.current) return;
    completedRef.current = true;

    playSubtleBellChime();
    setIsFadingOut(true);
    setTimeout(() => {
      if (onCompleteRef.current) onCompleteRef.current();
    }, 180);
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[9999999] bg-bgBase transition-all duration-400 select-none cursor-pointer overflow-y-auto overflow-x-hidden ${
        isFadingOut ? 'opacity-0 pointer-events-none scale-105 filter blur-sm' : 'opacity-100'
      }`}
      aria-label="Carregando Portfólio"
    >
      {/* Background Ambient Glow */}
      <div className="absolute w-96 h-96 bg-neonCyan/15 rounded-full blur-[120px] pointer-events-none -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-neonOrange/15 rounded-full blur-[120px] pointer-events-none -bottom-20 -right-20"></div>
      <div className="hero-grid absolute inset-0 opacity-20 pointer-events-none"></div>

      {/* Safe Centering Wrapper */}
      <div className="min-h-full w-full flex flex-col items-center justify-center p-4 sm:p-8">
        {/* Central Cyber Container */}
        <div className="relative z-10 flex flex-col items-center max-w-xs sm:max-w-md w-full text-center">
          {/* Glowing Logo Badge */}
          <div className="relative mb-6 sm:mb-8 group">
            <div className="absolute -inset-2 bg-gradient-to-r from-neonCyan via-neonOrange to-accentTertiary rounded-2xl blur-lg opacity-60 animate-pulse-glow"></div>
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-bgCard border border-white/15 flex items-center justify-center shadow-2xl">
              <div className="relative flex items-center justify-center">
                <span className="font-mono font-black text-xl sm:text-2xl tracking-tighter bg-name-gradient bg-clip-text text-transparent">
                  GG
                </span>
                <span className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-bgCard animate-pulse"></span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-white mb-1">
            Gabriel Gonçalves
          </h2>
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-gray-400 mb-6 sm:mb-8">
            <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-neonCyan animate-spin" style={{ animationDuration: '3s' }} />
            <span>PORTFÓLIO IA & PYTHON</span>
          </div>

          {/* Terminal Status Box */}
          <div className="w-full bg-bgCard/90 border border-white/10 rounded-xl p-3 sm:p-4 mb-4 backdrop-blur-md text-left shadow-lg">
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-gray-500 mb-2 border-b border-white/5 pb-1.5">
              <span className="flex items-center gap-1.5 text-gray-400">
                <Terminal className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-neonCyan" /> boot_sequence.sh
              </span>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-[9px] sm:text-[10px] text-neonCyan/80 font-mono">
                  <Volume2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-neonCyan" /> som ativo
                </span>
                <span className="text-neonCyan font-bold font-mono">{progress}%</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[9.5px] sm:text-xs font-mono text-gray-300 min-h-[24px]">
              {progress === 100 ? (
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-500 shrink-0" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-neonCyan animate-ping shrink-0"></span>
              )}
              <span className="leading-tight">{statusMessages[statusIndex]}</span>
            </div>
          </div>

          {/* Progress Bar with Glow */}
          <div className="w-full bg-white/5 rounded-full h-1.5 sm:h-2 mb-4 overflow-hidden border border-white/10 relative">
            <div
              className="h-full bg-gradient-to-r from-neonCyan via-accentTertiary to-neonOrange transition-all duration-75 rounded-full shadow-[0_0_15px_rgba(var(--accent-glow),0.9)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Skip Button */}
          <button
            id="btn-skip-loading"
            type="button"
            onClick={handleSkip}
            className="text-[9px] sm:text-[10px] font-mono text-gray-400 hover:text-neonCyan uppercase tracking-widest transition-colors py-1.5 px-3 rounded-full hover:bg-white/5 cursor-pointer flex items-center gap-1"
          >
            <span>Toque para pular</span>
            <span className="text-neonCyan">&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
