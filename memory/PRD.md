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

## Backlog
- P0: Substituir wordmark por logo_arclab.png real; fechar texto legal definitivo
- P1: Link TikTok real (quando existir); imagem og:image real
- P2: Mensagens WhatsApp distintas por plano; versão PT da página

## Próximas tarefas
1. Receber logo + texto legal + TikTok do cliente e aplicar
2. Revisão de copy pelo cliente
