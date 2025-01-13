let varA = 'a'
let varB = 'b'
let varC = 'c'

const vartemp = varA
varA = varB
varB = varC
varC = vartemp

console.log(varA, varB, varC)