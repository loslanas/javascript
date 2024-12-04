const leia = require('readline-sync');
let num = leia.questionInt("Digite o numero: ");

if (num<0 ){
    tipo1 = "negativo";
} else if (num>0){
    tipo1 = "positivo";
} else if (num === 0){
    tipo1 = "igual a zero";
}

if (num % 2 == 0){
    tipo2 = "par";
}else{
    tipo2 ="impar"
}

console.log(`O numero digitado é ${tipo1} e ${tipo2}`)