//Recebendo informações preenchidas na página login.html
const inputNome = document.getElementById('nome');
const inputFazenda = document.getElementById('fazenda');

const nome = localStorage.getItem('nome');
const fazenda = localStorage.getItem('fazenda');

if (nome) {
  inputNome.value = nome;
}

if (fazenda) {
  inputFazenda.value = fazenda;
}

//Recebendo as informações preenchidas nos campos na página cadastro.html para enviar parar armazenamento 
