// Minha solução | nota: 8.5/10
function somaDosPares(n) {
  let result = 0
  if (n > 0) {
    for(n; n > 0; n--) {
      (n%2 == 0) ? result += n : null
    }
  } else {
    return 'Número invalido'
  }
  return result
}

// Solução corrigida
function somaDosPares2(n) {
  if (n <= 0) {
    return 'Número inválido';
  }
  let result = 0;
  for (n; n > 0; n--) {
    (n % 2 === 0) ? result += n : null;
  }
  return result;
}

// Correção do chatGPT
function somaDosParesGPT(n) {
  if (n <= 0) {
    return 'Número inválido';
  }
  let result = 0;
  for (let i = 2; i <= n; i += 2) {
    result += i;
  }
  return result;
}

console.log(somaDosPares(5)); // Deve retornar 6 (2 + 4)
console.log(somaDosPares(10)); // Deve retornar 30 (2 + 4 + 6 + 8 + 10)