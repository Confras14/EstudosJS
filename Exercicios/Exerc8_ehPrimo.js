// Minha solução
function ehPrimo(num) {
  if (num === 1) {
    return false;
  }

  for(let x = 2; x < num; x++) {
    if (num % x == 0) {
      return false
    }
  }

  return true
}

// Solução corrigida
function ehPrimo(num) {
  if (num === 1) {
    return false;
  }

  for (let x = 2; x <= Math.sqrt(num); x++) {
    if (num % x === 0) {
      return false;
    }
  }

  return true;
}

// Solução do chatGPT
function ehPrimo(num) {
  if (num <= 1) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  if (num % 2 === 0) {
    return false; // Números pares (exceto 2) não são primos
  }

  for (let x = 3; x <= Math.sqrt(num); x += 2) {
    if (num % x === 0) {
      return false;
    }
  }

  return true;
}

console.log(ehPrimo(7));  // Deve retornar true
console.log(ehPrimo(15)); // Deve retornar false
console.log(ehPrimo(2));  // Deve retornar true
console.log(ehPrimo(1));  // Deve retornar false (1 não é primo)
