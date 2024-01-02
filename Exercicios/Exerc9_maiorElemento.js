function maiorElemento(array) {
  array.sort((a, b) => b - a)

  return array[0]
}


console.log(maiorElemento([10, 5, 8, 20])); // Deve retornar 20
console.log(maiorElemento([-5, -2, -1, -8])); // Deve retornar -1