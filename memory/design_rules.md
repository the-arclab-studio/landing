# REGRAS DE DESIGN — ARC.LAB (impostas pelo cliente em 2026-08-17, aplicar a TODAS as alterações futuras)

## ESTRUTURA
1. Componente <Container> reutilizável: max-w-6xl mx-auto px-6. ✔ criado em Layout.jsx
2. Componente <Section> reutilizável com padding vertical padrão. ✔ criado em Layout.jsx
3. Nunca escrever valores de espaçamento à mão em componentes individuais. Valor usado em 2 sítios → vira componente.

## ESPAÇAMENTO
4. Escala Tailwind permitida: 2, 4, 6, 8, 12, 16, 24. Nunca valores arbitrários (p-[13px], mt-7).
5. Padding vertical das secções: py-16 mobile, md:py-24, lg:py-32 — igual em TODAS.
6. Gap entre cartões/colunas de grelha: gap-8.
7. Título→parágrafo: mb-4. Parágrafo→botão: mt-8.
8. Elementos relacionados mais juntos que não relacionados; espaço entre grupos > espaço dentro do grupo.

## TIPOGRAFIA
9. Máx. 2 famílias tipográficas no site.
10. Escala fixa: text-sm, text-base, text-lg, text-xl, text-3xl, text-5xl. Mais nenhuma.
11. Corpo: leading-relaxed. Títulos: leading-tight.
12. Parágrafo: max-w-prose (65 car.). Nunca linhas a atravessar o ecrã.
13. Texto longo alinhado à esquerda, nunca centrado.

## BOTÕES E INTERAÇÃO
18. Um único botão primário por secção; restantes secundários/links.
19. Área clicável mínima 44x44px.
20. Todo o interativo tem :hover e :focus-visible visível; anel de foco nunca removido.
21. Transições 150–250ms, ease-out. Nada mais lento.

## RESPONSIVO
22. Mobile primeiro, depois md: e lg:.
23. Verificar a 375px, 768px e 1440px.
24. Sem scroll horizontal em nenhuma largura.

## ESTADOS
25. Listas: estado vazio. Formulários: erro + sucesso. Ações lentas: carregamento.

## IMAGENS
26. Rácio fixo com object-cover (layout nunca salta ao carregar).
27. Todas as imagens com alt descritivo.

## COMO RESPONDER
28. Antes de alterar espaçamentos: dizer que classes estão aplicadas nesse bloco e AGUARDAR confirmação.
29. Uma secção de cada vez. Não tocar em nada não pedido.
30. Pedido em conflito com regras → AVISAR em vez de executar.
