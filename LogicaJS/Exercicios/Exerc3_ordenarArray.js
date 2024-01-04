// Minha solução | nota: 8.5/10
function ordenarArray(array) {
  let arrayOrdenada = array
  let tamanhoArray = array.length
  console.log(array)
  let x = 0
  let y = x + 1
  while(tamanhoArray > x) {
    while(tamanhoArray > y) {
      if(arrayOrdenada[x] > arrayOrdenada[y]){
        let guardaArray = arrayOrdenada[x]
        arrayOrdenada[x] = arrayOrdenada[y]
        arrayOrdenada[y] = guardaArray
      }
      y++
    }
    x++
    y = x + 1
  }
  return arrayOrdenada
}

// Solução corrigida
function ordenarArray2(array) {
  // Cria uma cópia do array usando slice
  const arrayOrdenada = array.slice();
  const tamanhoArray = arrayOrdenada.length;
  for (let i = 0; i < tamanhoArray - 1; i++) {
    for (let j = i + 1; j < tamanhoArray; j++) {
      if (arrayOrdenada[i] > arrayOrdenada[j]) {
        // Troca os elementos se estiverem fora de ordem
        let temp = arrayOrdenada[i];
        arrayOrdenada[i] = arrayOrdenada[j];
        arrayOrdenada[j] = temp;
      }
    }
  }
  return arrayOrdenada;
}

// Correção do chatGPT
function ordenarArrayGPT(array) {
  // Utiliza o método sort para ordenar os números
  return array.sort(function(a, b) {
      return a - b;
  });
}

console.log(ordenarArray([3, 1, 4, 1, 5, 9, 2, 6, 5]))