function imparOUpar(n1) {
  switch(n1){
    case null:
      return 'Valor nulo'
    default:
      if(n1%2 == 0)
        return `Par`
      else 
        return `Impar`
  }
}

let num = 2
let a = imparOUpar(num)

console.log(a)