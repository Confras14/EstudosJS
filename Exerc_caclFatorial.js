// Minha solução | nota: 8/10
function calcFatorial(num) {
  let resultado = 1;
  switch(num){
    case 0:
      return 0
    case 1: 
      return 1
    default:
      while(num > 1) {
        resultado *= num
        num--
      }
      return resultado
  }
}

// Solução corrigida
function calcFatorial2(num) {
  let resultado = 1;  
  switch(num){
    case 0:
    case 1: 
      return 1;
    default:
      if (num < 0) {
        return "Número inválido. O fatorial é indefinido para números negativos.";
      }
      while(num > 1) {
        resultado *= num;
        num--;
      }
      return resultado;
  }
}

// Correção do chatGPT
function calcFatorialGPT(numero) {
  if (numero === 0 || numero === 1) {
      return 1;
  } if (numero < 0) {
    return "Número inválido. O fatorial é indefinido para números negativos."
  } else {
      return numero * fatorial(numero - 1);
  }
}

console.log(calcFatorial(3))