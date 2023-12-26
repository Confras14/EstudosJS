let personagem = {
  nome: 'Lucas',
  sobrenome: 'Conrado',
  carros: [
    {marca: 'mercedez', modelo: '320i', ano: 2022, cor: 'branca'},
    {marca: 'honda', modelo: 'civic', ano: 2023, cor: 'azul'}
  ],
  dataNasc: 2005,
  idade: function () {
    return 2023 - this.dataNasc
  },
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`
  }
}

console.log(`O ${personagem.nomeCompleto()} possui ${personagem.idade()} anos e um de seus carros é um ${personagem.carros[1].modelo} do ano de ${personagem.carros[1].ano}.`)

personagem.carros.push({marca: 'BMW', modelo: 'x6', ano: 2019, cor: 'branca'})

console.log(personagem.carros[2])
