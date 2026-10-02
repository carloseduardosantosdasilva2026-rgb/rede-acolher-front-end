// O menu permanece disponível quando o JavaScript está desativado.
document.documentElement.classList.add('com-js');
const botaoMenu = document.querySelector('.menu-botao');
const menu = document.getElementById('menu-principal');
botaoMenu.hidden = false;

function fecharMenu() {
  menu.classList.remove('aberto');
  botaoMenu.setAttribute('aria-expanded', 'false');
}

botaoMenu.addEventListener('click', function () {
  const aberto = menu.classList.toggle('aberto');
  botaoMenu.setAttribute('aria-expanded', String(aberto));
});

menu.addEventListener('keydown', function (evento) {
  if (evento.key === 'Escape') {
    const submenu = menu.querySelector('details[open]');
    if (submenu) {
      submenu.open = false;
      submenu.querySelector('summary').focus();
    } else if (window.innerWidth < 768) {
      fecharMenu();
      botaoMenu.focus();
    }
  }
});

// Escape também fecha o menu quando o foco está no próprio botão.
botaoMenu.addEventListener('keydown', function (evento) {
  if (evento.key === 'Escape') fecharMenu();
});

const telaAmpla = window.matchMedia('(min-width: 768px)');
telaAmpla.addEventListener('change', fecharMenu);


window.RedeAcolher = window.RedeAcolher || {};
RedeAcolher.fecharMenu = fecharMenu;
RedeAcolher.iniciarFeedback = function () {
// O dialog nativo controla o foco e pode ser fechado com Escape.
const modal = document.getElementById('modal-informacao');
const abrirModal = document.querySelector('.abrir-modal');
if (modal && abrirModal) {
  abrirModal.hidden = false;
  abrirModal.addEventListener('click', function () {
    modal.showModal();
  });
  if (!modal.dataset.iniciado) {
    modal.addEventListener('close', function () {
      document.querySelector('.abrir-modal')?.focus();
    });
    modal.dataset.iniciado = 'true';
  }
}

// Alerta textual complementa as mensagens individuais do formulário.
const cadastro = document.getElementById('formulario-cadastro');
const alerta = document.getElementById('alerta-formulario');
if (cadastro && alerta) {
  cadastro.addEventListener('invalid', function () {
    alerta.hidden = false;
  }, true);
  cadastro.addEventListener('submit', function () {
    alerta.hidden = true;
  });
  cadastro.addEventListener('reset', function () {
    alerta.hidden = true;
  });
}

};
