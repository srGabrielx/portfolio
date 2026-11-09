# Otimização do Carregamento Real (0–100%), Padronização de Logos/Ícones Profissionais e Correção de Favicon/SEO

Aprimoramento completo da inicialização do portfólio com pré-carregamento real dos ativos visuais (0% a 100%), padronização de ícones e logos vetoriais oficiais para todas as tecnologias e certificações, novo favicon vetorial de alta definição e correção das imagens de prévia OpenGraph/SEO.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> **Decisões Confirmadas pelo Usuário**:
> 1. **Carregamento Inicial**: Pré-carregar as imagens reais do portfólio com barra e contador de progresso real de **0% a 100%**, mantendo a opção rápida de pular (`[ESC]` / botão Pular).
> 2. **Logos e Ícones Profissionais**: Padronizar ícones oficiais de tecnologias (Python, FastAPI, SQL, Pandas, Power BI, React, Next.js, Vite, IA/LLMs) e insígnias das instituições/certificações (Bradesco, SENAI, AprendeAki, Uniasselvi) em todas as seções.
> 3. **Favicon & SEO**: Atualizar o favicon com ícone vetorial profissional de alta definição e corrigir as meta tags OpenGraph/Twitter/JSON-LD para apontar corretamente para a imagem de prévia existente (`/images/og-preview.jpg`).

---

### 1. Overview & Core Concept

- **O que faz**:
  - Transforma a tela de carregamento em um pré-carregador real de ativos (foto de perfil, ícones e miniaturas dos projetos), exibindo progresso percentual exato (`0%` até `100%`) e liberando a interface com todas as imagens já em cache.
  - Introduz ícones vetoriais oficiais e nítidos para cada tecnologia, estatística, idioma e certificação nas páginas **Início**, **Projetos** e **Stack**, além de um emblema vetorial na barra de navegação.
  - Corrige a disponibilidade de todos os ativos de imagem, adiciona fallback visual resiliente caso alguma imagem externa/local falhe e corrige o caminho de prévia social (`og-preview.jpg`) e o favicon principal.
- **Público-Alvo**: Recrutadores técnicos, gestores de tecnologia e clientes que avaliam atenção aos detalhes, performance de carregamento e acabamento visual profissional.
- **Valor Principal**: Elimina imagens carregando aos poucos após a abertura do site, corrige links de prévia ao compartilhar o link no LinkedIn/WhatsApp e eleva a identidade visual com logos autênticos de cada stack.

---

### 2. User Experience & Visual Design

- **Fluxo de Carregamento (0% a 100%)**:
  - Ao abrir o site, o HUD inicia o pré-carregamento em paralelo das imagens críticas (`profile.png`, `python.svg` e screenshots dos projetos).
  - A barra de progresso avança proporcionalmente aos arquivos carregados enquanto o contador numérico (`tabular-nums`) exibe a evolução de `0%` a `100%` com mensagens de status dinâmicas (`CARREGANDO MÓDULOS CORE`, `SINCRONIZANDO PROJETOS`, `SISTEMA PRONTO`).
  - Inclui um tempo máximo de segurança (fallback timeout) para que conexões lentas nunca travem na tela inicial.
- **Identidade Visual & Padronização de Ícones**:
  - **Navbar & Favicon**: Emblema vetorial `GG` com acabamento Cyber Dual-Tone sincronizado com o tema ativo e novo favicon SVG escalável.
  - **Página Início**:
    - Flutuadores da foto principal com logos oficiais em alta definição (Python + IA Neural).
    - Grid de 4 estatísticas (`2+ Anos c/ Python`, `10+ Projetos IA`, `SQL Modelagem Dados`, `Pandas Manipulação de Dados`) enriquecido com os ícones vetoriais correspondentes nas 4 cores da paleta (`#00e5ff`, `#ffaa00`, `#ff6b00`, `#22c55e`).
    - Cards de Áreas de Atuação (`MagicBento`) com ícones dedicados no cabeçalho de cada especialidade.
  - **Página Projetos**:
    - Tags de tecnologia nos projetos principais acompanhadas de micro-ícones vetoriais e tratamento de carregamento/fallback seguro nas imagens dos 10 Web Apps.
  - **Página Stack**:
    - Marquee superior com logos oficiais de Python, Machine Learning, SQL, LLMs, Next.js, Vite e Power BI.
    - Certificações (Fundação Bradesco, SENAI, AprendeAki) com ícones institucionais e indicadores visuais em cada certificado, mantendo **Power BI** alinhado na primeira linha ao lado de **IA para PMEs**.

---

### 3. Key Product Decisions & Trade-Offs

- **Decisão 1: Pré-carregamento Real com Fallback de Tempo Limite**
  - *Abordagem Escolhida*: Carregar os objetos `Image()` reais em memória medindo o progresso real combinando com uma curva mínima suave (~1.6s) e timeout de segurança (~2.6s).
  - *Por que*: Garante que o usuário veja o progresso real de `0%` a `100%` sem que a tela pisque instantaneamente em cache local nem fique presa caso algum arquivo demore na rede.
- **Decisão 2: Biblioteca Centralizada de Logos SVG Inline**
  - *Abordagem Escolhida*: Utilizar SVGs vetoriais otimizados inline para as logos de tecnologias (Python, React, Next.js, Vite, FastAPI, SQL, Pandas, Power BI) combinados com ícones Lucide.
  - *Por que*: SVGs inline têm carregamento instantâneo (zero requisições HTTP extras), nunca ficam borrados em telas Retina/4K e respeitam perfeitamente as cores dinâmicas dos 6 temas do portfólio.
- **Decisão 3: Correção de OpenGraph e Favicon Multi-Formato**
  - *Abordagem Escolhida*: Atualizar as meta tags `og:image`, `twitter:image` e JSON-LD para `/images/og-preview.jpg` (`image/jpeg`) e fornecer `/favicon.svg` + `/favicon.png`.
  - *Por que*: O arquivo presente em `/public/images/` é `og-preview.jpg`, portanto apontar para `.png` gerava erro 404 nos crawlers de redes sociais.

---

### 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     INDEX.HTML (SEO, Favicon SVG/PNG & OG)              │
│   ├── <link rel="icon" type="image/svg+xml" href="/favicon.svg">        │
│   └── <meta property="og:image" content="/images/og-preview.jpg">       │
└───────────────────────────────────┬─────────────────────────────────────┘
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                    LOADING SCREEN (Preloader 0% -> 100%)                │
│   ├── Monitora carregamento real de imagens (Perfil + Projetos)         │
│   ├── Barra de progresso real + Contador percentual (tabular-nums)      │
│   └── Timeout de segurança + Atalho imediato [ESC] / Botão Pular        │
└───────────────────────────────────┬─────────────────────────────────────┘
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                SISTEMA DE LOGOS & ÍCONES OFICIAIS (TechIcons)           │
├──────────────────────┬─────────────────────────┬────────────────────────┤
│       INÍCIO         │        PROJETOS         │         STACK          │
│ • Badges Python/IA   │ • 4 Cards Código c/ SVG │ • Marquee Logos Reais  │
│ • 4 Stats c/ Logos   │ • 10 WebApps c/ Fallback│ • Idiomas & Uniasselvi │
│ • MagicBento Icons   │   de imagem garantido   │ • Bradesco/SENAI Icons │
└──────────────────────┴─────────────────────────┴────────────────────────┘
```
