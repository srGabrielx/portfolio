import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';

export const THEMES = [
  {
    id: 'cyber',
    name: 'Cyberpunk',
    dot: '#00e5ff',
    secondary: '#ff6b00',
    description: 'Neon Cyan & Orange'
  },
  {
    id: 'violet',
    name: 'Midnight Violet',
    dot: '#c084fc',
    secondary: '#f43f5e',
    description: 'Roxo & IA Neural'
  },
  {
    id: 'emerald',
    name: 'Matrix Emerald',
    dot: '#10b981',
    secondary: '#06b6d4',
    description: 'Cyber Verde Matrix'
  },
  {
    id: 'ocean',
    name: 'Deep Ocean',
    dot: '#38bdf8',
    secondary: '#6366f1',
    description: 'Azul Profundo'
  },
  {
    id: 'amber',
    name: 'Sunset Amber',
    dot: '#f59e0b',
    secondary: '#ef4444',
    description: 'Dourado & Fogo'
  },
  {
    id: 'slate',
    name: 'Titanium Slate',
    dot: '#38bdf8',
    secondary: '#fb923c',
    description: 'Grafite & Titânio Suave'
  }
];

export function ThemeSelector({ currentTheme, onSelectTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const activeTheme = THEMES.find((t) => t.id === currentTheme) || THEMES[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botão de Abrir Menu de Temas */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-xs font-mono text-gray-300 group cursor-pointer"
        aria-label="Selecionar Tema de Cores"
        title="Alternar Tema Visual"
      >
        <Palette className="w-3.5 h-3.5 text-neonCyan transition-transform group-hover:rotate-45" />
        <span className="relative flex h-2 w-2">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: activeTheme.dot }}
          ></span>
          <span
            className="relative inline-flex rounded-full h-2 w-2"
            style={{ backgroundColor: activeTheme.dot }}
          ></span>
        </span>
        <span className="hidden sm:inline font-semibold">{activeTheme.name}</span>
      </button>

      {/* Menu Dropdown de Temas */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-bgCard border border-white/10 shadow-2xl p-2 z-50 animate-fade-in backdrop-blur-xl">
          <div className="px-3 py-2 border-b border-white/5 mb-1 flex items-center justify-between text-[11px] font-mono text-gray-400 uppercase tracking-wider">
            <span>Paleta de Cores</span>
            <span className="text-[9px] text-neonCyan">{THEMES.length} Temas</span>
          </div>

          <div className="space-y-1">
            {THEMES.map((theme) => {
              const isSelected = theme.id === currentTheme;
              return (
                <button
                  key={theme.id}
                  onClick={() => {
                    onSelectTheme(theme.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono transition-all text-left group cursor-pointer ${
                    isSelected
                      ? 'bg-white/10 text-white font-bold'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center -space-x-1">
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/40 shadow-sm"
                        style={{ backgroundColor: theme.dot }}
                      ></span>
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-black/40"
                        style={{ backgroundColor: theme.secondary }}
                      ></span>
                    </div>
                    <div>
                      <div className="text-white text-xs font-semibold leading-tight">{theme.name}</div>
                      <div className="text-[10px] text-gray-500">{theme.description}</div>
                    </div>
                  </div>

                  {isSelected && <Check className="w-3.5 h-3.5 text-neonCyan" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ThemeSelector;
