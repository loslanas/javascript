const leia = require('readline-sync');
let numA = leia.questionInt("Digite o primeiro número: ");
let numB = leia.questionInt("Digite o segundo número: ");
let numC = leia.questionInt("Digite o terceiro número: ");
let soma = numA + numB;

if (soma < numC){
    console.log(`Terceiro numero ${numC} é igual ao resultado da soma dos dois primeiros números ${soma}`)
}else if (soma > numC){
    console.log(`Terceiro numero ${numC} é menor que o resultado da soma dos dois primeiros números ${soma}`)
}else{
    console.log(`Terceiro nu4mero ${numC} é maior que o resultado da soma dos dois primeiros números ${soma}`)
}