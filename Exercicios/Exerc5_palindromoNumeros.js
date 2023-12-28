// Minha solução
function palindromoDeNumeros(numeros) {
  const palavraSemEspacos = String(numeros).replace(/\s/g, '');
  let numerosArray = palavraSemEspacos.split('');
  let numerosArrayReverse = [...numerosArray].reverse();

  return numerosArray.join('') === numerosArrayReverse.join('');
}

// Minha solução revisada
function palindromoDeNumeros(numeros) {
  const palavraSemEspacos = String(numeros).replace(/\s/g, '');
  const comprimento = palavraSemEspacos.length;

  for (let i = 0; i < comprimento / 2; i++) {
    if (palavraSemEspacos[i] !== palavraSemEspacos[comprimento - 1 - i]) {
      return false;
    }
  }

  return true;
}

// Solução do chatGPT
function palindromoDeNumeros(numeros) {
  const palavraSemEspacos = String(numeros).replace(/\s/g, '');
  return [...palavraSemEspacos].every((char, index, array) => char === array[array.length - 1 - index]);
}

console.log(palindromoDeNumeros(121)); // Deve retornar true
console.log(palindromoDeNumeros(12321)); // Deve retornar true
console.log(palindromoDeNumeros(12345)); // Deve retornar false
