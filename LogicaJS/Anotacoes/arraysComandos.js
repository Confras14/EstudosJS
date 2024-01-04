let cores = ['Azul', 'Verde', 'Vermelho', 'Amarelo', 'Ciano', 'Rosa']

// Lembrando que a contagem de termos para os localizar se incia no 0 e não no 1
// ex: o termo 1 da array acima não é o azul e sim o verde.

console.log(cores)

// length mostra a quantidade de termos na array
console.log(`Tamanho do Array ${cores.length}`)

// Remove o primeiro termo da array
cores.shift()
console.log(cores)

// Remove o ultimo termo da array
cores.pop()
console.log(cores)

// Adiciona um termo no final da array
cores.push("Preto")
console.log(cores)

// Junta todos os elementos da array e tranforma em uma string
// Dentro das aspas é o que vai ser escrito entre os termos
console.log(cores.join(", "))

// Para alterar um valor da array apenas escolha o termo com base na sua pocição
cores[1] = 'Cinza'
console.log(cores)

// Para alterar o ultimo valor da array
cores[cores.length - 1] = 'Branco'
console.log(cores)

// Para Selecionar os termos que estiverem entre o primeiro e ultimo valor passado
console.log(cores.slice(1, 3))

// Usado para a partir do termo escolhido (primeiro valor) imprir a quantidade escolhida de termos (segundo valor)
console.log(cores.splice(1, 2))

// Quando usado da forma abaixo, incrementa os valores da terceira entrada pra frente, se inicia com base na primeira entrada e exclui termos com base no segunda entrada
cores.splice(5, 0, 'marrom', 'bege')
console.log(cores)

// Inverte a ordem dos termos da array
console.log(cores.reverse())

// Se para uma string char por char e a tranforma em um array
console.log(cores[1].split(''))

// Ordena os itens em ordem alfabética (caso fosse números, do menor pro maior)
console.log(cores.sort())

// Ordena os itens em ordem menor pro maior, alternando de acordo com o numero subritaido 
console.log(cores.sort((a, b) => a - b))

// Ordena em ordem alfabética e logo depois inverte, ficando do Z para o A
console.log(cores.sort().reverse())

// Usado para filtar a array, passando apenas os termos que possuirem a caracteristica determinada
// a Função filter te da 3 propriedades, o value(valor atual referente a array), index(posição atual referente a array), array (a array completa)
console.log(cores.filter((value) => value.length > 4)) // Parametro para passar apenas aquelas com mais de 4 char 

console.log(cores.filter((value) => {
  return value.split('')[0].toLowerCase() == 'a'
})) // Parametro para passar apenas as que iniciarem com a letra A


// Agora a função every, ela se consiste em caso todos os termos da array possuirem a caracteristica determinada retornara true, caso não, false
console.log(cores.every((value) => value.length > 3)) // Caso todos os termos possuirem mais de 4 letras

console.log(cores.every((value) => value.split('')[0].toLowerCase() == 'v')) // Caso todos os termos começarem com 'v'


// Agora a função some, ela se consiste em caso ao menos um dos termos da array possuirem a caracteristica determinada retornara true, caso não, false
console.log(cores.some((value) => value.length > 6)) // Caso algum dos termos tenha mais char que 6

console.log(cores.some((value) => value.split('')[0].toLowerCase() == 'v')) // Caso algum dos termos começarem com 'v'


// Agora a função include, ela se consiste em caso ao menos um dos termos da array seja identico a array passada, retornara true
console.log(cores.includes('Amarelo')) // Caso algum dos termos seja 'Amarelo'

console.log(cores.includes('Preto')) // Caso algum dos termos seja 'Preto'


// o findIndex procura o primeiro termo do parametro passado, podendo ser uma função ou um valor concreto.
console.log(cores.findIndex(value => value.toLowerCase() === 'amarelo')) // Acha e passa o index do termo 'amarelo'

console.log(cores.findIndex(value => value.toLowerCase() === 'preto')) // Acha e passa o index do termo 'preto'


// o indexOf procura o termo de valor identico ao de entrada, caso exista, é passado o index, caso não é passado -1 (busca somente o primeiro termo)
console.log(cores.indexOf('Azul')) // passa o index do termo igual 'Azul'

console.log(cores.indexOf('azul')) // passa o index do termo igual 'azul'


// o lastIndexOf é semalhante ao indexOf, porem em vez de pegar o primeiro termo pega o ultimo
console.log(cores.lastIndexOf('Amarelo'))// passa o index do termo igual 'Amarelo'


// o forEach se consiste em todos os termos passarem pela função criada como parametro
cores.forEach((value, index) => {
  console.log(`A posição do termo ${value} é ${index}`)
}) // Ira retornar o valor e o index de todos os termos da array


// map, refaz a os termos da função com base no que acontecer nos parametros do map
console.log(cores.map(cores => cores.toUpperCase())) // Retorna os valores em letra maiuscula 

console.log(cores.map(value => value.toLowerCase())) // Retorna os valores em letra minuscula