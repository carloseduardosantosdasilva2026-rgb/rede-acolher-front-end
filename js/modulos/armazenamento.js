// Guarda somente escolhas de participação, sem dados de identificação.
window.RedeAcolher = window.RedeAcolher || {};
RedeAcolher.armazenamento = (function () {
  const chave = 'rede-acolher.preferencias.v1';
  const campos = ['participacao', 'projeto', 'disponibilidade'];

  function recuperar(formulario) {
    try {
      const preferencias = JSON.parse(localStorage.getItem(chave) || 'null');
      if (!preferencias || typeof preferencias !== 'object' || Array.isArray(preferencias)) return false;
      let recuperado = false;
      campos.forEach(id => {
        const campo = formulario.querySelector('#' + id);
        const valor = preferencias[id];
        if (typeof valor === 'string' && [...campo.options].some(opcao => opcao.value === valor)) {
          campo.value = valor;
          recuperado = true;
        }
      });
      return recuperado;
    } catch (erro) {
      return false;
    }
  }

  function guardar(formulario) {
    try {
      const preferencias = {};
      campos.forEach(id => { preferencias[id] = formulario.querySelector('#' + id).value; });
      localStorage.setItem(chave, JSON.stringify(preferencias));
      return true;
    } catch (erro) {
      return false;
    }
  }

  function esquecer() {
    try {
      localStorage.removeItem(chave);
      return true;
    } catch (erro) {
      return false;
    }
  }
  return { recuperar, guardar, esquecer };
})();
