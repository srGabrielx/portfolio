import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Inicio from './pages/Inicio';
import Projetos from './pages/Projetos';
import Stack from './pages/Stack';

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'projetos' || hash === 'stack' || hash === 'inicio') {
      return hash;
    }
    return 'inicio';
  });

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved && saved !== 'light' && saved !== 'dark') {
      return saved;
    }
    return 'cyber';
  });

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('loading-active');
    } else {
      document.body.classList.remove('loading-active');
    }
    return () => {
      document.body.classList.remove('loading-active');
    };
  }, [isLoading]);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    document.body.classList.remove('light-mode');
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'projetos' || hash === 'stack' || hash === 'inicio') {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Otimização de SEO Dinâmico por Página
  useEffect(() => {
    const pageSEO = {
      inicio: {
        title: 'Gabriel Gonçalves | Desenvolvedor IA, Machine Learning & Python',
        description:
          'Portfólio de Gabriel Gonçalves: Desenvolvedor Python especialista em Inteligência Artificial, Machine Learning, Sistemas RAG e Automação de Processos.',
      },
      projetos: {
        title: 'Projetos de IA, Python & Web Apps | Gabriel Gonçalves',
        description:
          'Explore projetos desenvolvidos por Gabriel Gonçalves: LocalChatPDF, Aura Analytics, AutoTunel, automações inteligentes e APIs de alta performance.',
      },
      stack: {
        title: 'Stack Tecnológica, IA & Certificações | Gabriel Gonçalves',
        description:
          'Conheça as tecnologias, habilidades em Python, Machine Learning, formação acadêmica na Uniasselvi e certificações de Gabriel Gonçalves.',
      }
    };

    const currentSEO = pageSEO[currentPage] || pageSEO.inicio;
    document.title = currentSEO.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentSEO.description);
    }
    const metaTitle = document.querySelector('meta[name="title"]');
    if (metaTitle) {
      metaTitle.setAttribute('content', currentSEO.title);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', currentSEO.title);
    }
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', currentSEO.description);
    }
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', currentSEO.title);
    }
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', currentSEO.description);
    }
  }, [currentPage]);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    if (window.location.hash !== `#${page}`) {
      window.history.replaceState(null, '', `#${page}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="min-h-screen">
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}

      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        theme={theme}
        onSelectTheme={handleSelectTheme}
      />

      <main className="max-w-4xl mx-auto px-4 md:px-6 mt-32 mb-24 relative min-h-[75vh]">
        {currentPage === 'inicio' && <Inicio currentTheme={theme} />}
        {currentPage === 'projetos' && <Projetos currentTheme={theme} />}
        {currentPage === 'stack' && <Stack currentTheme={theme} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
