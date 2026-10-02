// As rotas usam o hash: o navegador conserva os botões Voltar e Avançar.
window.RedeAcolher = window.RedeAcolher || {};
RedeAcolher.iniciarRotas = function () {
  const conteudo = document.getElementById('conteudo');
  const titulos = { inicio: 'Conheça a ONG', projetos: 'Projetos sociais', cadastro: 'Cadastro de participação' };
  const arquivo = location.pathname.split('/').pop();
  const inicial = arquivo === 'projetos.html' ? 'projetos' : arquivo === 'cadastro.html' ? 'cadastro' : 'inicio';
  let atual = '';

  // Mantém links HTML tradicionais como alternativa sem JavaScript.
  document.querySelectorAll('header a, footer a').forEach(link => {
    const endereco = link.getAttribute('href');
    if (!endereco || !/^(index|projetos|cadastro)\.html/.test(endereco)) return;
    const nome = endereco.startsWith('index') ? 'inicio' : endereco.split('.html')[0];
    const ancora = endereco.split('#')[1];
    link.href = '#' + nome + (ancora ? '/' + ancora : '');
  });

  function renderizar() {
    if (location.hash === '#conteudo') return;
    const partes = location.hash.slice(1).split('/');
    const rota = Object.hasOwn(titulos, partes[0]) ? partes[0] : inicial;
    // Substitui apenas a área principal; cabeçalho e rodapé permanecem.
    if (rota !== atual) {
      conteudo.innerHTML = RedeAcolher.templates[rota];
      atual = rota;
      document.title = titulos[rota] + ' | Rede Acolher';
      RedeAcolher.iniciarCadastro();
      RedeAcolher.iniciarFeedback();
      if (RedeAcolher.iniciarProjetos) RedeAcolher.iniciarProjetos();
    }
    if (rota === 'cadastro' && partes[1]) {
      const projeto = document.getElementById('projeto');
      if ([...projeto.options].some(opcao => opcao.value === partes[1])) projeto.value = partes[1];
    }
    document.querySelectorAll('header nav a, footer nav a').forEach(link => {
      const selecionado = link.getAttribute('href') === '#' + rota;
      if (selecionado) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    RedeAcolher.fecharMenu();
    document.querySelectorAll('header details[open]').forEach(item => { item.open = false; });
    const destino = rota === 'projetos' && partes[1] ? document.getElementById(partes[1]) : null;
    if (destino && conteudo.contains(destino)) {
      destino.setAttribute('tabindex', '-1');
      destino.focus();
      destino.scrollIntoView();
    } else {
      conteudo.focus({ preventScroll: true });
      window.scrollTo(0, 0);
    }
  }
  window.addEventListener('hashchange', renderizar);
  renderizar();
};
