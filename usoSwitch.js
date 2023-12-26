let profissao = 'ubEr'
let salario

console.log(`Profissão: ${profissao.toLocaleLowerCase()}`)

switch(profissao.toLocaleLowerCase()) {
  case 'pedreiro':
    salario = 1500
    break
  case 'apicultor':
    salario = 4500
    break
  case 'uber':
    salario = 3000
    break
  default:
    salario = 'Não encontrado no sistema.'
    break
}

console.log(`Salário: ${salario}`)