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

## Implementado (2026-08-15)
- Fotos reais aplicadas (todas P&B): climbers → Problema (esforço, sangria à esquerda); #15 de costas com stick (recorte) → manifesto Club; foto de grupo do treino → foto de equipa no Sobre; mulher no gym → atleta 2 do carrossel (nome/liga/equipa pendentes)
- Ficheiros: problema.jpg, club.jpg, team.jpg, athlete-2.jpg em /public/images

## Implementado (2026-08-15, parte 2)
- Frames (parêntesis retos) removidos das fotos que sangram (Problema, Club) — ficavam quebrados; mantidos nos cartões do carrossel
- ¿QUÉ CAMBIA? redesenhado: linhas editoriais grandes (ícone azul + título 5xl + texto à direita + seta no hover, fundo branco no hover); mobile empilha
- Nota: rembg instalado no env (cutouts); ideia de tirar fundo a mais fotos fica pendente

## Implementado (2026-08-15, parte 3)
- ¿QUÉ CAMBIA?: rotador vertical "Con el programa me siento con" + palavras a rodar de cima para baixo (más fuerza / más velocidad / más resistencia / más explosivo), uma palavra azul em destaque no centro com metade da anterior e da seguinte visíveis (janela 3.6em, overflow hidden); loop seamless com palavra duplicada; 2.4s por palavra

## Implementado (2026-08-15, parte 4)
- METODO substituído pelo mockup "HECHO PARA TU JUEGO.": letras gigantes A (cheia) R (cheia) C (outline) em Anton azul como fundo, cutout real do #15 (rembg, /images/metodo-cutout.png) a sobrepor as letras, sub "Tu físico tiene que entender tu juego." + traço azul, 3 passos EVALUAMOS/PREPAREMOS/RENDIMOS com copy do mockup, divisores verticais
- Tentativas falhadas: cutout do Alex (tinha defensor) e stock dribble (artefactos) — documentado

## Implementado (2026-08-15, parte 5)
- METODO reenquadrado: "ARC" como palavra única coesa (A+R cheios, C outline, Anton ~19-23rem, alinhada à direita, lê-se como ARC), atleta #15 por cima; coluna esquerda com título + sub + 3 passos com números grandes (destaque à informação); mobile limpo sem letras gigantes

## Implementado (2026-08-15, parte 6) — IMAGENS IA + CONSISTÊNCIA TIPOGRÁFICA
- 4 imagens geradas com Gemini Nano Banana (gemini-3.1-flash-image-preview, EMERGENT_LLM_KEY, script em /app/scripts/gen_images.py — persistente):
  · hero: dunk explosivo uma mão, fundo limpo → cutout rembg (hero-cutout.png, inclui tabela/cesto)
  · problema: jogador cansado no banco (problema.jpg)
  · club: jogador sozinho de costas com spotlight (club.jpg)
  · metodo: stance baixo de drible → cutout (metodo-cutout.png)
- Fotos reais deixaram a primeira metade (ficam em /public/images: athlete-1/2, team, training para uso futuro — carrossel AINDA USA athlete-1/athlete-2 reais, abaixo dos planos)
- TIPOGRAFIA UNIFICADA (hero→cambios): todos os headlines = Space Grotesk 700 UPPERCASE tracking-tighter com palavra final em AZUL SÓLIDO (sem itálico serif); Playfair fica reservado a números/citações/rotador

