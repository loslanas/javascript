const leia  = require('readline-sync')

let contador =1;
let num = leia.questionInt("Digite um numero: ");

do{
    console.log(`${num} x ${contador} = ${num * contador}`)
    contador++
}while(contador<=10)