let produtos = [
  { nome:'arroz', qt: 15 },
  { nome: 'feijão', qt:9 },
  { nome: 'salada', qt: 1 },
  { nome: 'tomate', qt: 3 },
  { nome: 'cucuz', qt: 12 }
]

for(let i = 0; i < produtos.length; i++) {
  console.log(produtos[i].nome, produtos[i].qt)
}

console.log('---------------')

for(let n in produtos) {
  console.log(produtos[n].nome)
}

console.log('---------------')

for(let produto of produtos) {
  console.log(produto.qt)
}