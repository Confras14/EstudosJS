// Atenção documento incompleto!!!

// Minha solução | nota: 8/10
function saoAnagramas(p1, p2) {
  p1 = p1.toLowerCase()
  p2 = p2.toLowerCase()

  function contarCaracteres(string) {
    let contagem = {}
  
    for(let char of string) {
      contagem[char] = (contagem[char] || 0) + 1
    }
  
    return contagem
  }

  let qtCharP1 = contarCaracteres(p1)
  let qtCharP2 = contarCaracteres(p2)

  for(let char in qtCharP1) {
    if(qtCharP1[char] !== qtCharP2[char]) {
      return false
    }
  }

  return true
}

// Solução corrigida


// Correção do chatGPT


console.log(saoAnagramas('listen', 'silent')); // Deve retornar true
console.log(saoAnagramas('abc', 'def'));       // Deve retornar false
console.log(saoAnagramas('abc', 'bca'));       // Deve retornar true
console.log(saoAnagramas('abc', 'daef'));       // Deve retornar false
