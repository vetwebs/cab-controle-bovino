//Ocultar e Aparecer Divisão Informações Adicionais
function mostra(){
    document.getElementById('informacoes').style.display = 'flex';
}
//Validação de Cadastro da página login.html
const formulario = document.querySelector('#form')
const proprietarioInput = document.querySelector('#proprietario')
const fazendaInput = document.querySelector('#fazenda')


formulario.addEventListener("submit", (event) =>{
    event.preventDefault();

//verificar se o nome está vazio
    if(proprietarioInput.value ==""){
        alert('Preencha o campo Proprietário (a).');
        return;
    }
//Verificar se o nome da fazenda está preenchida
    if(fazendaInput.value==""){
        alert('Preencha o campo fazenda.');
        return;
    }
//Todos os campos estiverem preenchidos continue
    formulario.submit();
    return false;
})

