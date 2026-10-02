// Inicializa os campos somente quando a vista de cadastro é exibida.
window.RedeAcolher = window.RedeAcolher || {};
RedeAcolher.iniciarCadastro = function () {
// Este arquivo cuida das máscaras e da validação do cadastro.
// A simulação salva apenas as preferências de participação no navegador.

// 1. Localizar os elementos da página.
'use strict';

const formulario = document.getElementById('formulario-cadastro');
if (!formulario) return;
const resultado = document.getElementById('resultado');
const nascimento = document.getElementById('nascimento');
const participacao = document.getElementById('participacao');
const disponibilidade = document.getElementById('disponibilidade');
const campos = Array.from(formulario.querySelectorAll('input, select, textarea'));
const statusPreferencias = document.getElementById('preferencias-status');
const esquecerPreferencias = document.getElementById('esquecer-preferencias');
if (RedeAcolher.armazenamento.recuperar(formulario)) {
  statusPreferencias.textContent = 'Preferências de participação recuperadas deste navegador.';
  esquecerPreferencias.hidden = false;
}
esquecerPreferencias.addEventListener('click', () => {
  const removido = RedeAcolher.armazenamento.esquecer();
  statusPreferencias.textContent = removido ? 'Preferências salvas removidas. Os campos atuais não foram alterados.' : 'Não foi possível acessar o armazenamento deste navegador.';
  esquecerPreferencias.hidden = removido;
  statusPreferencias.setAttribute('tabindex', '-1');
  statusPreferencias.focus();
});

// A data de nascimento não pode ser maior que a data de hoje.
const agora = new Date();
const hoje = `${agora.getFullYear()}-${String(agora.getMonth() + 1).padStart(2, '0')}-${String(agora.getDate()).padStart(2, '0')}`;
nascimento.max = hoje;

// 2. Formatar CPF, telefone e CEP.
// /\D/g encontra todos os caracteres que não são números.
function somenteNumeros(valor) {
  return valor.replace(/\D/g, '');
}

// As expressões abaixo separam os números e acrescentam pontos e hífen.
function mascaraCPF(valor) {
  return somenteNumeros(valor).slice(0, 11)
    .replace(/^(\d{3})(\d)/, '$1.$2')
    .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
}

function mascaraCEP(valor) {
  return somenteNumeros(valor).slice(0, 8).replace(/^(\d{5})(\d)/, '$1-$2');
}

function mascaraTelefone(valor) {
  const numeros = somenteNumeros(valor).slice(0, 11);
  if (!numeros) return '';
  if (numeros.length <= 2) return `(${numeros}`;
  const local = numeros.slice(2);
  const prefixo = local.length > 8 ? 5 : 4;
  return `(${numeros.slice(0, 2)}) ${local.slice(0, prefixo)}` +
    (local.length > prefixo ? `-${local.slice(prefixo)}` : '');
}

// Liga a máscara ao campo e mantém o cursor no lugar durante a edição.
function aplicarMascara(campo, formatar) {
  campo.addEventListener('beforeinput', evento => {
    const inicio = campo.selectionStart;
    if (inicio !== campo.selectionEnd) return;
    // Ao apagar um separador, remove também o dígito vizinho.
    if (evento.inputType === 'deleteContentBackward' && inicio > 0 && /\D/.test(campo.value[inicio - 1])) {
      let posicao = inicio - 1;
      while (posicao > 0 && /\D/.test(campo.value[posicao])) posicao--;
      campo.setSelectionRange(posicao, inicio);
    }
    if (evento.inputType === 'deleteContentForward' && inicio < campo.value.length && /\D/.test(campo.value[inicio])) {
      let posicao = inicio;
      while (posicao < campo.value.length && /\D/.test(campo.value[posicao])) posicao++;
      campo.setSelectionRange(inicio, Math.min(posicao + 1, campo.value.length));
    }
  });
  campo.addEventListener('input', () => {
    const cursor = campo.selectionStart ?? campo.value.length;
    const noFinal = cursor === campo.value.length;
    const quantidade = somenteNumeros(campo.value.slice(0, cursor)).length;
    campo.value = formatar(campo.value);
    let posicao = 0;
    let contagem = 0;
    while (posicao < campo.value.length && contagem < quantidade) {
      if (/\d/.test(campo.value[posicao])) contagem++;
      posicao++;
    }
    campo.setSelectionRange(noFinal ? campo.value.length : posicao, noFinal ? campo.value.length : posicao);
  });
  campo.addEventListener('blur', () => { campo.value = formatar(campo.value); });
}

aplicarMascara(document.getElementById('cpf'), mascaraCPF);
aplicarMascara(document.getElementById('telefone'), mascaraTelefone);
aplicarMascara(document.getElementById('cep'), mascaraCEP);

// 3. Conferir os números informados.
// O CPF tem dois dígitos finais calculados a partir dos anteriores.
function cpfValido(valor) {
  const cpf = somenteNumeros(valor);
  if (!/^\d{11}$/.test(cpf) || /^(\d)\1{10}$/.test(cpf)) return false;
  // Calcula primeiro o décimo dígito e depois o décimo primeiro.
  for (let tamanho = 9; tamanho <= 10; tamanho++) {
    let soma = 0;
    for (let i = 0; i < tamanho; i++) soma += Number(cpf[i]) * (tamanho + 1 - i);
    const resto = (soma * 10) % 11;
    const digito = resto === 10 ? 0 : resto;
    if (digito !== Number(cpf[tamanho])) return false;
  }
  return true;
}

// Lista de DDDs brasileiros aceitos.
const ddds = '11 12 13 14 15 16 17 18 19 21 22 24 27 28 31 32 33 34 35 37 38 41 42 43 44 45 46 47 48 49 51 53 54 55 61 62 63 64 65 66 67 68 69 71 73 74 75 77 79 81 82 83 84 85 86 87 88 89 91 92 93 94 95 96 97 98 99'.split(' ');

function telefoneValido(valor) {
  const numeros = somenteNumeros(valor);
  return ddds.includes(numeros.slice(0, 2)) &&
    (/^\d{2}[2-5]\d{7}$/.test(numeros) || /^\d{2}9\d{8}$/.test(numeros));
}

// 4. A disponibilidade é obrigatória somente para voluntariado.
function atualizarDisponibilidade() {
  disponibilidade.required = ['voluntario', 'ambos'].includes(participacao.value);
  document.getElementById('label-disponibilidade').textContent = disponibilidade.required ? 'Disponibilidade *' : 'Disponibilidade (opcional)';
  limparErro(disponibilidade);
}
participacao.addEventListener('change', atualizarDisponibilidade);
atualizarDisponibilidade();

// Complementa required, pattern e os outros atributos do HTML.
// setCustomValidity com texto bloqueia o campo; com texto vazio libera.
function validarComplemento(campo) {
  campo.setCustomValidity('');
  const valor = campo.value.trim();
  if (!valor) {
    if (campo.required && campo.value && campo.type !== 'checkbox') campo.setCustomValidity('Preencha este campo sem usar apenas espaços.');
    return;
  }
  if (campo.id === 'nome' && valor.split(/\s+/).length < 2) campo.setCustomValidity('Informe seu nome e sobrenome.');
  if (campo.id === 'cpf' && !cpfValido(valor)) campo.setCustomValidity('Informe um CPF com 11 números e dígitos verificadores válidos.');
  if (campo.id === 'telefone' && !telefoneValido(valor)) campo.setCustomValidity('Informe um telefone válido com DDD: fixo com 10 números ou celular com 11.');
  if (campo.id === 'cep' && (!/^\d{8}$/.test(somenteNumeros(valor)) || somenteNumeros(valor) === '00000000')) campo.setCustomValidity('Informe um CEP com 8 números, diferente de 00000-000.');
}

// 5. Mostrar os erros também como texto abaixo dos campos.
function mensagemErro(campo) {
  if (campo.validity.customError) return campo.validationMessage;
  if (campo.validity.valueMissing) return campo.type === 'checkbox' ? 'Marque a confirmação para concluir a simulação.' : 'Preencha ou selecione este campo obrigatório.';
  if (campo.validity.typeMismatch) return 'Informe um e-mail válido, como nome@exemplo.com.';
  if (campo.validity.rangeOverflow || campo.validity.rangeUnderflow) return 'Informe uma data de nascimento entre 01/01/1900 e hoje.';
  if (campo.validity.tooShort) return `Use pelo menos ${campo.minLength} caracteres.`;
  if (campo.validity.patternMismatch) return 'Confira o formato indicado abaixo do campo.';
  return 'Confira o valor informado.';
}

function mostrarErro(campo) {
  campo.setAttribute('aria-invalid', 'true');
  document.getElementById(campo.id + '-erro').textContent = mensagemErro(campo);
}

function limparErro(campo) {
  campo.removeAttribute('aria-invalid');
  document.getElementById(campo.id + '-erro').textContent = '';
}

for (const campo of campos) {
  campo.addEventListener('input', () => {
    validarComplemento(campo);
    if (campo.hasAttribute('aria-invalid')) {
      if (campo.validity.valid) limparErro(campo);
      else mostrarErro(campo);
    }
    resultado.hidden = true;
  });
  campo.addEventListener('change', () => {
    validarComplemento(campo);
    if (campo.validity.valid) limparErro(campo);
    resultado.hidden = true;
  });
  campo.addEventListener('blur', () => {
    validarComplemento(campo);
    if (!campo.validity.valid) mostrarErro(campo);
    else limparErro(campo);
  });
}

// 6. Concluir ou limpar o formulário.
// A validação nativa do navegador continua ativa.
formulario.addEventListener('invalid', evento => mostrarErro(evento.target), true);
formulario.addEventListener('submit', evento => {
  // Evita o envio dos dados e a recarga da página.
  evento.preventDefault();
  campos.forEach(validarComplemento);
  if (!formulario.reportValidity()) return;
  campos.forEach(limparErro);
  const salvo = RedeAcolher.armazenamento.guardar(formulario);
  statusPreferencias.textContent = salvo ? 'Preferências de participação salvas neste navegador.' : 'O navegador não permitiu salvar as preferências. A validação foi concluída normalmente.';
  esquecerPreferencias.hidden = !salvo;
  resultado.textContent = 'Simulação concluída! Os campos passaram pela validação. Nenhum dado pessoal foi enviado ou armazenado e nenhuma inscrição real foi realizada.';
  resultado.hidden = false;
  resultado.focus();
});

formulario.addEventListener('reset', () => {
  campos.forEach(campo => { campo.setCustomValidity(''); limparErro(campo); });
  resultado.textContent = '';
  resultado.hidden = true;
  // Aguarda o navegador restaurar os valores iniciais do formulário.
  setTimeout(atualizarDisponibilidade, 0);
});

// O endereço pode conter ?projeto=educacao, por exemplo.
// Nesse caso, seleciona o projeto que a pessoa clicou na página anterior.
const projetoSugerido = new URLSearchParams(window.location.search).get('projeto');
const projeto = document.getElementById('projeto');
for (const opcao of projeto.options) {
  if (opcao.value === projetoSugerido) {
    projeto.value = projetoSugerido;
  }
}

document.getElementById('concluir').disabled = false;

};
