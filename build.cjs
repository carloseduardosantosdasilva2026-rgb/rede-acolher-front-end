// Gera a pasta docs para publicação. O código de estudo permanece separado.
const fs = require('fs');
const path = require('path');
const { minify } = require('terser');
const CleanCSS = require('clean-css');
const raiz = __dirname;
const destino = path.join(raiz, 'docs');

async function gerar() {
  // Cria somente pastas pertencentes ao projeto; não remove outros arquivos.
  for (const pasta of ['', 'css', 'js', 'imagens']) {
    fs.mkdirSync(path.join(destino, pasta), { recursive: true });
  }
  const arquivosJS = [
    'modulos/templates.js', 'modulos/armazenamento.js', 'cadastro.js',
    'interface.js', 'modulos/projetos.js', 'modulos/roteamento.js', 'main.js'
  ];
  const codigoJS = arquivosJS.map(nome => fs.readFileSync(path.join(raiz, 'js', nome), 'utf8'))
    .join('\n').replaceAll('../imagens/', 'imagens/');
  const javascript = await minify(codigoJS);
  if (!javascript.code) throw new Error('Não foi possível gerar o JavaScript.');
  fs.writeFileSync(path.join(destino, 'js/app.min.js'), javascript.code);

  const codigoCSS = fs.readFileSync(path.join(raiz, 'css/estilos.css'), 'utf8');
  const css = new CleanCSS({ level: 1 }).minify(codigoCSS);
  if (css.errors.length) throw new Error(css.errors.join('\n'));
  fs.writeFileSync(path.join(destino, 'css/estilos.min.css'), css.styles);

  for (const pagina of ['index', 'projetos', 'cadastro']) {
    let html = fs.readFileSync(path.join(raiz, 'html', pagina + '.html'), 'utf8');
    html = html.replace(/\s*<script src="[^" ]+" defer><\/script>/g, '');
    html = html.replace('</head>', '    <script src="js/app.min.js" defer></script>\n  </head>');
    html = html.replace('../css/estilos.css', 'css/estilos.min.css').replaceAll('../imagens/', 'imagens/');
    html = html.replace(/<!--[\s\S]*?-->/g, '').replace(/>\s+\n\s*</g, '><').trim();
    fs.writeFileSync(path.join(destino, pagina + '.html'), html);
  }
  for (const nome of fs.readdirSync(path.join(raiz, 'imagens'))) {
    const origem = path.join(raiz, 'imagens', nome);
    if (nome.endsWith('.svg')) {
      const svg = fs.readFileSync(origem, 'utf8').replace(/<!--[\s\S]*?-->/g, '').replace(/>\s+</g, '><').trim();
      fs.writeFileSync(path.join(destino, 'imagens', nome), svg);
    } else {
      fs.copyFileSync(origem, path.join(destino, 'imagens', nome));
    }
  }
  fs.writeFileSync(path.join(destino, '.nojekyll'), '');
  console.log('Publicação gerada em docs/ com HTML, CSS e JavaScript otimizados.');
}
gerar().catch(erro => { console.error(erro.message); process.exitCode = 1; });
