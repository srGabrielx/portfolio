import React from 'react';
import { Download, Eye, Rocket } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';
import MagicBento from '../components/MagicBento/MagicBento';
import GradientText from '../components/GradientText';

export function Inicio() {
  const handleContactClick = (e) => {
    e.preventDefault();
    const email = 'gabriel094x@gmail.com';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `mailto:${email}`;
    } else {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank', 'noopener,noreferrer');
    }
  };

  const nameGradientColors = ['#ff4500', '#ffaa00', '#00e5ff', '#ffaa00', '#ff4500'];

  const areasDeAtuacaoCards = [
    {
      color: '#121214',
      title: 'Agentes Inteligentes',
      description: 'Desenvolvimento de IA generativa configurada com dados específicos do negócio para automação de processos.',
      label: 'IA & LLMs'
    },
    {
      color: '#121214',
      title: 'Engenharia de Dados',
      description: 'Pipelines robustos com Python, tratamento pesado em SQL Server, extraindo inteligência de dados brutos.',
      label: 'Data Pipelines'
    },
    {
      color: '#121214',
      title: 'Frontend & UI',
      description: 'Criação de interfaces web modernas e performáticas utilizando ecossistemas como React, Next.js e Vite.',
      label: 'React & Vite'
    }
  ];

  return (
    <div id="inicio" className="page-section active animate-fade-in space-y-6">
      {/* Hero Section com SpotlightCard */}
      <SpotlightCard
        className="bg-bgCard rounded-[2rem] p-6 md:p-10 card-shadow interactive-card border border-white/[0.02]"
        spotlightColor="rgba(0, 229, 255, 0.18)"
      >
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-ambient hero-ambient-cyan" aria-hidden="true"></div>
        <div className="hero-ambient hero-ambient-orange" aria-hidden="true"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#ff6b00]/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8 relative z-10">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 mt-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
              <span className="text-[10px] md:text-xs font-mono text-gray-400 uppercase tracking-widest">
                DISPONÍVEL PARA PROJETOS
              </span>
            </div>
            <h1 className="hero-title text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4">
              GABRIEL <br />
              <GradientText
                colors={nameGradientColors}
                animationSpeed={4}
                className="text-5xl md:text-7xl font-extrabold tracking-tight inline-flex"
              >
                GONÇALVES
              </GradientText>
            </h1>
          </div>

          <div className="hero-photo relative group cursor-pointer shrink-0 mt-2 sm:mt-0 z-10 w-40 md:w-56">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ff6b00] to-[#00e5ff] rounded-2xl blur opacity-20 group-hover:opacity-70 transition duration-500"></div>
            <img
              src="/images/profile.png"
              alt="Gabriel Gonçalves"
              className="relative w-full aspect-[3/4] object-cover object-top rounded-2xl border-2 border-[#121214] ring-2 ring-white/10 shadow-lg group-hover:scale-[1.03] transition-transform duration-500 bg-[#121214]"
            />

            <div className="absolute -top-4 -left-4 w-10 h-10 animate-float z-20 bg-[#121214] rounded-full p-2 border border-white/10 shadow-[0_0_15px_rgba(0,229,255,0.4)]">
              <img
                src="/images/python.svg"
                alt="Python"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 animate-float-delayed z-20 bg-[#121214] rounded-full p-1.5 border border-white/10 shadow-[0_0_15px_rgba(255,107,0,0.4)]">
              <img
                src="/images/python.svg"
                alt="Python"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <p className="text-base md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-8 z-10 relative">
          Desenvolvedor <span className="text-white font-semibold">Python</span>, focado em{' '}
          <span className="text-[#ff6b00] font-semibold">Machine Learning</span> e{' '}
          <span className="text-[#00e5ff] font-semibold">Inteligência Artificial</span>. Construo soluções em análise
          de dados, LLMs e automação para transformar dados em decisões. ⭐
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-10 relative">
          <a
            href="https://drive.google.com/drive/folders/1X5APV-fTKqF6g7cnosji36Q7zqawZsRo?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-btn-orange px-6 py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-3 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all w-full sm:w-auto cursor-pointer"
          >
            <Download className="w-5 h-5" /> Baixar Currículo
          </a>
          <a
            href="#"
            onClick={handleContactClick}
            id="btn-contato"
            className="px-6 py-4 rounded-xl font-semibold text-neonCyan border border-neonCyan/30 hover:bg-neonCyan/10 transition-all hover:scale-[1.03] flex items-center justify-center gap-3 w-full sm:w-auto cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            Entrar em Contato
          </a>
        </div>

        <div className="hero-console relative z-10 mt-8 max-w-2xl" aria-label="Status de trabalho">
          <div className="hero-console-status">
            <span className="hero-console-pulse" aria-hidden="true"></span>
            <span>SISTEMA ONLINE</span>
          </div>
          <div className="hero-console-line">
            <span className="text-[#00e5ff]">&gt;_</span>
            <span>Construindo soluções com dados, IA e automação</span>
            <span className="hero-console-cursor" aria-hidden="true"></span>
          </div>
        </div>
      </SpotlightCard>

      {/* Stats Grid com SpotlightCard */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <SpotlightCard
          className="bg-bgCard rounded-2xl p-6 card-shadow border border-white/[0.02] text-center hover:border-[#ff6b00]/30 transition-colors"
          spotlightColor="rgba(255, 107, 0, 0.25)"
        >
          <h4 className="text-3xl font-black text-white mb-1">2+</h4>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Anos c/ Python</span>
        </SpotlightCard>

        <SpotlightCard
          className="bg-bgCard rounded-2xl p-6 card-shadow border border-white/[0.02] text-center hover:border-[#00e5ff]/30 transition-colors"
          spotlightColor="rgba(0, 229, 255, 0.25)"
        >
          <h4 className="text-3xl font-black text-white mb-1">10+</h4>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Projetos IA</span>
        </SpotlightCard>

        <SpotlightCard
          className="bg-bgCard rounded-2xl p-6 card-shadow border border-white/[0.02] text-center hover:border-[#ffaa00]/30 transition-colors"
          spotlightColor="rgba(255, 170, 0, 0.25)"
        >
          <h4 className="text-3xl font-black text-white mb-1">SQL</h4>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Modelagem Dados</span>
        </SpotlightCard>

        <SpotlightCard
          className="bg-bgCard rounded-2xl p-6 card-shadow border border-white/[0.02] text-center hover:border-[#00e5ff]/30 transition-colors"
          spotlightColor="rgba(0, 229, 255, 0.25)"
        >
          <h4 className="text-3xl font-black text-white mb-1">Pandas</h4>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            Manipulação de Dados
          </span>
        </SpotlightCard>
      </div>

      {/* Visão com SpotlightCard */}
      <SpotlightCard
        id="visao"
        className="bg-bgCard rounded-[2rem] p-8 md:p-12 card-shadow interactive-card border border-white/[0.02]"
        spotlightColor="rgba(255, 170, 0, 0.2)"
      >
        <div className="absolute bottom-6 left-8 opacity-5 select-none pointer-events-none group-hover:opacity-10 transition-opacity">
          <span className="text-7xl md:text-9xl font-black font-mono">01</span>
        </div>
        <div className="text-[#ff6b00] text-xs font-mono mb-6 tracking-widest uppercase flex items-center gap-2 animate-pulse-glow w-max">
          <Eye className="w-4 h-4" /> _A Visão
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl leading-tight">
          Simplificar o complexo com{' '}
          <GradientText
            colors={['#ffaa00', '#ff6b00', '#00e5ff', '#ffaa00']}
            animationSpeed={5}
            className="inline-flex font-bold"
          >
            IA acessível.
          </GradientText>
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed mb-6 md:mb-6">
          Conectar dados a agentes inteligentes e sistemas RAG que não apenas buscam, mas compreendem contexto, de
          forma privada, rápida e escalável.
        </p>
        <div className="text-right text-[10px] md:text-xs font-mono text-gray-600 tracking-widest uppercase mt-4">
          Arquitetura Primeiro
        </div>
      </SpotlightCard>

      {/* Áreas de Atuação com Magic Bento */}
      <div className="flex justify-between items-end px-2 pt-4">
        <h2 className="text-sm font-mono text-gray-400 tracking-widest uppercase">/ Áreas de Atuação</h2>
        <span className="text-[10px] font-mono text-[#00e5ff] tracking-widest uppercase animate-pulse">
          Magic Bento Active
        </span>
      </div>

      <MagicBento cards={areasDeAtuacaoCards} enableStars={true} enableSpotlight={true} enableTilt={true} />

      {/* Banner de Fechamento (CTA Direto) com SpotlightCard */}
      <SpotlightCard
        className="mt-8 w-full bg-bgCard border-t-2 border-white/5 rounded-[2rem] p-8 md:p-12 card-shadow transition-colors group"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-neonCyan rounded-full blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-neonOrange rounded-full blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">
              Pronto para escalar?
            </h3>
            <p className="text-sm text-gray-400 font-mono">Transforme dados complexos em soluções de alta conversão.</p>
          </div>

          <a
            href="https://wa.me/5511964589578"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:scale-105 hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer shrink-0"
          >
            Iniciar Projeto <Rocket className="w-5 h-5 ml-2" />
          </a>
        </div>
      </SpotlightCard>
    </div>
  );
}

export default Inicio;