## Implementado (2026-08-15, parte 7) — MOCKUP V3 (hero → transição de planos)
- Header: nav ENTRENAMIENTO/CÓMO FUNCIONA/PLANES/SOBRE ARC.LAB (âncoras #metodo/#solucion/#planes/#nosotros), só CTA "EMPEZAR AHORA ↗" (sem INICIAR SESIÓN)
- Números de margem 01—06 com traço azul (SideNum em Bits.jsx) + marcas "+" nos cantos (Cross)
- HERO: faixa azul diagonal (clip-path paralelogramo) à direita, cutout IA novo do dunker streetball (gen2), tabela de basket em outline no canto, copy novo ("Entrenamiento personal... quieren más.", EMPEZAR AHORA/VER PLANES)
- PROBLEMA: 3 colunas — headline+sub "Haces el esfuerzo..." / faixa central PLACEHOLDER / 3 problemas numerados com × azul (Sin dirección / Demasiado esfuerzo / Sin conexión con el juego)
- SOLUCION: headline + subs à esquerda, faixa PLACEHOLDER central, 2x2 CUERPO/CARGA/CALENDARIO/PARTIDO à direita (diagrama de círculo REMOVIDO)
- METODO: HECHO PARA TU JUEGO. + cutout IA da jogadora a driblar; passos EVALUAMOS/PREPAREMOS/RENDIMOS em 3 colunas
- CAMBIOS: rotador mantido + NOVO bloco PRETO full-width "MÁS FUERZA / MÁS EXPLOSIVIDAD / MENOS FATIGA / MÁS CONTROL" (branco gigante + azul-suave, × azuis, jogadores fantasma nos cantos)
- PLANES: header estilo mockup ("LOS PLANES × MENSUALIDAD", "ELIGE TU NIVEL DE ACOMPAÑAMIENTO.", "Más estructura. Más resultados. Más tú."); cartões/comparador/banda INTACTOS
- SECÇÃO CLUB (manifesto negro) REMOVIDA do fluxo — não existe no mockup v3; ficheiro Club.jsx mantido para eventual regresso
- Copy do mockup v3 = novo copy final (substituiu textos anteriores em hero/problema/solucion/planes header)

## Implementado (2026-08-15, parte 8) — FIO CONTÍNUO LINHA→IMAGENS
- A linha azul nasce no hero (curva nova HeroLine, desce até ao ponto azul no fundo do hero, centro) e TRANSFORMA-SE numa faixa vertical contínua de 300px (Strip.jsx) que atravessa Problema→Solucion→Metodo com 3 placeholders gigantes (Foto 01/02/03) e termina com ponto azul na fronteira com o bloco preto (Cambios)
- Marquee REMOVIDO para não quebrar a continuidade
- Secções 02/03/04 reformatadas para 3 colunas à volta da faixa (conteúdo nunca passa por baixo)
- Nota: faixa só em lg+ (utilizador pediu foco desktop)

## Implementado (2026-08-15, parte 9)
- Linha do hero redesenhada: curva tipo trajetória de lançamento (sobe para a bola, desce) terminando EXATAMENTE no topo da faixa (verificado por medição: heroBottom === stripTop ao pixel, ponta da linha no centro 50% = centro da faixa); ponto azul no topo da faixa recebe a linha

## Implementado (2026-08-15, parte 10) — FAIXA AZUL CONTÍNUA (correção de interpretação)
- O elemento contínuo é a FAIXA AZUL (não uma linha fina): o paralelogramo azul do hero (clip-path 58%→112% topo / 42.2%→57.8% base) desce e ENCAIXA ao pixel na coluna azul central (15.6vw centrada) que atravessa Problema→Solucion→Metodo→Rotador até ao bloco preto
- Os 3 placeholders (Foto 01/02/03) são cartões brancos DENTRO da coluna azul
- Linha curva fina do hero removida (o fio é a faixa); Rotador extraído para componente próprio (dentro do stream); Cambios = só bloco preto; ponto azul no fim da coluna a entrar no preto

## Implementado (2026-08-15, parte 11)
- Faixa azul do hero ESTANCA assim que começam as fotos (fim do hero = início da coluna)
- Coluna: fotos/placeholders voltaram ao tamanho proporcional 3:4 (como antes), sem esticar; entre elas corre uma linha azul fina (1px, 40%) até ao ponto azul no bloco preto

## Implementado (2026-08-15, parte 12)
- Coluna de fotos finalmente como o mockup v3: placeholders ESTICADOS (flex-1, altura total), encostados uns aos outros SEM molduras/bordas/cartões, sem linha nem fundo — começam imediatamente sob a ponta da faixa azul do hero e terminam rente ao bloco preto; bloco de resultados mantido PRETO (escolha do cliente, apesar do mockup azul)


## Implementado (2026-08-15, parte 13) — FOTOS REAIS NA FAIXA + FUNDO BRANCO
- Cliente enviou 3 imagens reais exatamente a 300×913 (rosto / mão com bola / pernas — composição de "atleta gigante"): aplicadas na coluna (Strip.jsx) como UMA imagem contínua, sem etiquetas, pontos, linhas ou divisórias; ficheiros otimizados em /public/images/strip-01/02/03.jpg (~50-70KB cada)
- Medidas comunicadas ao cliente: cada frame = 15.6vw de largura (300px @1920) × ~913px de altura (dinâmico, 1/3 da coluna total); recomendado ratio 1:3 com sujeito centrado (object-cover)
- FUNDO BRANCO total do Hero até ao fim da faixa: bg-bone removido do Problema; linhas fininhas (border-t border-line, #e5e5e0 1px) a dividir todos os blocos (Problema/Solucion/Metodo/Rotador) — a linha passa por baixo da coluna de imagens (interrompida pela faixa, z-20)
- Fix overlaps pré-existentes (texto escondido atrás da faixa): passos do Metodo ganharam lg:pr-[9vw]; Rotador limitado a lg:max-w-sm com pre-line lg:text-2xl e palavras lg:text-5xl — verificado a 1920px e 1280px


## Implementado (2026-08-16, parte 1) — SEM LINHAS DIVISÓRIAS + PÁGINA MAIS PREENCHIDA (desktop)
- Linhas finas entre blocos REMOVIDAS a pedido (Problema/Solucion/Metodo/Rotador sem border-t; fundo branco contínuo mantido)
- Tipografia desktop reforçada: títulos de secção lg 4.6rem / xl 5.4rem (Problema, Solucion), Metodo lg 4.8rem / xl 5.6rem (com lg:pr-[9vw] no título para nunca entrar debaixo da faixa), subs text-lg, itens/números maiores (Problema 01-03 Playfair 3xl; Metodo passos Playfair 6xl; Rotador palavras 3.4rem)
- Mais respiro vertical: py-24/32 → lg:py-40 (secções 02/03/04) e lg:py-36 (Rotador) — a faixa de imagens cresce junto
- Marcas de água Anton outline (.hero-watermark) a preencher os vazios: "ESFUERZO" (Problema, inf-esq), "SISTEMA" (Solucion, inf-dir), "CAMBIO" (Rotador, centro-dir) — só lg+, sangram nos cantos
- Micro-efeitos hover: Problema (título fica azul + × roda 90°), Solucion (ponto azul escala + título azul), Metodo (título do passo azul)
- Verificado a 1920px: sem overlaps com a faixa, rotador intacto, watermarks subtis

## Pendente do cliente

## Implementado (2026-08-16, parte 2) — SCROLL POR SECÇÃO + NOVO ATLETA NO HERO
- SCROLL PAGINADO (só desktop, ≥1024px): wheel interceptado no App.js → cada gesto de roda/trackpad avança/recua uma secção inteira via lenis.scrollTo (1.1s, ease-out quart); secções mais altas que o ecrã ganham paragem extra no fundo (conteúdo nunca fica inalcançável); bloqueado durante animação, durante o intro e com ctrl (zoom); mobile/tablet intactos
- Testado com wheel real (playwright): 0→1016→1890→2722 e retorno 2722→1890 = topos exatos das secções
- HERO: novo atleta enviado pelo cliente (ChatGPT Image 16/08, PNG c/ transparência 1024×1536, margens cortadas → 1002×1428) substituiu o cutout anterior em /images/hero-cutout.png

## Implementado (2026-08-16, parte 3) — SCROLL FLUIDO COM "EMPURRÃO" + LEGIBILIDADE
- Scroll paginado rígido SUBSTITUÍDO por snap de proximidade (a pedido: "tem que ser fluido... um pequeno empurrão ao sair da secção"): scroll 100% livre via Lenis; ao parar (idle 180ms) dentro de ~15% do ecrã (100-180px) de uma fronteira de secção, desliza suavemente (0.7s ease-out cubic) para assentar a secção; fora dessa zona não mexe em nada
- Testado com wheel real: livre a meio das secções (350, 650, 1480 sem saltos), snap correto perto das fronteiras (936→1016, 1170→1016), scroll longo fluido (5000px de uma vez)
- Legibilidade geral: --ink-2 #616161→#525252 (mais contraste), line-height 1.75 nos textos de corpo (Problema/Solucion/Metodo/Hero), corpos lg ligeiramente maiores; copy NÃO alterada (aprovada pelo cliente)

## Implementado (2026-08-16, parte 4) — SECÇÃO 05 REMOVIDA + BLOCO PRETO EXPANSÍVEL
- Secção Rotador (¿QUÉ CAMBIA? + slot machine) REMOVIDA do fluxo (ficheiro apagado, copy limpa); Planes renumerado 06→05; a faixa de imagens encurtou e termina rente ao bloco preto (fundo da imagem cortado via object-cover — autorizado pelo cliente)
- Bloco preto MÁS FUERZA/EXPLOSIVIDAD/MENOS FATIGA/MÁS CONTROL: visual INTACTO, mas cada célula agora abre ao clique/toque (role=button, aria-expanded, Enter/Espaço) revelando um texto (rascunho ES escrito por mim, a rever pelo cliente); VÁRIAS podem estar abertas ao mesmo tempo; × azul roda 45° (vira +) quando aberta; animação altura+fade 0.45s; hover com fundo branco 4%
- Toques de design nos textos à direita das secções brancas: Problema (item desliza 8px no hover + linha separadora fica azul), Solucion (ponto azul estica em traço no hover)

## Implementado (2026-08-17, parte 1) — HERO ESTILO NOVO MOCKUP + SOLUCION REFEITA
- HERO: letras gigantes "ARC/LAB" em outline por trás do jogador (dupla camada: outline azul 28% no branco + outline branco 55% recortada pelo clip-path da faixa azul — atravessa a faixa como no mockup); coluna de palavras CIENCIA./DISCIPLINA./MENTALIDAD./RESULTADOS. dentro da faixa (hero.bandWords em copy.js); entrada com fade após intro
- PÉ A SOBREPOR-SE: imagem do hero desce lg:mt-20/xl:mt-24 com margem negativa equivalente — o pé ultrapassa o fim da faixa azul ~80-96px e PISA o topo da coluna de fotos (z-30 sobre a faixa z-20); hero passou a overflow-x-clip + lg:overflow-y-visible; mobile intacto
- SOLUCION (secção 03) coluna direita redesenhada: de grelha 2×2 para LISTA numerada estilo mockup — 01-04 Playfair azul + título + "+" que roda no hover, separadores finos que ficam azuis, texto desliza no hover

## Implementado (2026-08-17, parte 2) — SCROLL MAGNÉTICO FINAL + HERO REEQUILIBRADO
- SCROLL (escolhas do cliente via perguntas): scroll livre mais direto/seco (lerp 0.09→0.14); empurrão magnético GENEROSO (~250px) que agarra a secção seguinte assim que ela começa a aparecer e a enquadra; SÓ A DESCER (a subir é 100% livre); em todo o site; velocidade 0.7s mantida; wheel bloqueada durante os 0.7s do empurrão para não lutar com a animação; mobile intacto
- Testado: livre em 400 (sem snap), captura em 800→1016, subida livre 1016→708, captura lenta 1760→1890
- HERO: espaço branco de cima cortado (pt-24 + removido lg:pt-16 interno — conteúdo começa logo sob o header), ritmo interno mais arejado (título mt-8, sub mt-10, CTAs mt-14), nova micro-legenda "— ARC.LAB TRAINING SYSTEM" no canto inferior esquerdo (hero.footNote em copy.js) como no mockup


## Implementado (2026-08-17, parte 3) — HERO ALINHADO ÀS LETRAS + SCROLL 20%
- HERO: bloco esquerdo descido (lg:pt-[1.6rem] xl:pt-[5.5rem]) — topo do título alinhado com o topo das letras ARC (medido no browser: 233px vs 228px)
- SCROLL: empurrão dispara quando ~20% da secção de baixo está visível (zona dinâmica por altura da secção), com proteção: nunca antes de percorrer ~45% da secção atual e janela fixa de 250px nas paragens de fundo de secções altas — evita que o bloco preto curto seja saltado; continua só a descer, subir é livre

## Regras de design do cliente (2026-08-17) — ver /app/memory/design_rules.md
- Layout.jsx criado: <Container> (max-w-6xl mx-auto px-6) + <Section> (py-16 md:py-24 lg:py-32) — ainda NÃO aplicados às secções existentes
- Decisões do cliente sobre conflitos: regra 5 (paddings) OK normalizar; regra 1 (max-w-6xl) RESPESAR; regra 10 MANTER tipografia display gigante; regra 9 OK manter 3 fontes; regra 21 MANTER intro/entradas lentas, scroll respeita → empurrão passou a 250ms ease-out (feito + testado)
- Migração de espaçamentos: seguir regra 28 (apresentar classes do bloco e aguardar confirmação) + regra 29 (uma secção de cada vez)

## Migração às regras de design (2026-08-21)
- Hero: EXCEÇÃO calibrada (cliente escolheu não migrar — junção faixa/pé/fotos ao pixel)
- Solucion (03): MIGRADA → <Section>, <Container> max-w-6xl gap-8, linhas py-6, pl-12; verificado 375/768/1440 sem scroll horizontal
- Metodo (04): MIGRADA → <Section>/<Container>, passos mt-12 lg:mt-16 gap-8, pl-6, imagem mt-12; EXCEÇÃO calibrada: lg:pr-[9vw] (proteção da faixa de fotos — escala da regra 4 não chega); verificado 375/768/1440
- TROCA DE ORDEM (2026-08-23): Método passa a secção 03, Solución passa a 04 (SideNums trocados; faixa contínua aguentou sem quebras — realinhou a composição: os pés aparecem junto à Solución). NOTA: menu do header ficou com ordem invertida vs página (ENTRENAMIENTO→#solucion é agora a 4ª; CÓMO FUNCIONA→#metodo a 3ª) — oferecido trocar ordem do menu
- Bloco preto (Cambios): migração proposta AGUARDA confirmação a/b/c (max-w-6xl, gap-4, palavra text-xl sm:text-3xl, transitions/expansão 250ms)

## Refatoração de estrutura (2026-08-24) — spec do cliente
- Layout.jsx FINAL: Container = max-w-6xl mx-auto px-6 md:px-8; Section = py-20 md:py-28 lg:py-36 (substitui a escala anterior das regras)
- Convertidas para Section/Container: Club, Prueba, Planes, Sobre, Faq, Contacto (Problema/Solucion/Metodo já estavam); nenhuma secção tem padding vertical próprio; EXCEÇÕES aprovadas: Hero (pt-24/pb-0 calibrado) e Cambios (bloco preto intacto — padding vive nas células)
- VERIFICADO computacionalmente a 1440px: todas as secções com Section têm paddingTop/Bottom 144px e container left=144px (mesma margem esquerda e ritmo vertical)

## Alterações de dados (2026-08-24) — só data.js/copy.js + remoção de órfãos
- data.js: número único ARC.LAB = +34 711 233 350 (NUMS es/pt = "34711233350"); TODOS os links WhatsApp passam a este número
- Plan Duo: priceSmall apagado (referência no Planes.jsx removida); novas features (mesmo equipo / mismo calendario-planes distintos / mismo seguimiento)
- CTAs Basic/Pro/Duo: "Escríbenos" → "Empezar ahora"; Elite mantém "Pedir plaza"
- Frase "Empieza en Basic y sube a Pro..." REMOVIDA (chaves after1/afterB1/after2/afterB2/after3 + bloco no Planes.jsx)

## Interações & micro-design (2026-08-24, parte 2) — spec A–F do cliente
- A) FloatingWhatsApp APAGADO → novo BackToTop.jsx (fixo bottom-6 right-6, h-10 w-10 com zona de toque invisível 44px via after:-inset-1, bg-white ring-line, ArrowUp fino, hover azul, fade 200ms após passar o Hero, sobe via lenisStore.current.scrollTo — nova ponte lenisStore.js porque o Lenis vive no App.js)
- B) Cambios: X→Plus (aberto roda 45°→×); expansão ganhou deslocamento y 12px, duração 0.5s, mesmo easing
- C) Problema: cada linha agora expande o campo "detail" do copy (role=button, aria-expanded, Enter/Espaço, + → ×, mesma dinâmica do Cambios: height+opacity+y, 0.5s); texto curto sempre visível
- D) Planes: preços em font-anton (era Playfair itálico), /mes inalterado
- E) Elite "Pedir plaza": borda com traço azul #1B33DC a percorrer o contorno em loop (conic-gradient rodando, 5s, keyframes elite-trace no index.css, desativado com prefers-reduced-motion)
- F) Prueba: desktop com setas fora das fotos alinhadas às margens do Container (novas setas lg, mobile inalterado com setas sobre as fotos), foto central lg:max-w-[34rem] (+21%)
- Tudo verificado no browser a 1440px: BackToTop opacity 0→1 após hero e clique volta ao topo; detail 02 expande; fonte 220€ = Anton; elite-trace ativo 5s

