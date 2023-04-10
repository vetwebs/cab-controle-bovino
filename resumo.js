//Recebendo as informações preenchidas nos campos na página cadastro.html para enviar parar armazenamento 
const nomeAnimalResumo = document.getElementById('nomeAnimalResumo');

const nomeAnimalCadastro = localStorage.getItem('nomeAnimalCadastro');

if(nomeAnimalCadastro){
  nomeAnimalResumo.value = nomeAnimalCadastro;
}
//Numero Animal
const numeroAnimalResumo = document.getElementById('numeroAnimalResumo')

const numeroAnimalCadastro = localStorage.getItem('numeroAnimalCadastro');

if(numeroAnimalCadastro){
  numeroAnimalResumo.value = numeroAnimalCadastro;
}
//--------Meses Animal
const mesesAnimalResumo = document.getElementById('mesesAnimalResumo');

const mesesAnimalCadastro = localStorage.getItem('mesesAnimalCadastro');

if(mesesAnimalCadastro){
  mesesAnimalResumo.value = mesesAnimalCadastro;
}

//---------------Raça
const racaAnimalResumo = document.getElementById('racaAnimalResumo')

const racaAnimalCadastro = localStorage.getItem('racaAnimalCadastro');

if(racaAnimalCadastro){
  racaAnimalResumo.value = racaAnimalCadastro;
}

//----------------Lote
const loteAnimalResumo = document.getElementById('loteAnimalResumo')

const loteAnimalCadastro = localStorage.getItem('loteAnimalCadastro');

if(loteAnimalCadastro){
  loteAnimalResumo.value = loteAnimalCadastro; 
}
//----------------Categoria
const categoriaAnimalResumo = document.getElementById('categoriaAnimalResumo');

const categoriaAnimalCadastro = localStorage.getItem('categoriaAnimalCadastro');

if(categoriaAnimalCadastro){
  categoriaAnimalResumo.value = categoriaAnimalCadastro;
}
//======DADOS FILIAÇÃO
//--------Nome Mãe
const nomeMaeResumo = document.getElementById('nomeMaeResumo');

const nomeMaeCadastro = localStorage.getItem('nomeMaeCadastro')

if(nomeMaeCadastro){
  nomeMaeResumo.value = nomeMaeCadastro;
}
//--------Raça Nome Mãe
const racaMaeResumo = document.getElementById('racaMaeResumo');

const racaMaeCadastro = localStorage.getItem('racaMaeCadastro');

if(racaMaeCadastro){
  racaMaeResumo.value = racaMaeCadastro;
}
//--------Numero Nome Mãe
const numeroMaeResumo = document.getElementById('numeroMaeResumo');

const numeroMaeCadastro = localStorage.getItem('numeroMaeCadastro');

if(numeroMaeCadastro){
  numeroMaeResumo.value = numeroMaeCadastro;
}
//-----Lote Mãe
const loteMaeResumo = document.getElementById('loteMaeResumo');

const loteMaeCadastro = localStorage.getItem('loteMaeCadastro');

if(loteMaeCadastro){
  loteMaeResumo.value = loteMaeCadastro;
}

//--------Nome Pai
const nomePaiResumo = document.getElementById('nomePaiResumo');

const nomePaiCadastro = localStorage.getItem('nomePaiCadastro');

if(nomePaiCadastro){
  nomePaiResumo.value = nomePaiCadastro;
}
//--------Numero Pai
const numeroPaiResumo = document.getElementById('numeroPaiResumo');

const numeroPaiCadastro = localStorage.getItem('numeroPaiCadastro');

if(numeroPaiCadastro){
  numeroPaiResumo.value = numeroPaiCadastro;
}
//--------Raça Pai
const racaPaiResumo = document.getElementById('racaPaiResumo');

const racaPaiCadastro = localStorage.getItem('racaPaiCadastro');

if(racaPaiCadastro){
  racaPaiResumo.value = racaPaiCadastro;
}
//--------Lote Pai
const lotePaiResumo = document.getElementById('lotePaiResumo');

const lotePaiCadastro = localStorage.getItem('lotePaiCadastro');

if(lotePaiCadastro){
  lotePaiResumo.value = lotePaiCadastro;
}

