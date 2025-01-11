const nome = 'thassiane'
const sobrenome = 'lima'
const idade = 24
const peso = 58
const altura = 1.65
let imc
let anoNascimento

imc = peso / (altura * altura)
console.log(imc)
anoNascimento = 2024 - idade

console.log(nome, sobrenome, 'tem', idade, 'anos', 'pesa', peso, 'kg', 'tem', altura,'de altura e seu imc é', imc)
console.log(`${nome} nasceu em ${anoNascimento}`)