## Nutrición (2026-08-24, parte 3)
- Novo Nutricion.jsx: faixa editorial logo após os cartões dos planos (dentro da secção Planes) — fundo bone, brackets azuis nos 4 cantos (padrão Corner das fotos), Eyebrow c/ linha azul, título grotesk minúsculas, 35€ Playfair itálico azul (5xl) + "pago único", CTA btn-outline "Empezar ahora" → WhatsApp com nova mensagem MSGS.nutricion ("Hola, me interesa la guía nutricional") em data.js; copy nutricion.cta adicionado

## Jogadora sobreposta no Método (2026-08-24, parte 4)
- Nova imagem /images/metodo-player.png (PNG recortado do cliente, 760×1117 otimizado) na coluna direita do Metodo: grande escala (lg 26rem / xl 30rem), entra pela direita com animação x, sobreposta ao painel existente (metodo-cutout INTACTO), ligeiramente fora da margem (xl:-right-32) e a quebrar o fundo do painel (bottom -4%); círculo suave claro atrás (#E7E7DF, blur-xl, 135%)
- Mobile: reduz para w-36/44 no canto superior direito da imagem, sem tapar texto; verificado 375px sem scroll horizontal; cartões/dados da esquerda intocados

## Ajuste Método (2026-08-24, parte 5) — jogadora única sobre a faixa
- REMOVIDA a jogadora de trás (uso de metodo-cutout.png no Metodo — o ficheiro continua em uso nos cantos fantasma do Cambios); fica só a dorsal 8
- Jogadora re-posicionada com offset viewport-relativo (lg:right-[calc(42.2vw-21.5rem)] xl:right-[calc(42.2vw-25.5rem)]) para a mão/bola pousarem ~72px sobre a faixa central em QUALQUER largura desktop; escala intacta (26/30rem); z-30 acima da faixa (z-20), sem sombra/contorno/efeitos; círculo suave passou para z-10 (por baixo da faixa → contacto limpo); wrapper absolute na Section (relative overflow-hidden), pointer-events-none + select-none

## Hero altura exata (2026-08-24, parte 6)
- Hero desktop: lg:min-h-[92vh] → lg:h-[calc(100vh-4rem)] lg:min-h-0; lg:pt-24 → lg:pt-12; removidos pt-4/xl:pt-16 da coluna de texto (spec do cliente)
- Verificado: 1440×900 (secção 836px = 100vh−64, legenda visível em 796px) e 1280×800 (736px, legenda em 696px) — SEM scroll, sem cortes nem sobreposições; mobile/tablet intocados
- CONSEQUÊNCIA ACEITE (spec proíbe mover elementos decorativos): o alinhamento título↔topo das letras ARC deixou de existir — o título começa agora acima das letras
- ⚠️ ANOMALIA: durante esta sessão o ficheiro Hero.jsx REVERTEU sozinho duas vezes após as minhas edições (e apareceu um donut "ENFOQUE 360°" transitório no Metodo a 1024px que não existe no código) — sinais de edição/rollback em paralelo; reapliquei e confirmei o estado final no disco e no browser

## Hero — crescimento proporcional + alinhamento (2026-08-24, parte 7)
- PASSO 1: tudo ×1.12 — secção lg:h-[calc((100vh-4rem)*1.12)], título lg:text-[6.95rem], sub lg:text-xl lg:max-w-md, ritmos lg:mt-9/11/16, jogador lg:scale-[1.12] origin-bottom (wrapper próprio para não conflituar com Framer); azul cresceu com o conjunto; vértice da diagonal assenta no topo da faixa (verificado: secBottom = stripTop)
- PASSO 2: letras ARC/LAB alinhadas ao pixel com o topo de "TU PRIMER" (ambas 117px, medido com métricas de fonte via canvas — glyph top, não caixa): top-[127px] xl:top-[129px]; jogador moveu com o lettering e depois +40px extra a pedido do cliente (lg:mt-[86px] xl:mt-14)

## Bug fix — jogador atrás da faixa no scroll (2026-08-24, parte 8)
- RCA: o Container do Hero tinha `relative z-20` → contexto de empilhamento que prendia o z-30 do jogador; a faixa (z-20, depois no DOM) ganhava durante o scroll. (Também confirmados transform/scale no wrapper e filter na img, mas o culpado era o Container.)
- Fix mínimo em Hero.jsx: Container sem position/z-index; coluna esquerda de texto ganhou `relative z-10` (fica acima da faixa azul z-0 e das letras z-[6]); jogador z-30 passa a competir no contexto raiz → SEMPRE acima da faixa z-20

## Acordeões exclusivos + traços azuis (2026-08-24, parte 9)
- Problema e Cambios: estado passou a useState(null) — ABERTURA EXCLUSIVA (abrir um fecha o anterior); Faq JÁ era exclusivo (useState(0)/-1) — não tocado (fora dos 3 ficheiros permitidos)
- Problema: texto curto ↔ detail agora SUBSTITUEM-SE (nunca acumulam) com transição height+opacity 0.35s mode="wait" (sem salto); testids: problema-text-XX / problema-detail-XX
- Divisórias: réguas full-width removidas de Problema/Solucion/Cambios (Cambios mantém só a divisória vertical md:border-r); novo traço azul 24×2px à esquerda no fundo de cada item; ao abrir cresce para 64px (400ms); espaçamento compensado (Problema space-y-16, Solucion py-8)
- Verificado 1440px e 375px: exclusividade OK, troca de texto OK, traços OK, 0 réguas, sem scroll horizontal

## Bug fixes (2026-08-24, parte 10) — pé da jogadora + texturas do bloco preto
- METODO: pé cortado no limite inferior → âncora da jogadora e do círculo lg:bottom-[-3%] → lg:bottom-0 (escala e horizontal intactas; pé fica exatamente dentro, sobra 0px)
- CAMBIOS: texturas fantasma reenquadradas — caixas fixas nos cantos (sem margens negativas): esq. h-96 w-72 object-cover object-top; dir. h-80 w-64 object-cover object-center (mantido flip); opacidade 0.07→0.05

## Reconstrução Sobre + Contacto (2026-08-24, parte 11)
- SOBRE: nova estrutura — overline "QUIÉNES SOMOS" no canto superior direito, título 2 linhas minúsculas ("detrás de tu plan" ink / "hay dos atletas." azul); REMOVIDA team.jpg e cartões antigos; 2 cartões horizontais bone rounded-[18px]: placeholder foto à esquerda (~30%, altura total, aguarda fotos reais — estrutura pronta para img object-cover grayscale) + nome 22px / cargo azul 11px / credenciais com pontos azuis (copy real de Uxía e Gonçalo em copy.js); mobile empilha com foto por cima
- CONTACTO: REMOVIDA a grelha de países com emojis; bloco único #151515 rounded-[24px] com arco SVG azul (Arc.jsx reutilizado, -scale-y-100, topo-direito atrás do título), título "¿hablamos de tu temporada?" branco+azul, sub cinzento; cartão interior #1F1F1F rounded-[16px]: WHATSAPP azul + número +34 711 233 350 (3xl branco, link wa.me) | badges ES/PT/US + nota de idiomas; mobile empilha; legal mantido por baixo

## Planes/Nutricion/Prueba (2026-08-24, parte 12)
- PLANES: badge "El más vendido" sem pílula (só texto azul tracking 0.25em); CTAs Basic/Pro/Duo = "Empezar" (copy.js, whitespace-nowrap, glifo ✆ removido dos cartões — mantido só na banda "Hablar por WhatsApp"); ELITE invertido: pílula branca + texto azul + anel animado REFEITO (bug: anel 1px com arco transparente 88% do tempo = impercetível) → wrapper p-[2px] + clipper overflow-hidden + camada de centragem estática + .elite-trace só com rotação (conic: anel constante rgba azul 25% + arco #1B33DC a varrer); reduced-motion desativa (verificado)
- NUTRICION: faixa agora bloco escuro bg-ink p-6/md:p-12/lg:p-16, Eyebrow dark, título branco 4xl→5xl, preço 35€ font-anton branco 5xl/6xl, unit branco/50, CTA btn-blue
- PRUEBA: cartão central max-w-lg lg:max-w-[42rem] + linha alargada lg:max-w-none (a max-w-3xl impedia o crescimento — achado do testing_agent); setas desktop top-[44%] nas margens do Container, mobile top-[38%] intacto; render real medido: 672px a 1440 ✓
- testing_agent iteration_3.json: 100% PASS; sem scroll horizontal 1440/1024/375

- copy.js: blocos sobre/empezar reescritos (chaves antigas removidas — handle/zone/bio/countries/responsePre etc. sem referências restantes)
- Verificado 1440/1024/375: sem scroll horizontal, link WhatsApp correto
- NOTA: /images/team.jpg ficou órfão em public/images (não apagado, pode ser reutilizado)

- Fix extra encontrado pelo testing_agent: aria-expanded do Cambios tinha ficado `!!open === i` (do replace_all) → corrigido para `open === i` e verificado
- Verificado por testing_agent (iteration_2.json): 100% PASS, sem regressões, sem scroll horizontal nas 3 larguras


- Verificado por testing_agent (iteration_1.json): 25/25 amostras elementFromPoint com jogador por cima durante scroll lento a 1280×800; sem regressões de empilhamento; sem scroll horizontal em 1440/1280/375

- Verificado 1440×900 e 1280×800: cabeça livre do header (+11px), jogador dentro a 1440 (−57px) e pé sai 55px pelo fundo a 1280×800 (efeito pé aceite pelo cliente), legenda visível sem scroll nos DOIS tamanhos


- Medido no browser: 1440px overlap 72px, 1024px overlap 72px, 375px pequena no topo direito sem tapar texto; sem scroll horizontal nas 3 larguras


- Verificado 1440 e 375: sem scroll horizontal, empilha bem no telemóvel, href correto (+34 711 233 350)


- Problema: 4.º ponto "Sin seguimiento" adicionado (renderiza automaticamente — verificado 4 itens no browser); cada ponto tem novo campo "detail" (2-3 frases ES, placeholders a editar pelo cliente; NÃO usado ainda por nenhum componente)
- copy.js: novo bloco `nutricion` (eyebrow/title/text/price 35€/unit "pago único") — preparado, componente vem noutro pedido

- HERO: conteúdo subiu ~1/3 (lg:pt-[1.6rem]→lg:pt-4, xl:pt-[5.5rem]→xl:pt-16, valores da escala); conteúdo passou a <Container> (layout assimétrico mantido); letras ARC/LAB passaram de posição % a offsets fixos (top-[161px] xl:top-[209px]) → alinhamento título↔ARC EXATO (209px = 209px a 1440 e 1920)
- SCROLL reescrito: paragens = APENAS topos de secção (sem fundos de secções altas, sem footer), Cambios excluído; dispara quando o topo da secção seguinte entra nos últimos 25% do viewport; 0.6s ease-out; roda NUNCA bloqueada — scroll durante o empurrão cancela-o (lenis.scrollTo atual, immediate) e devolve controlo; sem empurrão com prefers-reduced-motion; testado com trajetórias (300→349→871 push; 120→991 livre porque <25% visível)




- Problema (02): MIGRADA → <Section> py-16/md:py-24/lg:py-32, <Container> max-w-6xl gap-8, lista space-y-12, separador mt-6, pl-12; exceções mantidas: título display, watermark Anton, traço azul+mt-8 (regra 7 não aplicada a pedido); verificado 375/768/1440 sem scroll horizontal


- Testado: livre aos 400px, push automático aos ~700px → enquadra Problema, subida livre sem snap

- Pendente: Atletas 3 e 4 — o cliente ainda NÃO enviou fotos/nomes/ligas/citações (pedido em falta)

- Testado: abrir 1+4 em simultâneo ✓, fechar 1 mantém 4 ✓, junção imagem→preto perfeita ✓


- Cesto desenhado (Hoop SVG) REMOVIDO da faixa azul do hero; grelha técnica e restantes traços mantidos

- Conteúdos Atletas 3 e 4 do carrossel (foto, nome, liga, equipa, citação) + posição/citação do Alex
- Bios de Uxue e Gonçalo (Sobre) + revisão mobile da primeira metade (utilizador tinha dito "esquece o mobile" — revisitar quando quiser)

## Planes — botões em contorno + badge reposto (2026-08-24, parte 13)
- Badge "EL MÁS VENDIDO" (Pro): REPOSTA a pílula azul sólida (rounded-full bg-arcblue, texto branco, -top-3 left-8) — tinha sido removida na parte 12 a pedido, cliente voltou atrás
- Botões Basic/Pro/Duo: fundo azul sólido → estilo CONTORNO (bg-transparent, border-[1.5px] border-arcblue, text-arcblue, rounded-full) com hover a encher (hover:bg-arcblue hover:text-white), transição 250ms; sem qualquer ícone/emoji antes de "EMPEZAR"
- Cartão Pro mantém fundo azul claro #EEF0FC + ring-arcblue; Elite INTACTO (pílula branca + anel animado)
- Verificado por screenshot a 1440px: contorno correto em Basic/Duo, hover a encher confirmado no Pro
- DECISÕES DO CLIENTE (2026-08-24): revisão mobile 375px ADIADA ("ainda não"); fotos Uxía/Gonçalo e textos detail do acordeão Problema FICAM EM ESPERA ("depois")

## Hero — nota de apoio aos CTAs (2026-08-25)
- Nova linha por baixo dos botões: "Empieza con una valoración inicial gratuita." — Inter 14px (text-sm), ink2, palavra "gratuita" em #1B33DC; sem caixa/ícone/botão
- copy.js: nova chave hero.ctaNote {pre/em/post}
- Clicável → scroll suave Lenis (0.7s, ease-out cubic, mesmo do BackToTop) para a âncora #valoracion; hover escurece para ink (200ms), focus-visible com anel azul; testid hero-valoracion-link
- ⚠️ A SECÇÃO #valoracion AINDA NÃO EXISTE — o clique não leva a lado nenhum até a secção ser criada (cliente proibiu tocar fora do Hero neste pedido)
- Verificado 1440×900 e 1280×800: nada empurrado, legenda "— Arc.Lab Training System" continua no primeiro ecrã (fundo em 784px a 1280×800), sem scroll horizontal

## Nova secção Valoración (2026-08-25)
- Novo Valoracion.jsx entre Planes e Prueba (id="valoracion", SideNum "06", bg-bone, <Section>/<Container>, Eyebrow + Headline existentes, cantos azuis com o padrão Corner do Nutricion — <Brackets /> partilhado NÃO existia)
- Conteúdo em copy.js (bloco valoracion): overline "Primer paso", título "antes de elegir plan," + "hablamos." azul (Headline em Playfair itálico azul), texto da valoración, 3 formatos (Videollamada/Llamada/WhatsApp com ícones Video/Phone/MessageCircle, em linha sm+, empilhados no mobile — indicadores, NÃO botões), CTA único btn-blue "Pedir valoración" (rótulo escolhido por mim — não estava na spec, cliente pode trocar)
- data.js: nova mensagem MSGS.valoracion = "Hola, quiero una valoración inicial gratuita."
- FIX DE CONFLITO: o empurrão magnético do App.js intercetava o scroll programático do link do Hero (parava em Problema); adicionada bandeira lenisStore.suppressPush (1200ms) definida no clique e verificada no onScroll — sem alteração visual a nenhuma secção
- Verificado 1440/1024/375: sem scroll horizontal, formatos em linha/empilhados corretos; clique no link do Hero aterra em #valoracion (topo ≈96px = scroll-mt-24); empurrão magnético continua funcional após a supressão expirar (wheel 700 → 936)
