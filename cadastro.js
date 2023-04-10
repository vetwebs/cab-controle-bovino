//Ocultar e Aparecer Divisão Informações Adicionais
function mostra(){
    document.getElementById('informacoes').style.display = 'flex';
}
//Receber as informações nos campos proprietário e fazenda na pagina cadastro.html
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

//Capturando as informações preenchidas do cadastro.html para os inputs resumo.html
