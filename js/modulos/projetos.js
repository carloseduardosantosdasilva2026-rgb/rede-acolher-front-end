// Dados dos projetos e um único modelo de cartão.
window.RedeAcolher = window.RedeAcolher || {};
RedeAcolher.projetos = [
  {
    "id": "educacao",
    "categoria": "Educação",
    "nome": "Aprender Juntos",
    "descricao": "Uma proposta de apoio à leitura e de oficinas educativas para crianças e jovens, com atividades que valorizam a curiosidade e a troca de conhecimentos.",
    "alt": "Ilustração de um livro aberto com uma pequena planta ao lado.",
    "detalhes": [
      "Crianças e jovens da comunidade.",
      "Rodas de leitura, apoio aos estudos e oficinas de inclusão digital.",
      "Compartilhar conhecimentos, organizar materiais ou apoiar a preparação das oficinas."
    ]
  },
  {
    "id": "alimentacao",
    "categoria": "Alimentação",
    "nome": "Mesa Compartilhada",
    "descricao": "Uma iniciativa de mobilização para apoiar famílias por meio de campanhas de alimentos e encontros sobre aproveitamento e preparo de refeições.",
    "alt": "Ilustração de uma cesta com vegetais e alimentos.",
    "detalhes": [
      "Famílias em situação de vulnerabilidade social.",
      "Organização de campanhas, montagem de cestas e oficinas de alimentação.",
      "Colaborar na organização, divulgar campanhas ou demonstrar interesse em apoiar com alimentos."
    ]
  },
  {
    "id": "convivencia",
    "categoria": "Convivência",
    "nome": "Laços da Comunidade",
    "descricao": "Encontros que aproximam pessoas de diferentes gerações, promovem escuta e incentivam atividades culturais e colaborativas.",
    "alt": "Ilustração de duas pessoas conversando em um banco, junto a uma árvore.",
    "detalhes": [
      "Moradores de todas as idades, com atenção às pessoas idosas.",
      "Rodas de conversa, atividades culturais e encontros comunitários.",
      "Apoiar a organização dos encontros, compartilhar habilidades artísticas e acolher participantes."
    ]
  }
];
RedeAcolher.iniciarProjetos = function () {
  const modelo = document.getElementById('modelo-projeto');
  if (!modelo) return;
  const lista = document.querySelector('.projetos');
  const busca = document.getElementById('busca-projetos');
  const quantidade = document.getElementById('quantidade-projetos');
  const normalizar = valor => valor.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  function atualizar() {
    lista.querySelectorAll('article').forEach(cartao => cartao.remove());
    const termo = normalizar(busca.value.trim());
    const encontrados = RedeAcolher.projetos.filter(projeto => normalizar(projeto.nome + ' ' + projeto.categoria + ' ' + projeto.descricao).includes(termo));
    encontrados.forEach(projeto => {
      const fragmento = modelo.content.cloneNode(true);
      const cartao = fragmento.querySelector('article');
      cartao.id = projeto.id;
      cartao.querySelector('.badge').textContent = projeto.categoria;
      cartao.querySelector('h3').textContent = projeto.nome;
      cartao.querySelector('p').textContent = projeto.descricao;
      const imagem = cartao.querySelector('img');
      imagem.src = '../imagens/' + projeto.id + '.svg';
      imagem.alt = projeto.alt;
      cartao.querySelector('source[type="image/webp"]').srcset = '../imagens/' + projeto.id + '.webp';
      cartao.querySelector('source[type="image/png"]').srcset = '../imagens/' + projeto.id + '.png';
      cartao.querySelectorAll('dd').forEach((campo, indice) => { campo.textContent = projeto.detalhes[indice]; });
      const link = cartao.querySelector('a');
      link.href = '#cadastro/' + projeto.id;
      link.textContent = 'Participar do ' + projeto.nome;
      lista.appendChild(fragmento);
    });
    quantidade.textContent = encontrados.length ? encontrados.length + ' projeto(s) encontrado(s).' : 'Nenhum projeto encontrado. Tente outro termo.';
  }
  busca.addEventListener('input', atualizar);
  atualizar();
};
