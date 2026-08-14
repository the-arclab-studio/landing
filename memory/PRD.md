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

## Implementado (2026-08-14, parte 3)
- Foto de treino removida do bloco Prueba a pedido do cliente
- Bloco Prueba refeito: 3 cartões com slot de foto reservado (4:5, parêntesis retos azuis, etiqueta "Foto del atleta"), frase genérica e meta "Nombre · Liga · Posición" — à espera dos conteúdos reais
- WhatsApp: cliente vai criar WhatsApp empresarial bilingue — sem alterações necessárias
- training.jpg mantido em /public/images (sem uso); elite logo ajustado para 32px após feedback visual

## Implementado (2026-08-14, parte 4)
- Testemunho 1: Alex Almenta · 2ª FEB com foto real convertida a P&B (/images/athlete-1.jpg), parêntesis retos azuis por cima, frase genérica provisória
- Cartões 2 e 3 continuam placeholders (foto + meta por receber)
- copy.js: prueba.athletes[] — estrutura pronta para encaixar os restantes

## Pendente do cliente
- Posição do Alex Almenta (falta no meta) + a sua frase/citação real
- Atleta 2 e 3: foto, nome, liga, posição, citação

## Implementado (2026-08-14, parte 5) — REDESIGN "mais apelativo, mobile-first"
- Cliente: "parece um PDF em movimento" → redesign dos blocos Hero→Club (design_agent guidelines em /app/design_guidelines.json)
- Hero: layout assimétrico, título gigante (15vw mobile) a sobrepor foto de ação real (Alex, P&B, parêntesis retos, ligeira rotação, parallax), arco azul por cima, watermark Anton "IN-SEASON", CTAs full-width no mobile
- Problema: 3 dores como linhas grandes statement (zig-zag em desktop, travessão azul Playfair gigante), fecho itálico grande
- Enfoque: passos com números Playfair gigantes + ghost numbers, colunas com offset masonry em desktop
- Club: bloco escuro com watermark "EQUIPO" outlined em parallax
- Header mobile: logo mais pequeno, CTA vira só ícone ✆ em ecrãs xs
- Secções Planes/Prueba/FAQ/Contacto/Footer INTACTAS; copy final intocado

