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
const nomeAnimalCadastro = document.getElementById('nomeAnimalCadastro');

const numeroAnimalCadastro = document.getElementById('numeroAnimalCadastro');

const mesesAnimalCadastro = document.getElementById('mesesAnimalCadastro');

const racaAnimalCadastro = document.getElementById('racaAnimalCadastro');

const loteAnimalCadastro = document.getElementById('loteAnimalCadastro');

const categoriaAnimalCadastro = document.getElementById('categoriaAnimalCadastro');

const nomeMaeCadastro = document.getElementById('nomeMaeCadastro');

const racaMaeCadastro = document.getElementById('racaMaeCadastro')

const numeroMaeCadastro = document.getElementById('numeroMaeCadastro')

const loteMaeCadastro = document.getElementById('loteMaeCadastro')

const nomePaiCadastro = document.getElementById('nomePaiCadastro')

const numeroPaiCadastro = document.getElementById('numeroPaiCadastro')

const racaPaiCadastro = document.getElementById('racaPaiCadastro')

const lotePaiCadastro = document.getElementById('lotePaiCadastro')



nomeAnimalCadastro.addEventListener('input', (event) => {
  localStorage.setItem('nomeAnimalCadastro', event.target.value);
});

numeroAnimalCadastro.addEventListener('input', (event) => {
  localStorage.setItem('numeroAnimalCadastro', event.target.value);
});

mesesAnimalCadastro.addEventListener('input', (event) => {
  localStorage.setItem('mesesAnimalCadastro', event.target.value);
});

racaAnimalCadastro.addEventListener('input', (event) => {
  localStorage.setItem('racaAnimalCadastro', event.target.value);
});

loteAnimalCadastro.addEventListener('input', (event) => {
  localStorage.setItem('loteAnimalCadastro', event.target.value);
});

categoriaAnimalCadastro.addEventListener('input', (event) => {
  localStorage.setItem('categoriaAnimalCadastro', event.target.value);
});

nomeMaeCadastro.addEventListener('input', (event) => {
  localStorage.setItem('nomeMaeCadastro', event.target.value);
});

racaMaeCadastro.addEventListener('input', (event) => {
  localStorage.setItem('racaMaeCadastro', event.target.value);
});

numeroMaeCadastro.addEventListener('input', (event) => {
  localStorage.setItem('numeroMaeCadastro', event.target.value);
});

loteMaeCadastro.addEventListener('input', (event) => {
  localStorage.setItem('loteMaeCadastro', event.target.value);
});

nomePaiCadastro.addEventListener('input', (event) => {
  localStorage.setItem('nomePaiCadastro', event.target.value);
});

numeroPaiCadastro.addEventListener('input', (event) => {
  localStorage.setItem('numeroPaiCadastro', event.target.value);
});

racaPaiCadastro.addEventListener('input', (event) => {
  localStorage.setItem('racaPaiCadastro', event.target.value);
});

lotePaiCadastro.addEventListener('input', (event) => {
  localStorage.setItem('lotePaiCadastro', event.target.value);
});








