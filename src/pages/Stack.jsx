import React from 'react';
import {
  Code,
  Brain,
  Database,
  Network,
  LayoutTemplate,
  Zap,
  BarChart,
  GraduationCap,
  Cpu,
  Languages,
  Blocks,
  ShieldCheck,
  Rocket,
  ArrowRight
} from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';
import GradientText from '../components/GradientText';

export function Stack() {
  const marqueeItems = [
    { icon: <Code className="w-5 h-5 text-[#ffaa00]" />, text: 'Python' },
    { icon: <Brain className="w-5 h-5 text-[#00e5ff]" />, text: 'Machine Learning' },
    { icon: <Database className="w-5 h-5 text-[#ff6b00]" />, text: 'SQL' },
    { icon: <Network className="w-5 h-5 text-[#ffaa00]" />, text: 'LLMs' },
    { icon: <LayoutTemplate className="w-5 h-5 text-[#00e5ff]" />, text: 'Next.js' },
    { icon: <Zap className="w-5 h-5 text-[#ff6b00]" />, text: 'Vite' },
    { icon: <BarChart className="w-5 h-5 text-[#00e5ff]" />, text: 'Power BI' },
    { icon: <Code className="w-5 h-5 text-[#ffaa00]" />, text: 'Python' },
    { icon: <Brain className="w-5 h-5 text-[#00e5ff]" />, text: 'Machine Learning' },
    { icon: <Database className="w-5 h-5 text-[#ff6b00]" />, text: 'SQL' },
    { icon: <Network className="w-5 h-5 text-[#ffaa00]" />, text: 'LLMs' },
    { icon: <LayoutTemplate className="w-5 h-5 text-[#00e5ff]" />, text: 'Next.js' },
    { icon: <Zap className="w-5 h-5 text-[#ff6b00]" />, text: 'Vite' },
    { icon: <BarChart className="w-5 h-5 text-[#00e5ff]" />, text: 'Power BI' }
  ];

  const bradescoCerts = [
    'IA para PMEs',
    'Banco de Dados',
    'Power BI',
    'Python & Java',
    'Lógica & Design'
  ];

  const senaiCerts = ['Blockchain', 'Tecnologia 5G', 'TI - Finanças'];

  const aprendeAkiCerts = ['Oficial de Rede', 'NR10', 'NR35'];

  return (
    <div id="stack" className="page-section active animate-fade-in space-y-6">
      {/* Marquee Banner com SpotlightCard */}
      <SpotlightCard
        className="bg-bgCard rounded-[2rem] p-8 card-shadow border border-white/[0.02] mb-6 marquee-section"
        spotlightColor="rgba(255, 170, 0, 0.15)"
      >
        <div className="marquee-container marquee-mask w-full flex items-center">
          <div className="flex gap-12 items-center text-gray-400 font-mono text-sm md:text-base animate-marquee w-max">
            {marqueeItems.map((item, idx) => (
              <span key={idx} className="flex items-center gap-2">
                {item.icon} {item.text}
              </span>
            ))}
          </div>
        </div>
      </SpotlightCard>

      {/* Trajetória Acadêmica com SpotlightCard */}
      <SpotlightCard
        className="bg-bgCard rounded-[2rem] p-8 card-shadow interactive-card border border-white/[0.02]"
        spotlightColor="rgba(255, 170, 0, 0.25)"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#ffaa00]/10 text-[#ffaa00] flex items-center justify-center shadow-[0_0_15px_rgba(255,170,0,0.15)] border border-[#ffaa00]/20">
            <GraduationCap className="w-6 h-6" />
          </div>
          <span className="text-[#ff6b00] text-xs font-mono tracking-widest uppercase">
            Trajetória Acadêmica
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2 leading-tight">Inteligência Artificial e Machine Learning</h3>
        <p className="text-gray-400 text-sm mb-8">Uniasselvi - Cursando</p>
        <div className="flex flex-wrap items-center gap-4 mt-auto">
          <span className="px-4 py-1.5 rounded-full bg-[#ffaa00]/10 border border-[#ffaa00]/20 text-[#ffaa00] text-xs font-bold font-mono shadow-[0_0_10px_rgba(255,170,0,0.2)]">
            Conclusão 2027
          </span>
          <div className="flex gap-3 text-xs font-mono text-gray-500 uppercase tracking-widest">
            <span>PT C2</span> | <span>EN A2</span> | <span>ES A2</span>
          </div>
        </div>
      </SpotlightCard>

      <div className="flex justify-between items-end pt-4 px-2 mb-2">
        <h2 className="text-sm font-mono text-[#ffaa00] tracking-widest uppercase">Certificações</h2>
        <span className="text-[10px] font-mono text-gray-600 tracking-widest uppercase">Formação Contínua</span>
      </div>

      {/* Matriz de Treinamento */}
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-sm font-mono text-gray-400 tracking-widest uppercase">/Matriz de Treinamento</h2>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00e5ff]"></span>
          </span>
          <span className="text-[10px] font-mono text-[#00e5ff] tracking-widest uppercase">Sistema Operante</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bloco 1: Processamento Central (Faculdade) */}
        <SpotlightCard
          className="md:col-span-2 bg-bgCard border border-white/[0.02] rounded-[2rem] p-8 md:p-10 card-shadow interactive-card group"
          spotlightColor="rgba(0, 229, 255, 0.25)"
        >
          <div className="absolute -right-20 -top-20 w-48 h-48 bg-[#00e5ff] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>

          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#00e5ff]/10 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-[#00e5ff]" />
            </div>
            <div>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-1">
                Core Principal
              </span>
              <h3 className="text-xl font-black text-white uppercase tracking-tighter">
                Inteligência Artificial & Machine Learning
              </h3>
            </div>
          </div>

          <div className="relative z-10">
            <p className="text-sm text-gray-400 font-mono mb-4">Instituição: Uniasselvi</p>
            <div className="w-full bg-[#050505] rounded-full h-2.5 mb-2 border border-white/5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#00e5ff] to-[#ff6b00] h-2.5 rounded-full"
                style={{ width: '75%' }}
              ></div>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              <span>Treinamento andamento</span>
              <span className="text-[#00e5ff]">Conclusão: 2027</span>
            </div>
          </div>
        </SpotlightCard>

        {/* Bloco 2: Idiomas */}
        <SpotlightCard
          className="bg-bgCard border border-white/[0.02] rounded-[2rem] p-8 md:p-10 card-shadow interactive-card flex flex-col justify-between group"
          spotlightColor="rgba(255, 170, 0, 0.25)"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#ffaa00]/10 flex items-center justify-center">
              <Languages className="w-6 h-6 text-[#ffaa00]" />
            </div>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">IDIOMA</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full">
            <div className="flex items-center gap-2 border border-white/5 bg-white/5 px-3 py-1.5 rounded-lg hover:border-[#ffaa00]/30 transition-colors">
              <span className="text-sm font-black text-white tracking-tighter uppercase whitespace-nowrap">
                Português
              </span>
              <span className="text-xs font-mono text-[#ffaa00] bg-[#ffaa00]/10 px-2 py-0.5 rounded whitespace-nowrap">
                Nativo C2
              </span>
            </div>

            <div className="flex items-center gap-2 border border-white/5 bg-white/5 px-3 py-1.5 rounded-lg hover:border-white/20 transition-colors">
              <span className="text-sm font-black text-white tracking-tighter uppercase whitespace-nowrap">
                Inglês
              </span>
              <span className="text-xs font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded whitespace-nowrap">
                A2
              </span>
            </div>

            <div className="flex items-center gap-2 border border-white/5 bg-white/5 px-3 py-1.5 rounded-lg hover:border-white/20 transition-colors">
              <span className="text-sm font-black text-white tracking-tighter uppercase whitespace-nowrap">
                Espanhol
              </span>
              <span className="text-xs font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded whitespace-nowrap">
                A2
              </span>
            </div>
          </div>
        </SpotlightCard>
      </div>

      {/* Bloco 3: Certificações */}
      <SpotlightCard
        className="w-full bg-[#050505] border border-white/10 rounded-[2rem] p-8 md:p-10 card-shadow mt-6 group"
        spotlightColor="rgba(255, 107, 0, 0.2)"
      >
        <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-[#ff6b00] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>

        <div className="flex items-center gap-4 mb-8 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-[#ff6b00]/10 flex items-center justify-center">
            <Blocks className="w-6 h-6 text-[#ff6b00]" />
          </div>
          <div>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-1">EXTRAS</span>
            <h3 className="text-xl font-black text-white uppercase tracking-tighter">Certificações</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div>
            <h4 className="text-sm font-black text-gray-300 uppercase mb-3 flex items-center gap-2">
              <Database className="w-4 h-4 text-[#ff6b00]" /> Bradesco
            </h4>
            <div className="flex flex-wrap gap-2">
              {bradescoCerts.map((cert, cIdx) => (
                <span
                  key={cIdx}
                  className="px-3 py-1.5 bg-white/5 rounded-md text-xs text-gray-400 font-mono border border-white/5 hover:border-white/20 transition-colors"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black text-gray-300 uppercase mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00e5ff]" /> SENAI
            </h4>
            <div className="flex flex-wrap gap-2">
              {senaiCerts.map((cert, cIdx) => (
                <span
                  key={cIdx}
                  className="px-3 py-1.5 bg-white/5 rounded-md text-xs text-gray-400 font-mono border border-white/5 hover:border-[#00e5ff]/30 transition-colors"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black text-gray-300 uppercase mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#ffaa00]" /> AprendeAki
            </h4>
            <div className="flex flex-wrap gap-2">
              {aprendeAkiCerts.map((cert, cIdx) => (
                <span
                  key={cIdx}
                  className="px-3 py-1.5 bg-white/5 rounded-md text-xs text-gray-400 font-mono border border-white/5 hover:border-[#ffaa00]/30 transition-colors"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SpotlightCard>

      {/* Banner Parallax / Órbita */}
      <SpotlightCard
        className="w-full mt-24 mb-24 relative rounded-[2rem] overflow-hidden space-banner-container min-h-[450px] flex items-center justify-center card-shadow border border-white/[0.02]"
        spotlightColor="rgba(0, 229, 255, 0.25)"
      >
        <div className="space-layer stars-1"></div>
        <div className="space-layer stars-2"></div>
        <div className="space-layer stars-3"></div>

        <div className="absolute inset-0 space-gradient-y opacity-90 z-0 pointer-events-none"></div>
        <div className="absolute inset-0 space-gradient-x opacity-90 z-0 pointer-events-none"></div>

        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 animate-pulse-glow backdrop-blur-sm">
            <Rocket className="w-10 h-10 text-[#00e5ff]" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4 drop-shadow-xl">
            Expandindo{' '}
            <GradientText
              colors={['#00e5ff', '#ffaa00', '#ff6b00', '#00e5ff']}
              animationSpeed={3.5}
              className="text-4xl md:text-6xl font-black tracking-tighter uppercase"
            >
              Fronteiras
            </GradientText>
          </h2>

          <p className="text-gray-400 font-mono text-sm md:text-base max-w-2xl mb-10 leading-relaxed">
            A tecnologia não obedece limites físicos. Orquestração de inteligência artificial, processamento de
            dados em hiperescala e arquiteturas escaláveis.
          </p>

          <a
            href="https://wa.me/5511964589578"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#00e5ff] text-[#050505] px-10 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:scale-105 hover:bg-[#ffaa00] transition-all duration-300 group shadow-lg cursor-pointer"
          >
            Iniciar Órbita{' '}
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </SpotlightCard>
    </div>
  );
}

export default Stack;
