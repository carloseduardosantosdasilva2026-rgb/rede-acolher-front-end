# Como alterar o projeto

1. Parta de develop e crie uma branch feature/nome-da-alteracao.
2. Edite os arquivos legíveis de html, css e js.
3. Confira navegação, cadastro, teclado, imagens e telas estreitas.
4. Execute npm ci e npm run build para atualizar docs.
5. Faça um commit com o tipo e o propósito: feat para funcionalidade, fix para correção, docs para documentação ou build para preparação da publicação.
6. Abra um pull request para develop. Descreva a alteração e os testes; revise o diff antes de integrar.
7. Para lançar, crie release/versao a partir de develop, faça a revisão final e integre em main. Marque a versão com uma tag como v1.0.0 e sincronize develop.

Hotfix fica reservado a correções urgentes da versão publicada. O projeto é individual; um pull request registra a revisão da alteração, sem pressupor a participação de outro colega.

Não preencha o cadastro com dados reais. Ele demonstra validações e armazena somente preferências locais de participação.
