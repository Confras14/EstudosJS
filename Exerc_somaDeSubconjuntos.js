function somaDeSubconjuntos(array, alvo) {

  for(let x = 0; x < array.length; x++) {
    for(let y = x + 1; y < array.length; y++) {
      if(array[x] + array[y] === alvo) {
        return  true
      }
    }
  }
  return false

}

console.log(somaDeSubconjuntos([1, 2, 3, 4, 5], 9)); // Deve retornar true (4 + 5 = 9)
console.log(somaDeSubconjuntos([1, 2, 3, 4, 5], 10)); // Deve retornar false
console.log(somaDeSubconjuntos([2, 7, 1, 3, 6], 9)); // Deve retornar true (2 + 7 = 9)
