// Declarando as variaveis
let nome = 'Conrado' // string
let idade = 18 // Number
let maiorIdade = true // Boolean
let listaHobbies = ['Volei', 'Programação', 'Xadrez'] // Arrays
let celular = { marca: 'motorola',
                modelo: 'Motorola One',
                dataLancamento: '2019' } // Object

// Descrevendo os tipos das variaveis
console.log(typeof nome)
console.log(typeof idade)
console.log(typeof maiorIdade)
console.log(typeof listaHobbies)
console.log(typeof celular)

// Exemplo de como fazer uso de cada um dos tipos de variaveis
console.log(`Ola ${nome}, no momento você possui ${idade} anos.`)

let a = ((maiorIdade) ? 'maior' : 'menor') // o padrão "() ? :" é uma forma de fazer uso do if porem de forma "resumida"
console.log(`É ${a} de idade.`)

console.log(`Um dos seus hobbies é ${listaHobbies[2]}`)

console.log(`E o modelo do seu celular é ${celular["modelo"]}`)