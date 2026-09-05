import React, { useEffect, useState } from 'react';
import {
  X,
  ExternalLink,
  GitBranch,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Copy,
  Check,
  Terminal,
  Layers,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export function ProjectModal({ project, isOpen, onClose, onPrev, onNext, currentIndex, totalProjects }) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState('readme'); // 'readme' | 'details'

  // Fechar no ESC e navegar com setas
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Travar scroll do body
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  // Resetar estados ao mudar de projeto
  useEffect(() => {
    setCopiedLink(false);
    setCopiedCode(false);
    setActiveTab('readme');
  }, [project?.id]);

  if (!isOpen || !project) return null;

  const handleCopyLink = () => {
    const targetUrl = project.url || project.github || window.location.href;
    navigator.clipboard.writeText(targetUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyCode = () => {
    if (!project.readme?.howToRun) return;
    const commands = project.readme.howToRun.join('\n');
    navigator.clipboard.writeText(commands);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/85 backdrop-blur-xl overflow-y-auto animate-fade-in"
      onClick={(e) => {
        if (e.target.id === 'project-modal-backdrop') {
          onClose();
        }
      }}
    >
      {/* Container Principal do Modal */}
      <div
        id="project-modal-container"
        className="relative w-full max-w-5xl my-auto bg-[#0b0c10] border border-white/10 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar de Controle */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#121318]/90 backdrop-blur-md sticky top-0 z-20">
          {/* Navegação entre projetos */}
          <div className="flex items-center gap-3">
            {totalProjects && totalProjects > 1 && (
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                <button
                  id="btn-prev-project"
                  onClick={onPrev}
                  className="p-1 hover:bg-white/10 text-gray-400 hover:text-white rounded-full transition-colors cursor-pointer"
                  title="Projeto Anterior (Seta Esquerda)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-gray-400 px-1">
                  {currentIndex + 1} / {totalProjects}
                </span>
                <button
                  id="btn-next-project"
                  onClick={onNext}
                  className="p-1 hover:bg-white/10 text-gray-400 hover:text-white rounded-full transition-colors cursor-pointer"
                  title="Próximo Projeto (Seta Direita)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            <div className="hidden sm:flex items-center gap-2">
              <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${project.badgeColor || 'text-neonCyan bg-neonCyan/10 border-neonCyan/20'}`}>
                {project.category || 'Projeto'}
              </span>
              {project.status && (
                <span className="text-[11px] font-mono text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  {project.status}
                </span>
              )}
            </div>
          </div>

          {/* Botões de Ação Topo & Fechar */}
          <div className="flex items-center gap-2">
            <button
              id="btn-copy-project-link"
              onClick={handleCopyLink}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-mono text-gray-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
              title="Copiar Link do Projeto"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-400">Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-gray-400" />
                  <span className="hidden sm:inline">Copiar Link</span>
                </>
              )}
            </button>

            <button
              id="btn-close-modal"
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 border border-white/5 transition-all cursor-pointer group"
              title="Fechar (ESC)"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Conteúdo com Scroll Interno */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">
          {/* Header do Projeto */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 sm:hidden mb-2">
                <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${project.badgeColor || 'text-neonCyan bg-neonCyan/10 border-neonCyan/20'}`}>
                  {project.category}
                </span>
                {project.status && (
                  <span className="text-[11px] font-mono text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full">
                    {project.status}
                  </span>
                )}
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                {project.title}
              </h2>
              <p className="text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Links de Ação Primários */}
            <div className="flex flex-wrap sm:flex-nowrap md:flex-col gap-3 shrink-0">
              {project.url && (
                <a
                  id="modal-btn-live-preview"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-gray-200 hover:scale-[1.02] transition-all shadow-lg shadow-white/5 cursor-pointer"
                >
                  Acessar Projeto Online <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              )}

              {project.readmeUrl && (
                <a
                  id="modal-btn-github-readme"
                  href={project.readmeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white border border-white/15 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all cursor-pointer group"
                >
                  <BookOpen className="w-4 h-4 mr-2 text-[#00e5ff]" />
                  README no GitHub <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}

              {project.github && !project.readmeUrl && (
                <a
                  id="modal-btn-github-repo"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white border border-white/15 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
                >
                  <GitBranch className="w-4 h-4 mr-2" />
                  Ver Repositório
                </a>
              )}
            </div>
          </div>

          {/* Tags de Tecnologias */}
          <div className="flex flex-wrap gap-2 pt-1 border-t border-white/5">
            {project.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-mono text-gray-300 border border-white/5 flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]"></span>
                {tag}
              </span>
            ))}
          </div>

          {/* ÁREA DA FOTO INTEIRA (Full Image Showcase) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-gray-400 flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-[#00e5ff]" />
                  Foto Inteira do Projeto
                </span>
                <span className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded">
                  Resolução Completa
                </span>
              </div>

              {project.img && (
                <a
                  href={project.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#00e5ff] hover:text-white flex items-center gap-1 transition-colors"
                >
                  Abrir imagem original <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Frame da Foto Inteira */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-2xl group flex items-center justify-center min-h-[300px] md:min-h-[440px] max-h-[640px]">
              {/* Background ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none z-10"></div>

              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto max-h-[640px] object-contain object-center z-0 transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* Botão flutuante para ver em tela cheia */}
              <a
                href={project.img}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 z-20 bg-black/70 hover:bg-black text-white p-2.5 rounded-xl border border-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs font-mono"
                title="Visualizar foto inteira em alta definição"
              >
                <Maximize2 className="w-4 h-4 text-[#00e5ff]" />
                <span className="hidden sm:inline">Foto Inteira</span>
              </a>
            </div>
          </div>

          {/* Destaques do Projeto (Highlights) */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="bg-[#121318] rounded-2xl p-6 border border-white/5 space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-neonOrange" /> Destaques e Funcionalidades Principais
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-white/[0.02] p-3.5 rounded-xl border border-white/5"
                  >
                    <span className="w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-400" />
                    </span>
                    <span className="text-sm text-gray-300 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SEÇÃO DO README.MD & DOCUMENTAÇÃO OFICIAL */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#00e5ff]" />
                <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider">
                  Documentação & README
                </h3>
              </div>

              {project.readmeUrl && (
                <a
                  href={project.readmeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00e5ff] hover:text-white transition-colors"
                >
                  <span>Ver arquivo original no GitHub</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Container Estilo Editor de Código / GitHub README */}
            <div className="bg-[#090a0f] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
              {/* Terminal / Code File Header */}
              <div className="bg-[#14151d] px-5 py-3 border-b border-white/5 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  </div>
                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#00e5ff]" />
                    README.md
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-gray-500">markdown • UTF-8</span>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <GitBranch className="w-3.5 h-3.5" />
                      srGabrielx / {project.title.replace(/\s+/g, '-')}
                    </a>
                  )}
                </div>
              </div>

              {/* Corpo do README Renderizado */}
              <div className="p-6 md:p-8 space-y-6 text-gray-300 font-sans leading-relaxed text-sm md:text-base">
                {/* Título do README */}
                <div className="border-b border-white/10 pb-4">
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    # {project.readme?.title || project.title}
                  </h1>
                  <p className="text-gray-400 italic">
                    Repositório oficial: <a href={project.github || project.readmeUrl} target="_blank" rel="noopener noreferrer" className="text-[#00e5ff] hover:underline">{project.github || 'https://github.com/srGabrielx'}</a>
                  </p>
                </div>

                {/* Visão Geral */}
                {project.readme?.overview && (
                  <div className="space-y-2">
                    <h4 className="text-base font-bold font-mono text-white flex items-center gap-2">
                      <span className="text-neonCyan">##</span> Sobre o Projeto / Visão Geral
                    </h4>
                    <p className="text-gray-300 leading-relaxed pl-4 border-l-2 border-[#00e5ff]/30">
                      {project.readme.overview}
                    </p>
                  </div>
                )}

                {/* Problema Resolvido */}
                {project.readme?.problemSolved && (
                  <div className="space-y-2">
                    <h4 className="text-base font-bold font-mono text-white flex items-center gap-2">
                      <span className="text-neonOrange">##</span> Impacto & Problema Resolvido
                    </h4>
                    <p className="text-gray-300 leading-relaxed pl-4 border-l-2 border-neonOrange/30">
                      {project.readme.problemSolved}
                    </p>
                  </div>
                )}

                {/* Tecnologias Utilizadas */}
                {project.readme?.techStack && (
                  <div className="space-y-3">
                    <h4 className="text-base font-bold font-mono text-white flex items-center gap-2">
                      <span className="text-green-400">##</span> Tecnologias & Arquitetura
                    </h4>
                    <ul className="space-y-2 pl-4">
                      {project.readme.techStack.map((tech, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-green-400 font-bold">•</span>
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Instruções de Execução / How to Run */}
                {project.readme?.howToRun && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold font-mono text-white flex items-center gap-2">
                        <span className="text-purple-400">##</span> Como Executar Localmente
                      </h4>
                      <button
                        onClick={handleCopyCode}
                        className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-400 hover:text-white transition-all flex items-center gap-1 cursor-pointer"
                      >
                        {copiedCode ? (
                          <>
                            <Check className="w-3 h-3 text-green-400" />
                            <span className="text-green-400">Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copiar Comandos</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="bg-[#050608] rounded-xl p-4 font-mono text-xs md:text-sm text-gray-200 border border-white/5 space-y-1.5 overflow-x-auto">
                      {project.readme.howToRun.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-gray-500 select-none">$</span>
                          <span className={step.startsWith('#') ? 'text-gray-500 italic' : 'text-gray-200'}>
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Rodapé do README com link final */}
                <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
                  <span>Desenvolvido por Gabriel Gonçalves (srGabrielx)</span>
                  <div className="flex items-center gap-4">
                    {project.readmeUrl && (
                      <a
                        href={project.readmeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00e5ff] hover:underline flex items-center gap-1"
                      >
                        <BookOpen className="w-3.5 h-3.5" /> Acessar README Completo no GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer do Modal */}
        <div className="px-6 py-4 border-t border-white/5 bg-[#121318]/90 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-gray-400 flex items-center gap-2">
            <span>Dica: Use as setas ← e → do teclado para navegar entre os projetos</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              Fechar
            </button>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#00e5ff] hover:bg-[#38bdf8] text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shadow-[#00e5ff]/20"
              >
                Abrir Site <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
