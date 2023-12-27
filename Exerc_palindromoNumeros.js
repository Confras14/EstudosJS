function palindromoDeNumeros(numeros) {
  const palavraSemEspacos = String(numeros).replace(/\s/g, '');
  let numerosArray = palavraSemEspacos.split('');
  let numerosArrayReverse = [...numerosArray].reverse();

  return numerosArray.join('') === numerosArrayReverse.join('');
}

console.log(palindromoDeNumeros(121)); // Deve retornar true
console.log(palindromoDeNumeros(12321)); // Deve retornar true
console.log(palindromoDeNumeros(12345)); // Deve retornar false
