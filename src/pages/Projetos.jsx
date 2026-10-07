import React from 'react';
import {
  FileText,
  Music,
  Bot,
  Server,
  ArrowRight,
  ArrowUpRight,
  Terminal,
  Sparkles,
  Layers,
  BarChart3,
  Headphones,
  Car,
  Maximize2,
  Wine,
  Sliders,
  AudioWaveform
} from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';

export function Projetos() {
  const projects = [
    {
      num: 'Projeto 01',
      title: 'LocalChatPDF',
      description:
        'Sistema interativo que permite conversar com documentos PDF localmente, utilizando modelos de linguagem (LLMs) para extração rápida e inteligente de informações.',
      tags: ['Python', 'LLMs / NLP'],
      link: 'https://github.com/srGabrielx/LocalChatPDF',
      icon: <FileText className="w-5 h-5 text-[#00e5ff]" />,
      bgIcon: 'bg-[#00e5ff]/10',
      colorText: 'text-[#00e5ff]',
      spotlightColor: 'rgba(0, 229, 255, 0.25)'
    },
    {
      num: 'Projeto 02',
      title: 'AutoTunel',
      description:
        'Gerador de padrões melódicos dinâmico desenvolvido em Python. Utiliza randomização estruturada em escalas musicais para criar sequências de áudio exportáveis.',
      tags: ['Python', 'Lógica Algorítmica'],
      link: 'https://github.com/srGabrielx/AutoTunel',
      icon: <Music className="w-5 h-5 text-[#ffaa00]" />,
      bgIcon: 'bg-[#ffaa00]/10',
      colorText: 'text-[#ffaa00]',
      spotlightColor: 'rgba(255, 170, 0, 0.25)'
    },
    {
      num: 'Projeto 03',
      title: 'ChatBootCriaDados',
      description:
        'Bot inteligente desenvolvido para automação na criação e manipulação estruturada de dados de forma rápida, agilizando testes e processos repetitivos.',
      tags: ['Python', 'Automação'],
      link: 'https://github.com/srGabrielx/ChatBootCriaDados',
      icon: <Bot className="w-5 h-5 text-[#ff6b00]" />,
      bgIcon: 'bg-[#ff6b00]/10',
      colorText: 'text-[#ff6b00]',
      spotlightColor: 'rgba(255, 107, 0, 0.25)'
    },
    {
      num: 'Projeto 04',
      title: 'Fast-API-Cliente-Produto',
      description:
        'API RESTful de alta performance desenvolvida com FastAPI para gestão e comunicação eficiente do relacionamento em bases de clientes e produtos.',
      tags: ['FastAPI', 'Backend'],
      link: 'https://github.com/srGabrielx/Fast-API-CLiente-Produto',
      icon: <Server className="w-5 h-5 text-[#22c55e]" />,
      bgIcon: 'bg-[#22c55e]/10',
      colorText: 'text-[#22c55e]',
      spotlightColor: 'rgba(34, 197, 94, 0.25)'
    }
  ];

  const webApps = [
    {
      id: 'limpawinx',
      title: 'LIMPAWINX',
      description: 'Otimização profunda de sistema, limpeza de cache e remoção de arquivos temporários com interface intuitiva.',
      category: 'Utilitário Desktop',
      url: 'https://github.com/srGabrielx/LimpaWinx',
      img: '/images/projects/LinpaWin.png',
      icon: <Terminal size={14} className="text-blue-400" />,
      color: 'from-blue-500/20 to-blue-900/5',
      accent: 'group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]'
    },
    {
      id: 'botao-ai',
      title: 'BOTÃO AI',
      description: 'Transforme suas ideias em botões incríveis. Crie, personalize e compartilhe componentes com Inteligência Artificial.',
      category: 'Plataforma SaaS',
      url: 'https://botao-ai.vercel.app',
      img: '/images/projects/botao.png',
      icon: <Sparkles size={14} className="text-purple-400" />,
      color: 'from-purple-500/20 to-fuchsia-900/5',
      accent: 'group-hover:border-purple-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]'
    },
    {
      id: 'criar-curriculo',
      title: 'CRIAR CURRÍCULO',
      description: 'Gerador inteligente de currículos profissionais de alta conversão com layouts dinâmicos e exportação rápida.',
      category: 'Ferramenta Web / SaaS',
      url: 'https://criacurriculo-alpha.vercel.app/dashboard',
      img: '/images/projects/CriaCurriculo.png',
      icon: <Layers size={14} className="text-emerald-400" />,
      color: 'from-emerald-500/20 to-teal-900/5',
      accent: 'group-hover:border-emerald-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]'
    },
    {
      id: 'aura-analytics',
      title: 'AURA ANALYTICS',
      description: 'Painel moderno de análise de dados e métricas em tempo real com gráficos avançados e alta performance.',
      category: 'Dashboard & Analytics',
      url: 'https://aura-analytc.vercel.app/',
      img: '/images/projects/aura-analytics.png',
      icon: <BarChart3 size={14} className="text-cyan-400" />,
      color: 'from-cyan-500/20 to-blue-900/5',
      accent: 'group-hover:border-cyan-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]'
    },
    {
      id: 'witcher-beats',
      title: 'É O WITCHER NO BEAT',
      description: 'Portfólio musical e plataforma para distribuição e audição de produções fonográficas e instrumentais.',
      category: 'Música & Áudio',
      url: 'https://witcher-beats-site.vercel.app',
      img: '/images/projects/witcher-beats.jpg',
      icon: <Headphones size={14} className="text-amber-400" />,
      color: 'from-amber-500/20 to-orange-900/5',
      accent: 'group-hover:border-amber-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]'
    },
    {
      id: 'auto-escola-one',
      title: 'AUTO ESCOLA ONE',
      description: 'Website moderno e institucional com agendamento online e informações completas para formação de condutores.',
      category: 'Web Institucional',
      url: 'https://auto-escola-one.vercel.app',
      img: '/images/projects/auto-escola-one.jpg',
      icon: <Car size={14} className="text-sky-400" />,
      color: 'from-sky-500/20 to-blue-900/5',
      accent: 'group-hover:border-sky-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.3)]'
    },
    {
      id: 'lumina-vidros',
      title: 'LUMINA VIDROS',
      description: 'Catálogo digital e landing page de alta conversão para vidraçaria e soluções arquitetônicas elegantes.',
      category: 'Comércio & Serviços',
      url: 'https://lumina-vidros.vercel.app',
      img: '/images/projects/lumina-vidros.jpg',
      icon: <Maximize2 size={14} className="text-indigo-400" />,
      color: 'from-indigo-500/20 to-violet-900/5',
      accent: 'group-hover:border-indigo-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]'
    },
    {
      id: 'adega-express',
      title: 'ADEGA EXPRESS',
      description: 'Sistema de catálogo ágil para adega com visual noturno, produtos selecionados e canal de pedidos veloz.',
      category: 'Delivery / Catálogo',
      url: 'https://adega-express-ivory.vercel.app/',
      img: '/images/projects/adega-express.png',
      icon: <Wine size={14} className="text-purple-400" />,
      color: 'from-purple-500/20 to-pink-900/5',
      accent: 'group-hover:border-purple-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]'
    },
    {
      id: 'auto-tunel-edit',
      title: 'AUTOTUNEL EDIT',
      description: 'Editor dinâmico de escalas e padrões musicais para manipulação rápida de matrizes sonoras.',
      category: 'Estúdio / Áudio',
      url: 'https://auto-tunel-edit.vercel.app',
      img: '/images/projects/AutoTunelEdit.png',
      icon: <Sliders size={14} className="text-orange-400" />,
      color: 'from-orange-500/20 to-amber-900/5',
      accent: 'group-hover:border-orange-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]'
    },
    {
      id: 'auto-tunel-pro',
      title: 'AUTOTUNEL-PRO',
      description: 'Versão avançada para produção com controle algorítmico aprofundado e geração de melodias em tempo real.',
      category: 'Software Web / Pro Audio',
      url: 'https://auto-tunel-pro.vercel.app/',
      img: '/images/projects/auto-tunel-pro.png',
      icon: <AudioWaveform size={14} className="text-teal-400" />,
      color: 'from-teal-500/20 to-emerald-900/5',
      accent: 'group-hover:border-teal-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.3)]'
    }
  ];

  return (
    <div id="projetos" className="page-section active animate-fade-in space-y-6">
      <style>{`
        .image-zoom-transition {
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      {/* Walking Character Animated Bar */}
      <div className="w-full h-1.5 bg-white/5 rounded-full relative mt-4 mb-14 overflow-visible">
        <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-neonOrange to-neonCyan rounded-full animate-push-bar shadow-[0_0_15px_var(--accent-primary)]">
          <div className="absolute -right-[34px] top-1/2 -translate-y-1/2 flex items-center text-neonCyan bg-bgBase pl-1 z-10">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-[0_0_5px_var(--accent-primary)]"
            >
              <circle cx="14" cy="7" r="3"></circle>
              <path d="M12 10 L8 16"></path>
              <path d="M10 13 L18 13"></path>
              <path d="M8 16 L4 21"></path>
              <path d="M8 16 L12 21"></path>
            </svg>
            <div className="w-1.5 h-6 bg-neonCyan rounded-sm ml-0.5 shadow-[0_0_10px_var(--accent-primary)]"></div>
          </div>
        </div>
      </div>

      {/* Projetos em Destaque (Mantidos 100% intactos com SpotlightCard) */}
      <div className="flex justify-between items-end px-2 mb-2">
        <h2 className="text-sm font-mono text-gray-400 tracking-widest uppercase">/Projetos em Destaque</h2>
        <span className="text-[10px] font-mono text-gray-600 tracking-widest uppercase">Selecionados</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <SpotlightCard
            key={idx}
            className="bg-bgCard rounded-[2rem] p-8 card-shadow interactive-card border border-white/[0.02]"
            spotlightColor={proj.spotlightColor}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-2xl ${proj.bgIcon} flex items-center justify-center`}>
                {proj.icon}
              </div>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{proj.num}</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">{proj.title}</h3>
            <p className="text-gray-400 text-sm md:text-base flex-grow mb-8 leading-relaxed">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto mb-6">
              {proj.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-gray-300 font-mono border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-mono ${proj.colorText} hover:text-white flex items-center gap-2 mt-auto w-fit transition-colors group`}
            >
              Ver no GitHub <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </SpotlightCard>
        ))}
      </div>

      {/* Sites e Aplicativos (Agora com o novo design moderno de showcase com imagem) */}
      <div className="mb-6 mt-12 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <p className="text-xs font-mono tracking-[0.2em] text-gray-400 uppercase">
              GG / Portfólio
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white flex items-center gap-3">
            <span className="text-gray-600 font-extralight">/</span>
            SITES E APLICATIVOS
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-gray-400 max-w-xs md:text-right font-light">
          Soluções digitais desenvolvidas com foco em performance e design de alto padrão.
        </p>
      </div>

      {/* Grid de Cards com Imagem no estilo solicitado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {webApps.map((project) => (
          <div
            key={project.id}
            className={`group relative h-[450px] sm:h-[490px] w-full rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 transition-all duration-700 ease-out hover:-translate-y-1 ${project.accent}`}
          >
            {/* Imagem de Fundo com Alta Nitidez e Zoom Suave */}
            <div className="absolute inset-0 w-full h-full bg-zinc-950">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover opacity-100 image-zoom-transition group-hover:scale-105"
              />
            </div>

            {/* Gradiente sutil apenas na base para garantir leitura perfeita sem ofuscar a imagem */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10 pointer-events-none"></div>

            {/* Gradiente de Cor Dinâmico baseado no projeto (Brilho suave na base) */}
            <div
              className={`absolute -bottom-24 -inset-x-24 h-64 bg-gradient-to-t ${project.color} blur-3xl opacity-0 group-hover:opacity-75 transition-opacity duration-700 pointer-events-none`}
            ></div>

            {/* Conteúdo Principal do Card */}
            <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-between">
              {/* Header do Card (Categoria / Pill com fundo escuro e blur para contraste perfeito) */}
              <div className="flex justify-start">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-medium tracking-wide text-zinc-100 shadow-md">
                  {project.icon}
                  {project.category}
                </div>
              </div>

              {/* Bottom Content do Card com Fundo Protetor Glassmorphism para Legibilidade Total */}
              <div className="flex flex-col gap-3.5 transform translate-y-0 transition-transform duration-500">
                {/* Painel escurecido com vidro para isolar os textos do fundo da imagem */}
                <div className="p-4 sm:p-5 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.85)]">
                  {/* Badge de fundo específico para o nome do projeto */}
                  <div className="inline-flex items-center mb-2.5">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-950/90 border border-white/20 text-lg sm:text-xl font-bold tracking-tight text-white shadow-inner">
                      <span className="w-1.5 h-1.5 rounded-full bg-neonCyan shadow-[0_0_8px_var(--accent-primary)] animate-pulse"></span>
                      {project.title}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed line-clamp-3 group-hover:text-zinc-100 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>

                {/* Botão de Ação "Chic" e Minimalista */}
                <div className="pt-0">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-sm font-medium text-white hover:bg-white hover:text-black hover:border-transparent transition-all duration-300 ease-in-out group/btn shadow-lg"
                  >
                    <span>Acessar Projeto</span>
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-black/10 transition-colors">
                      <ArrowUpRight
                        size={14}
                        className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Brilho do cursor sutil no hover do card */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06)_0%,transparent_50%)]"></div>
          </div>
        ))}
      </div>

      {/* Terminal Root com SpotlightCard (Mantido 100% intacto) */}
      <div className="flex justify-between items-end mb-4 pt-4">
        <h2 className="text-sm font-mono text-gray-400 tracking-widest uppercase">/Acesso Root</h2>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]"></span>
          </span>
          <span className="text-[10px] font-mono text-[#22c55e] tracking-widest uppercase">Terminal Online</span>
        </div>
      </div>

      <SpotlightCard
        className="w-full bg-bgCard border border-white/5 rounded-xl card-shadow group p-0"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="bg-white/5 border-b border-white/5 px-4 py-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="ml-4 text-xs font-mono text-gray-500 tracking-widest">
            root@gabriel094x:~/matriz_neural
          </span>
        </div>

        <div className="p-6 md:p-10 font-mono text-sm md:text-base text-gray-300 space-y-3">
          <p>
            <span className="text-[#22c55e] font-bold">➜</span> <span className="text-[#00e5ff] font-bold">~</span>{' '}
            ./iniciar_protocolo.sh
          </p>

          <div className="space-y-1 pl-4 border-l border-white/10 mt-2">
            <p className="text-gray-500">
              [INFO] Carregando pesos neurais e LLMs............ <span className="text-[#22c55e]">[100%]</span>
            </p>
            <p className="text-gray-500">
              [INFO] Inicializando instâncias Python & FastAPI... <span className="text-[#22c55e]">[OK]</span>
            </p>
            <p className="text-gray-500">
              [INFO] Sincronizando automações web n8n.io......... <span className="text-[#22c55e]">[OK]</span>
            </p>
            <p className="text-gray-500">
              [INFO] Afinamento de áudio em background........... <span className="text-[#22c55e]">[OK]</span>
            </p>
          </div>

          <br />
          <p className="font-black text-white tracking-tighter">&gt; SISTEMA OPERACIONAL PRONTO PARA ESCALONAMENTO.</p>
          <p className="text-[#ffaa00]">
            &gt; AVISO: A injeção deste perfil em seu projeto resultará em automação estruturada e altíssima
            performance.
          </p>
          <br />

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="text-[#22c55e] font-bold">➜</span> <span className="text-[#00e5ff] font-bold">~</span>
            <span className="text-gray-400">sudo execute</span>

            <a
              href="https://wa.me/5511964589578"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-neonCyan/10 text-neonCyan px-4 py-1.5 border border-neonCyan/30 hover:bg-neonCyan hover:text-bgBase transition-all font-black uppercase tracking-widest cursor-pointer"
            >
              --protocolo-contratar
            </a>

            <span className="w-3 h-3 bg-[#0fe5ff] rounded-full animate-pulse inline-block align-middle ml-2"></span>
            <span className="relative inline-flex h-3 w-3 align-middle ml-2 animate-color-cycle">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0fe5ff] opacity-25"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e5ff]"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0fe5ff]"></span>
            </span>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}

export default Projetos;
