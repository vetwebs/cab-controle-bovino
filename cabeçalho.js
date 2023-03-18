
const menuDiv = document.getElementById('navegação-menu-mobile')

const btnAnimar = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animar)

function animar(){ 
    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativar')
}