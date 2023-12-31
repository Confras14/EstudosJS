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
console.log(cores.slice(1,3))

// Usado para a partir do termo escolhido (primeiro valor) imprir a quantidade escolhida de termos (segundo valor)
console.log(cores.splice(1, 2))

// Inverte a ordem dos termos da array
console.log(cores.reverse())

// Se para uma string char por char e a tranforma em um array
console.log(cores[1].split(''))