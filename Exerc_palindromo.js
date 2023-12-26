// Minha solução:
function ePalindromo(palavra) {
  const palavraMinuscula = palavra.toLowerCase()

  let arrayPalavra = palavraMinuscula.split("")
  let ArrayReversa = arrayPalavra.reverse()
  let palavraReversa = ArrayReversa.join("")

  return (palavraMinuscula === palavraReversa) ? true : false
}

// Solução corrigida | nota: 8.5 
function ePalindromo(palavra) {
  // Converte para minúsculas
  const palavraMinuscula = palavra.toLowerCase();

  // Cria uma cópia do array antes de inverter
  const arrayPalavra = palavraMinuscula.split("");
  const arrayReversa = arrayPalavra.slice().reverse();
  const palavraReversa = arrayReversa.join("");

  // Retorna o resultado da comparação
  return palavraMinuscula === palavraReversa;
}

// Correção do chatGPT
function ehPalindromo(palavra) {
  // Remove espaços em branco e converte para minúsculas para tornar a verificação case-insensitive
  const palavraSemEspacos = palavra.toLowerCase().replace(/\s/g, '');
  
  // Compara a palavra original com a palavra invertida
  return palavraSemEspacos === palavraSemEspacos.split('').reverse().join('');
}

console.log(ePalindromo("rAdar"));
console.log(ePalindromo("javascript"));