# Ajuste de Alinhamento das Certificações Bradesco (Stack)

Ajuste da ordem e distribuição dos itens de certificação da Fundação Bradesco na página **Stack**, garantindo que **Power BI** seja exibido na primeira linha diretamente ao lado de **IA para PMEs**, eliminando quebras desbalanceadas e inconsistências visuais.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> **Decisão Confirmada**: O usuário selecionou que prefere **reordenar o item para a primeira linha ao lado de IA para PMEs**.
> - Na ordem atual: `['IA para PMEs', 'Banco de Dados', 'Power BI', 'Python & Java', 'Lógica & Design']` causava a quebra de linha de Power BI devido à largura somada de *IA para PMEs* e *Banco de Dados*.
> - Com a nova ordem: `['IA para PMEs', 'Power BI', 'Banco de Dados', 'Python & Java', 'Lógica & Design']`, tanto *IA para PMEs* quanto *Power BI* (texto mais curto) cabem perfeitamente na linha inicial, resultando em um agrupamento equilibrado e harmônico.

---

### 1. Overview & Core Concept

- **O que faz**: Reorganiza a lista `bradescoCerts` no componente `Stack.jsx` para que *Power BI* apareça imediatamente após *IA para PMEs*.
- **Benefício**: Ambas as certificações de destaque em inteligência e análise de dados ficam juntas na linha 1 do cartão da Fundação Bradesco, mantendo proporções visuais uniformes com as colunas adjacentes (SENAI e AprendeAki).

---

### 2. User Experience & Visual Design

- **Alinhamento e Ritmo Visual**:
  - **Linha 1**: `[IA para PMEs]` + `[Power BI]` (cabe perfeitamente no container de largura flex).
  - **Linha 2**: `[Banco de Dados]` + `[Python & Java]`
  - **Linha 3**: `[Lógica & Design]`
- **Consistência de Estilo**: Preserva as classes já aplicadas de `px-3 py-1.5 bg-white/5 rounded-md text-xs text-gray-400 font-mono border border-white/5 hover:border-white/20 transition-colors whitespace-nowrap`.

---

### 3. Key Product Decisions & Trade-Offs

- **Reordenação Direta no Array (`bradescoCerts`)**:
  - *Abordagem Escolhida*: Alterar a ordem dos elementos no array `bradescoCerts` em `src/pages/Stack.jsx`.
  - *Por que*: É a solução mais limpa, sem adicionar complexidade de CSS desnecessária ou hacks de largura fixa, respeitando a flexibilidade responsiva em telas desktop e mobile.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────┐
│ SpotlightCard (Bloco 3: Certificações)                 │
├────────────────────────────────────────────────────────┤
│ Coluna 1: Bradesco                                     │
│   ├── Linha 1: [IA para PMEs] [Power BI]               │
│   ├── Linha 2: [Banco de Dados] [Python & Java]        │
│   └── Linha 3: [Lógica & Design]                       │
│ Coluna 2: SENAI                                        │
│   └── [Blockchain] [Tecnologia 5G] [TI - Finanças]     │
│ Coluna 3: AprendeAki                                   │
│   └── [Oficial de Rede] [NR10] [NR35]                  │
└────────────────────────────────────────────────────────┘
```
