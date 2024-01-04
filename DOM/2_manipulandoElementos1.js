const titulo = document.querySelector('h1')
const divLista1 = document.querySelector('#teste1')
const divLista2 = document.querySelector('#teste2')
let itemAdd = 1

function alterarH1() {
  titulo.innerText = 'h1 alterado!'
}

function addItemLista1() {
  divLista1.children[0].innerHTML += `<li>Item Adicionado ${itemAdd}</li>`
  itemAdd++
}

let virarOl = true
function substituirLista2() {
  if (virarOl) {
    divLista2.children[0].outerHTML = `<ol><li>Item numerado 1</li><li>Item numerado 2</li></ol>`
    botao2.innerText = 'Inumerar lista 2'
    virarOl = false
  } else {
    divLista2.children[0].outerHTML = `<ul><li>Item não numerado 1</li><li>Item não numerado 2</li></ul>`
    botao2.innerText = 'Numerar lista 2'
    virarOl = true
  }

}

const botao0 = document.querySelectorAll('.botao')[0]
botao0.addEventListener('click', alterarH1)

const botao1 = document.querySelectorAll('.botao')[1]
botao1.addEventListener('click', addItemLista1)

const botao2 = document.querySelectorAll('.botao')[2]
botao2.addEventListener('click', substituirLista2)