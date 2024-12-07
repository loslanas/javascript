const leia  = require('readline-sync')
let soma = 0, num;
do{ num = leia.questionInt("Digite o número: ");
    if(num>0){
        soma = soma + num;
    }
    
}while(num != 0)
    console.log(`A soma de todos os números positivos digitados é ${soma}`);