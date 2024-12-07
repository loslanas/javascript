/*Elabore um algoritmo que leia 10 números inteiros e armazene em um vetor. Em seguida, mostre na tela:
Todos os elementos dos índices ímpares do vetor 
Todos os elementos do vetor que são números pares
A Soma de todos os elementos do vetor
A Média de todos os elementos do vetor, armazenada em uma variável do tipo real*/





const leia  = require('readline-sync')
let soma = 0, media = 0
let vetorInteiros = new Array(10)
let vetorpares =  new Array()
let vetorimpares = new Array()

for(contador = 0; contador < vetorInteiros.length; contador++){
    vetorInteiros[contador] = leia.questionInt('Digite um numero:')
    if (contador % 2 != 0)
        vetorimpares = vetorInteiros[contador];

}
console.table(vetorimpares)