// Cacular o preço de um imovel
// Obs: m² = 3.000
// Com  1 2 e 3 quartos o imovel fica 1x 1.2x 1.5x mais caro
// Use funções

function calcImovel(M2Imovel, numQuartos) {
  const valorM2 = 3000

  switch(numQuartos) {
    case 1: 
      return valorM2*M2Imovel
    case 2:
      return (valorM2*1.2)*M2Imovel
    case 3:
      return (valorM2*1.5)*M2Imovel
    default:
      console.log("O imovel não esta no nosso catalogo!")
      return null
  }
}

let M2Imovel = 123
let numQuartos = 3

let valorImovel = calcImovel(M2Imovel , numQuartos)

if(valorImovel != null)
  console.log(`O imovel de ${M2Imovel}m², com ${numQuartos} quartos, fica pelo valor de R$${valorImovel}.`)
else  
  console.log("Não será possivel calcular o imovel!")