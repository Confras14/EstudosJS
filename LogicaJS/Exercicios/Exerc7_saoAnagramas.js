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
    if(!qtCharP1[char] || qtCharP1[char] !== qtCharP2[char]) {
      return false
    }
  }

  return true
}

// Solução corrigida
function saoAnagramas(p1, p2) {
  p1 = p1.toLowerCase();
  p2 = p2.toLowerCase();

  function contarCaracteres(string) {
    let contagem = {};
    for (let char of string) {
      contagem[char] = (contagem[char] || 0) + 1;
    }
    return contagem;
  }

  let qtCharP1 = contarCaracteres(p1);
  let qtCharP2 = contarCaracteres(p2);

  // Verifica se todos os caracteres em p2 estão presentes em p1
  for (let char in qtCharP2) {
    if (!qtCharP1[char] || qtCharP1[char] !== qtCharP2[char]) {
      return false;
    }
  }

  return true;
}

// Solução do chatGPT
function saoAnagramas(str1, str2) {
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  // Verifica se as strings têm o mesmo comprimento
  if (lowerStr1.length !== lowerStr2.length) {
    return false;
  }

  // Função para contar a ocorrência de caracteres em uma string
  function contarCaracteres(string) {
    const contagem = {};

    for (let char of string) {
      contagem[char] = (contagem[char] || 0) + 1;
    }

    return contagem;
  }

  // Conta os caracteres em ambas as strings
  const contagemStr1 = contarCaracteres(lowerStr1);
  const contagemStr2 = contarCaracteres(lowerStr2);

  // Compara as contagens
  for (let char in contagemStr1) {
    if (contagemStr1[char] !== contagemStr2[char]) {
      return false;
    }
  }

  return true;
}

console.log(saoAnagramas('listen', 'silent')); // Deve retornar true
console.log(saoAnagramas('abc', 'def'));       // Deve retornar false
console.log(saoAnagramas('abc', 'bca'));       // Deve retornar true
console.log(saoAnagramas('abc', 'daef'));      // Deve retornar false
