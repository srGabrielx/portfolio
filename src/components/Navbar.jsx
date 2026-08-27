import React from 'react';
import ThemeSelector from './ThemeSelector';

export function Navbar({ currentPage, onNavigate, theme, onSelectTheme }) {
  return (
    <nav className="fixed top-0 w-full bg-bgBase/90 backdrop-blur-md border-b border-white/5 z-50 transition-all duration-300">
      <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm font-mono tracking-wide">
        <div className="flex items-center gap-2 font-bold text-gray-300 group cursor-default">
          <span className="w-2 h-2 rounded-full bg-neonCyan animate-pulse group-hover:bg-neonOrange transition-colors"></span>
          GG / <span className="text-white/30"></span> PORTFÓLIO
        </div>

        <div className="flex items-center gap-3 sm:gap-6 text-gray-500">
          <button
            onClick={() => onNavigate('inicio')}
            id="nav-inicio"
            className={`nav-btn transition-colors hover:text-white dark:hover:text-bgBase ${
              currentPage === 'inicio' ? 'text-white font-bold' : 'text-gray-500'
            }`}
          >
            INÍCIO
          </button>

          <button
            onClick={() => onNavigate('projetos')}
            id="nav-projetos"
            className={`nav-btn transition-colors hover:text-white dark:hover:text-bgBase ${
              currentPage === 'projetos' ? 'text-white font-bold' : 'text-gray-500'
            }`}
          >
            PROJETOS
          </button>

          <button
            onClick={() => onNavigate('stack')}
            id="nav-stack"
            className={`nav-btn transition-colors hover:text-white dark:hover:text-bgBase ${
              currentPage === 'stack' ? 'text-white font-bold' : 'text-gray-500'
            }`}
          >
            STACK
          </button>

          {/* Seletor de Temas com Paleta Completa */}
          <ThemeSelector currentTheme={theme} onSelectTheme={onSelectTheme} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
