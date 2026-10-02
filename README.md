# Rede Acolher

Projeto acadêmico de Desenvolvimento Front-End para Web. A Rede Acolher e seus contatos são fictícios. O site apresenta a ONG, três projetos sociais e um cadastro demonstrativo.

## Abrir e estudar

Abra `html/index.html` no navegador. Não é preciso instalar nada para usar o site ou estudar o código. As pastas `html`, `css` e `js` contêm os arquivos legíveis.

Os links usam rotas com hash: `#inicio`, `#projetos` e `#cadastro`. A troca de conteúdo mantém o cabeçalho e o rodapé, e os botões Voltar e Avançar continuam disponíveis. As três páginas também permitem leitura e navegação com JavaScript desativado; a conclusão do cadastro exige JavaScript.

## Estrutura

- `html/`: index.html, projetos.html e cadastro.html.
- `css/estilos.css`: cores, layout, responsividade e estados dos componentes.
- `js/modulos/`: templates, roteamento, projetos e armazenamento de preferências.
- `js/cadastro.js`: máscaras, validações e mensagens dos campos.
- `js/interface.js`: menu, alertas e modal.
- `js/main.js`: inicia as rotas.
- `imagens/`: quatro ilustrações em SVG, PNG e WebP.
- `docs/`: versão otimizada para publicação no GitHub Pages.
- `build.cjs`: reúne e minifica os scripts, minifica CSS e prepara os caminhos e as páginas de publicação.
- `ACESSIBILIDADE.md`: recursos e limites da revisão realizada.
- `CONTRIBUTING.md`: como alterar, revisar e lançar uma versão.
- `CHANGELOG.md`: alterações e regra de versionamento semântico.

## Cadastro e dados

Use apenas dados fictícios. Os dados pessoais não são enviados nem armazenados. Somente participação, projeto e disponibilidade são salvos no navegador depois de uma validação bem-sucedida. O botão “Esquecer preferências salvas” remove essas escolhas. A simulação funciona mesmo se o navegador bloquear esse armazenamento.

Não há servidor de cadastro, inscrição real ou cobrança. CPF, telefone e CEP têm máscaras e validação de formato; o CPF também tem seus dígitos verificadores conferidos.

## Gerar a publicação

Para atualizar a versão de produção, use Node.js e npm:

```text
npm ci
npm run build
```

As duas dependências de desenvolvimento, Terser e Clean-CSS, são usadas somente nessa preparação. O site publicado usa apenas HTML, CSS e JavaScript e não carrega essas ferramentas no navegador. A pasta `docs` já está pronta para uso.

No GitHub Pages, selecione publicação a partir da branch `main`, pasta `/docs`. Os arquivos publicados têm caminhos relativos e as rotas com hash dispensam configuração de redirecionamento no servidor.

## Verificar e manter

Confira os três menus e vistas, busca de projetos, cadastro vazio e válido, máscaras, retorno do histórico, preferências, navegação por Tab/Enter/Escape e layout em telas estreitas. Revise o HTML no W3C Validator e a acessibilidade após mudanças. Recrie `docs` sempre que alterar os arquivos-fonte.

O fluxo usa `main`, `develop`, branches `feature/` e `release/`. Os commits descrevem a finalidade da alteração, e os pull requests permitem revisar o conjunto antes da integração. O projeto é individual.
