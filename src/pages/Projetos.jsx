import React from 'react';
import { FileText, Music, Bot, Server, ArrowRight, ArrowUpRight } from 'lucide-react';
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
      title: 'Aura Analytics',
      url: 'https://aura-analytc.vercel.app/',
      img: '/images/projects/aura-analytics.png'
    },
    {
      title: 'é O Witcher No Beat',
      url: 'https://witcher-beats-site.vercel.app',
      img: '/images/projects/witcher-beats.jpg'
    },
    {
      title: 'Auto Escola One',
      url: 'https://auto-escola-one.vercel.app',
      img: '/images/projects/auto-escola-one.jpg'
    },
    {
      title: 'Lumina Vidros',
      url: 'https://lumina-vidros.vercel.app',
      img: '/images/projects/lumina-vidros.jpg'
    },
    {
      title: 'Tia Patroa SaaS',
      url: 'https://tia-patroa-saas.vercel.app',
      img: '/images/projects/tia-patroa-saas.png'
    },
    {
      title: 'Seyller Tabacaria',
      url: 'https://seyller-tabacaria-app.vercel.app',
      img: '/images/projects/seyller-tabacaria.png'
    },
    {
      title: 'Adega Express',
      url: 'https://adega-express-ivory.vercel.app/',
      img: '/images/projects/adega-express.png'
    },
    {
      title: 'AutoTunel-Pro',
      url: 'https://auto-tunel-pro.vercel.app/',
      img: '/images/projects/auto-tunel-pro.png'
    }
  ];

  return (
    <div id="projetos" className="page-section active animate-fade-in space-y-6">
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

      <div className="flex justify-between items-end px-2 mb-2">
        <h2 className="text-sm font-mono text-gray-400 tracking-widest uppercase">/Projetos em Destaque</h2>
        <span className="text-[10px] font-mono text-gray-600 tracking-widest uppercase">Selecionados</span>
      </div>

      {/* Projetos em Destaque com SpotlightCard */}
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

      {/* Sites e Aplicativos */}
      <div className="flex justify-between items-end px-2 mb-4 pt-4">
        <h2 className="text-sm font-mono text-gray-400 tracking-widest uppercase">/Sites e Aplicativos</h2>
      </div>

      <div className="flex flex-col gap-8">
        {webApps.map((app, idx) => (
          <a
            key={idx}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full bg-bgCard rounded-[2rem] overflow-hidden card-shadow interactive-card border border-white/[0.02] group aspect-[4/3] md:aspect-video flex flex-col justify-end p-6 md:p-10"
          >
            <img
              src={app.img}
              alt={app.title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 z-0 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-0 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full mt-auto">
              <h3 className="project-photo-title text-3xl md:text-4xl text-white tracking-tighter uppercase">
                {app.title}
              </h3>
              <div className="inline-flex items-center bg-white/10 text-[#ffffff] px-6 py-3 rounded-full font-bold uppercase text-xs tracking-widest border border-white/20 group-hover:bg-white group-hover:text-[#050505] transition-all backdrop-blur-md">
                Acessar <ArrowUpRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Terminal Root com SpotlightCard */}
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
