# PRD — ARC.LAB Landing Page (In-Season)

## Problem statement (original)
"preciso de uma landing page" + brief detalhado anexado (prompt-emergent-arclab.md): landing one-page em ESPANHOL para ARCLAB, assessoria online de preparação física in-season para jogadores de basquetebol. Página de venda, sem login nem base de dados. Sistema de design "Kinetic Restraint": base branca/preta, azul #1B33DC só como assinatura, tipografia pesada (Space Grotesk), remates em Playfair Display itálica azul, motivo de arco, cartões cinza-osso #F4F4F1, CTA WhatsApp.

## Decisões do utilizador
- Logo: wordmark em texto "arc.lab" (Permanent Marker) como placeholder até enviarem logo_arclab.png
- Idioma: Espanhol
- Texto legal: placeholder (marcado como pendente)
- TikTok: placeholder ("próximamente")
- Animações: mínimas e sóbrias

## Arquitetura
- Frontend-only (React + Tailwind + framer-motion v13 + lenis). Sem backend/BD por decisão do brief.
- Componentes em /app/frontend/src/components/arclab/ (Header, Hero, Marquee, Enfoque, Planes, Extras, Contacto, Footer, FloatingWhatsApp, Arc, Reveal, SectionFoot, data.js)
- Fontes Google: Space Grotesk, Playfair Display, Inter, Caveat, Permanent Marker, Anton
- WhatsApp: ES wa.me/34698136937 · PT wa.me/351969291245, mensagem pré-preenchida

## Personas
- Jogador de basquetebol em competição (Espanha/Portugal) que quer manter rendimento durante a temporada
- Pais/treinadores que procuram acompanhamento complementar ao clube

## Requisitos core (estáticos)
- Hero com titular "el partido se gana entre partidos." + arco azul
- Secção El Enfoque (3 cartões 01/02/03)
- Secção Los Planes (Basic 50€, Normal 85€ destacado, Duo 150€, Pro 220€)
- Extras & Continuidad (Nutrição +35€, Pack Temporada)
- Contacto (Espanha/Portugal) + footer com assinatura "by uxisureda ✕ arc.lab"
- Botão flutuante WhatsApp com seletor ES/PT

## Implementado (2026-07)
- Página completa one-page com todas as secções e copy do brief
- Reveal mascarado linha-a-linha no hero, arco SVG desenhado no load, parallax no hero (watermark Anton + arco)
- Marquee editorial lento, scroll suave (lenis), reveals on-scroll (framer-motion)
- SEO básico em espanhol (title, meta description, Open Graph)
- data-testids em todos os elementos interativos

## Implementado (2026-08-10)
- Toggle de idioma ES/PT no header: toda a copy traduzida (PT-PT), CTA WhatsApp muda para o número PT com mensagem em português quando em modo PT
- Secção de foto (entre Enfoque e Planos): foto real da equipa a treinar (enviada pelo cliente), a preto e branco, marcas de parêntesis retos azuis nos cantos, parallax subtil
- WhatsApp PT passou a usar mensagem em português ("Olá, quero info sobre o acompanhamento in-season da ARCLAB")
- Nota: copy centralizada em src/components/arclab/copy.js (objeto COPY com es/pt)

## Backlog
- P0: Substituir wordmark por logo_arclab.png real; fechar texto legal definitivo
- P1: Link TikTok real (quando existir); imagem og:image real
- P2: Mensagens WhatsApp distintas por plano; versão PT da página

## Próximas tarefas
1. Receber logo + texto legal + TikTok do cliente e aplicar
2. Revisão de copy pelo cliente

## Implementado (2026-08-14) — REBUILD v2 (copy final aprobado)
- Página reconstruída com o prompt FINAL v2: 8 blocos na ordem exata (Hero "tu primer plan de verdad." / Problema / Enfoque 3 passos sem caixas / El Club y Tú — ÚNICO bloco escuro #151515 / Los Planes — Basic 50€, PRO 95€ destacado #EEF0FC, Duo 80€/jugador, ELITE 220€ cartão escuro / Prueba — 3 placeholders de testemunho + foto de treino / FAQ acordeão 7 perguntas / Empezar)
- Tabela comparativa colapsável "COMPARA LOS PLANES AL DETALLE" (coluna Pro com tinte azul, Elite escura), fechada por defeito
- Header sticky com nav âncora Planes/Jugadores/Dudas + botão azul "Escríbenos"; wordmark rodado com sombra suave
- WhatsApp com mensagem pré-preenchida POR PLANO (generic/basic/pro/duo/elite), números ES e PT
- Footer: wordmark + mote "NADA PORQUE SÍ. TODO POR UNA RAZÓN."
- Toggle ES/PT mantido: toda a copy v2 traduzida para PT-PT; mensagens WhatsApp mantidas em espanhol (conforme spec)
- Google login: DESCARTADO (v2 diz "sin login"); exportação para outro servidor discutida — ver notas

## Backlog atualizado
- P0: 3 testemunhos reais (substituir placeholders no bloco Prueba); logo real logo_arclab.png
- P1: TikTok (removido do footer v2); imagem og:image real
- P2: guardar idioma escolhido (localStorage)

## Implementado (2026-08-14, parte 2)
- Logo REAL aplicado: horizontal (2. Logo P-Horizontal.png) no header, principal no footer, ícone azul como favicon; ficheiros trimmed em /public/images/ (logo-horizontal.png, logo-principal.png, icon.png)
- Imagem "elite." (azul claro + ponto lima, fundo transparente) no cartão do plano Elite, substituindo o título em texto
- Assinatura "by uxisureda ✕ arc.lab" (Caveat) adicionada ao rodapé, por o documento de identidade (ago/2026) a exigir em todas as peças
- Documento de identidade visual recebido como referência base (não literal); paleta da página já conforme (#1B33DC etc.)

## Pendente do cliente
- Textos dos 3 testemunhos (citação + Nome · Liga · Posição) — perguntado, aguarda resposta
