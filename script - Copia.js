function handleClicou() {
  const teste1 = document.querySelector('#teste1')
  const ul = teste1.querySelector('ul')

  // a função append possui o mesmo principio do innerText, porem ela apenas adiciona o conteudo, ja os "inner's" sobrepõe o conteudo (em larga escala pode piorar o processamento!)
  ul.children[0].append(" alteração")
  ul.children[1].innerText += " alteração"
  
  // Porem o append não funciona igual o innerHTML, ira intepretar tudo como texto
  ul.append("<li>Novo item</li>")
  ul.innerHTML += "<li>Novo item</li>"
  // Para poder adicionar novos elementos é preciso usar o appendChild, para usar deve ser acompanha de um createElement, segue exemplo abaixo
  let newLi = document.createElement("li")
  newLi.innerText = 'Novo item append Child'
  
  let newLiPrep = document.createElement("li")
  newLiPrep.innerText = 'Novo item prepend'
  ul.appendChild(newLi) // Aqui poderia ser apenas o append tbm
  // O appendChild aceita somente elementos, não aceita textos, ja o append aceita elementos e textos, basta fazer como o exemplo abaixo
  let newLiAppend = document.createElement("li")
  newLiAppend.innerText = 'Novo item append'
  ul.append(newLiAppend) // Aqui poderia ser apenas o append tbm
  // ATENÇÃO: o append adiciona o item no final do objeto escolhido, para por ser no começo se usa o prepend

  // prepend é nada mais que um append porem no inicio da seleção
  ul.children[0].prepend("Alteração ")
  ul.prepend(newLiPrep)
  ul.prepend("<li>Novo item</li>")

  // Atenção, caso um prepend e um append recebam a mesma variavel como saida, apenas o ultimo (em ordem no código) será lançado
}

const botao = document.querySelector('.botao')
botao.addEventListener('click', handleClicou)