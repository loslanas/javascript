const leia  = require('readline-sync')

let contador =1;
let num = leia.questionInt("Digite um numero: ");

while(contador<=10){
    console.log(`${num} x ${contador} = ${num * contador}`)
    contador++
}