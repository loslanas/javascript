const leia = require("readline-sync")
n1 = leia.questionFloat("Digite o primeiro número: ")
n2 = leia.questionFloat("Digite o segundo número: ")
n3 = leia.questionFloat("Digite o terceiro número: ")
n4 = leia.questionFloat("Digite o quarto número: ")
calculo = (n1 * n2) - (n3 * n4)

console.log(`A diferença do produto entre n1 e n2 pelo produto de entre n3 e n4 é ${calculo.toFixed(1)}. `)