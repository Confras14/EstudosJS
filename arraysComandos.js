let nomes = [
  'Lucas',
  'Julio',
  'Ana',
  'Alex',
  'Roberta',
  'Julia',
  'Lucas'
]
console.log(nomes)

nomes.push('Paulo')
console.log(nomes)

nomes = nomes.slice(1,6)
console.log(nomes)

nomes.shift()
console.log(nomes)

nomes.pop()
console.log(nomes)

nomes.splice(1, 1)
console.log(nomes)

nomes.reverse()
console.log(nomes)