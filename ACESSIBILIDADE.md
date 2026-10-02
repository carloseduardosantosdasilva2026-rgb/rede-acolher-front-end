# Revisão de acessibilidade

Referência: [WCAG 2.1, níveis A e AA](https://www.w3.org/TR/WCAG21/).

## Recursos presentes

- HTML em português, um h1 por vista, títulos em ordem e regiões header, nav, main e footer.
- Imagens informativas com descrição em alt.
- Atalho para o conteúdo, foco visível, menu operável por Enter e Escape e atualização do foco nas mudanças de vista.
- Modal nativo com nome, descrição, fechamento por Escape e retorno ao botão de abertura.
- Labels associados aos campos, fieldsets com legends, instruções de formato, erros textuais e aria-invalid.
- Mensagens de estado anunciadas por role=status; alerta de erro com role=alert.
- Contraste de textos e controles, layout que se reorganiza em 320 CSS px e respeito à preferência de movimento reduzido.

## Verificação realizada

As três vistas passaram pela análise automatizada do axe-core com as regras WCAG 2.1 A e AA, sem violações encontradas. Foram verificadas também a navegação por teclado, o atalho, o menu móvel, o modal, o reflow e o espaçamento ampliado de texto. A árvore de acessibilidade foi inspecionada para conferir nomes, títulos e regiões.

O foco do cabeçalho foi ajustado para uma cor clara sobre o verde. O carregamento inicial conserva o atalho como primeiro destino do Tab. Escape também fecha o menu quando seu botão está focado.

A análise automatizada e a inspeção da árvore não substituem um teste humano completo com leitor de tela. Não foi realizado um teste com NVDA ou uma certificação formal de conformidade.
