import React from 'react';
import { Home, FolderGit2, Layers } from 'lucide-react';
import ThemeSelector from './ThemeSelector';
import { BrandLogoGG } from './TechIcons';

export function Navbar({ currentPage, onNavigate, theme, onSelectTheme }) {
  return (
    <nav className="fixed top-0 w-full bg-bgBase/90 backdrop-blur-md border-b border-white/5 z-50 transition-all duration-300">
      <div className="max-w-4xl mx-auto px-6 py-3.5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm font-mono tracking-wide">
        <button
          type="button"
          onClick={() => onNavigate('inicio')}
          className="flex items-center gap-2.5 font-bold text-gray-200 group cursor-pointer hover:text-white transition-colors"
        >
          <BrandLogoGG className="w-7 h-7 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_8px_rgba(var(--accent-glow,0,229,255),0.35)]" />
          <span className="flex items-center gap-1.5 tracking-wider">
            <span className="text-white">GG</span>
            <span className="text-neonCyan">/</span>
            <span className="text-gray-300 group-hover:text-white transition-colors">PORTFÓLIO</span>
          </span>
        </button>

        <div className="flex items-center gap-3 sm:gap-6 text-gray-500">
          <button
            onClick={() => onNavigate('inicio')}
            id="nav-inicio"
            className={`nav-btn flex items-center gap-1.5 transition-colors hover:text-white whitespace-nowrap shrink-0 cursor-pointer ${
              currentPage === 'inicio' ? 'text-white font-bold' : 'text-gray-400'
            }`}
          >
            <Home className={`w-3.5 h-3.5 ${currentPage === 'inicio' ? 'text-neonCyan' : 'text-gray-500'}`} />
            <span>INÍCIO</span>
          </button>

          <button
            onClick={() => onNavigate('projetos')}
            id="nav-projetos"
            className={`nav-btn flex items-center gap-1.5 transition-colors hover:text-white whitespace-nowrap shrink-0 cursor-pointer ${
              currentPage === 'projetos' ? 'text-white font-bold' : 'text-gray-400'
            }`}
          >
            <FolderGit2 className={`w-3.5 h-3.5 ${currentPage === 'projetos' ? 'text-neonCyan' : 'text-gray-500'}`} />
            <span>PROJETOS</span>
          </button>

          <button
            onClick={() => onNavigate('stack')}
            id="nav-stack"
            className={`nav-btn flex items-center gap-1.5 transition-colors hover:text-white whitespace-nowrap shrink-0 cursor-pointer ${
              currentPage === 'stack' ? 'text-white font-bold' : 'text-gray-400'
            }`}
          >
            <Layers className={`w-3.5 h-3.5 ${currentPage === 'stack' ? 'text-neonCyan' : 'text-gray-500'}`} />
            <span>STACK</span>
          </button>

          {/* Seletor de Temas com Paleta Completa */}
          <ThemeSelector currentTheme={theme} onSelectTheme={onSelectTheme} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