## Implementado (2026-08-14, parte 6)
- Site passou a 100% ESPANHOL: toggle ES/PT removido, bloco PT apagado de copy.js, App fixa COPY.es
- Bug logo mobile: header usa agora logo-mark.png (só "arc.lab", recortado do horizontal) em <sm; horizontal completo em sm+
- Nova secção "Sobre nosotros" (#nosotros, entre Prueba e FAQ): headline, slot foto de equipa (21:9, parêntesis retos), 2 cartões (@uxisureda ES, @gmorais.24 PT) com bio placeholder "[Bio pendiente]"; nav ganhou link "Nosotros"
- Checklist de lançamento (vídeo): robots.txt criado; og-image.png gerada (logo + arco azul, 1200x630) e ligada nas meta OG (URL absoluta do preview — atualizar no domínio final); JSON-LD Organization schema no index.html
- PostHog já existe no template (analytics); Privacy policy PENDENTE (precisa dados legais)

## Pendente do cliente
- Foto de equipa + bios de Uxue e Gonçalo para a secção Sobre
- Posição + citação do Alex; atletas 2 e 3 completos
- Texto de política de privacidade (recomendado antes do lançamento)

## Implementado (2026-08-14, parte 7) — INTRO DE MARCA
- Preloader animado (Intro.jsx): fundo azul #1B33DC → logo "arc.lab" branco (logo-mark-white.png, sem tagline) entra com animação → desaparece e entra "athlete development" manuscrito (Caveat, branco, centrado) → overlay desliza para cima e revela a página (~3.9s total)
- Mostra 1x por sessão (sessionStorage "arclab_intro_seen"); hero atrasa as suas animações (base B=3.8s) quando o intro toca
- Header mobile: canto superior esquerdo usa agora o ícone de app (icon.png, círculo azul); desktop mantém logo horizontal
- Scroll bloqueado durante o intro

## Implementado (2026-08-14, parte 8)
- Intro mais lento: logo visível ~1.9s (hold ≥1s após entrada), tagline visível ~1.7s; total ~5.1s; hero base delay B=5.0
- Fundo do intro mudado para azul escuro #15259B (a pedido)
- Tagline "athlete development" agora em Anton (letra pesada tipo logo), tracking apertado entre letras, palavras bem espaçadas (dois spans com gap)
- Testemunhos: agora 4 atletas (grid sm:2 lg:4); Alex real + 3 placeholders

## Implementado (2026-08-14, parte 9)
- Intro: fundo ainda mais escuro #0F1C6F; entrada do logo mais lenta (1.3s ease); tagline passou a "ATHLETE DEVELOPMENT" em maiúsculas Anton (sans condensada pesada, all-caps), tracking apertado e palavras muito espaçadas; efeito GLITCH CSS (fatias clip-path + deslocamentos, ~0.65s) na entrada do texto
- Novos tempos: logo até 2.4s, tagline até 5.2s, overlay sobe, fim ~6.0s; hero base delay B=5.9

## Implementado (2026-08-14, parte 10)
- Intro ajustado: fundo #15259B (azul elétrico ligeiramente escuro); GLITCH agora sobre o logo "arc.lab" (3 camadas da imagem com clip-path, ~1s); tagline "ATHLETE DEVELOPMENT" em Space Grotesk maiúsculas com tracking amplo (letra da tagline do logo), tamanho menor, sem glitch
- Tempos finais: logo até 2.8s · tagline 3.2→6.2s · overlay sobe ~6.2-7.0s · hero B=6.9

## Implementado (2026-08-14, parte 11)
- Intro final: logo entra SÓ com fade (sem subir/descer, 1.2s), segura ~1.7s, sai com GLITCH (0.95s, classe .exiting dispara as camadas clip-path); tagline minimalista: Space Grotesk caps, text-sm/xl, tracking .45em, palavras muito afastadas, entra só com fade
- Timeline: fade logo 0-1.2 · hold · glitch-out 2.9-3.85 · tagline 3.85-7.0 · overlay sobe · fim 7.8s · hero B=7.7

## Implementado (2026-08-14, parte 12)
- Intro: o ponto do "arc.lab" faz transição branco→laranja #FB6101 (amostrado do ícone de app) durante o hold, chegando a laranja mesmo quando começa o glitch (dot isolado via máscara CSS, dot.png + logo-mark-white-nodot.png)
- Testemunhos passaram a CARROSSEL: 1 cartão de cada vez, foto grande 4:5, setas prev/next (desktop nos lados, mobile junto ao contador), contador "01 — 04", auto-rotação 5.5s (reinicia ao clicar)
- Fix build: mask-image inline no JSX (css-loader não resolve /images)

## Implementado (2026-08-14, parte 13)
- Carrossel: intervalo 5.5s→6.5s; peeks laterais (cartões anterior/seguinte desvanecidos atrás do principal, clicáveis, só lg+); frase menor (text-xl) e centrada; linha de equipa azul por baixo do meta (campo team em copy.js — nomes de equipa PENDENTES do cliente, placeholder "Equipo — pendiente")
- Glitch do intro 0.5s mais tarde: 3.4s→4.35s; tagline até 7.5s; fim 8.3s; hero B=8.2

## Implementado (2026-08-14, parte 14)
- Carrossel estilo mockup: cartão central por cima, fotos anterior/seguinte a espreitar por trás dos dois lados (peeks sobrepostos, ~40% visível, clicáveis); setas prev/next + contador sempre por baixo; SWIPE (drag x) no telemóvel
- Ajustes: peeks w-56 desktop / w-20 mobile, overlap -/+8, opacity 75%

## Implementado (2026-08-14, parte 15)
- Carrossel: setas passaram para os lados da foto (flutuantes, sombra suave); contador fica sozinho por baixo
- Mobile: peeks reduzidos a w-12 para a foto central ficar grande; frase text-lg no mobile
- FLUIDEZ: transição mudou de sequencial (mode=wait) para simultânea (mode=popLayout, 0.45s) — cartões cruzam-se em vez de esperar; era código, não hosting

## Implementado (2026-08-14, parte 16) — REBUILD DA PRIMEIRA METADE (novo prompt editorial)
- Nova estrutura hero→cambios (planos para baixo INTACTOS, intro mantido):
  1. Header mais leve (sem borda, blur suave), CTA "ESCRÍBENOS ↗"
  2. HERO: headline 3 linhas "TU PRIMER / PLAN / de verdad.", foto NOVA de dunk explosivo (Unsplash photo-1728941803861, espelhada+recortada+P&B em /images/hero-dunk.jpg), grelha técnica subtil, linha-trajectória azul com ponto final a cruzar o hero
  3. PROBLEMA: "¿TE SUENA?", foto placeholder (banco, P&B) com parêntesis retos, 3 dores com marcadores azuis finos, fecho itálico
  4. SOLUCION (NOVO, #solucion): "un plan que se mueve contigo." + diagrama sistema ARC.LAB (círculo central com logo, 4 nós — Tu cuerpo/Tu carga/Tu calendario/Tu partido — ligados por linhas azuis animadas; mobile: lista vertical)
  5. METODO (#metodo): sequência horizontal 01→02→03, números Playfair gigantes azuis, linha azul + setas entre etapas
  6. CLUB: manifesto negro 4 linhas, "subir." em azul suave #9AA2EE, foto placeholder cinematográfica (de trás) — A AGUARDAR FOTO REAL
  7. CAMBIOS (NOVO): "¿QUÉ CAMBIA?" 4 colunas com divisores finos + ícones outline azuis
- Enfoque.jsx apagado (substituído por Solucion+Metodo); hero cta2 → "Ver cómo trabajamos ↓" (#solucion)

## Pendente do cliente
- Foto real para Problema (jogador no banco) e Club (jogador de trás na pista)
- Nota: foto do hero é STOCK (Unsplash) a pedido do cliente — substituível por foto real

## Implementado (2026-08-14, parte 17) — MOCKUP FIEL (hero → ¿qué cambia?)
- HERO: atleta em RECORTE sem fundo (rembg/u2net sobre foto Unsplash, espelhada, P&B → /images/hero-cutout.png), sombra suave; trajectória azul sobe até à bola com ponto final; micro-etiqueta "TRAYECTORIA DE MEJORA"; coluna direita "PLANIFICA. ADAPTA. RENDE. SUBE." (SUBE azul — nota: "RENDE." está assim no mockup, possível gralha de "RINDE."); grelha técnica subtil de fundo
- PROBLEMA: foto placeholder a sangrar na margem esquerda (margens negativas), dores à direita com marcadores azuis, fecho itálico por baixo
- SOLUCION: título à esquerda, diagrama à direita (linhas cruzadas animadas + pontos, círculo central com logo); mobile vertical
- METODO: números Playfair não-itálicos, linha azul com ponto de origem à esquerda
- CLUB: texto à esquerda, foto placeholder integrada à direita com bleed
- CAMBIOS: sem headline (mockup), 4 colunas com ícones em chips azul-claro (zap/seta/bateria/olho)
- Planos para baixo: INTACTOS

## Implementado (2026-08-14, parte 18)
- SOLUCION refeita conforme mockup do cliente: label com traço azul por baixo, "CONTIGO." azul pesado (não itálico), sub "Tu cuerpo, tu carga... Todo conectado." + "Todo adaptado a ti."; diagrama: círculos com ícones outline (user/barras/calendário/target), linhas escuras com pontos no círculo central, anel exterior tracejado, "TU MEJOR VERSIÓN" sob o logo; trajectória azul entra pelo canto inferior esquerdo com ponto
- Fix: framer-motion sobrepunha o translate do círculo central — wrapper div
