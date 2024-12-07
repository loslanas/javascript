const leia  = require('readline-sync')
let soma = 0, num, contador = 0, media = 0;

do{ num = leia.questionFloat("Digite um numero: ");
    if(num % 3 == 0 && num > 0){
        soma = soma + num;
        contador++;
        media = soma/contador;
    }
    
}while(num != 0)
    
    console.log(`A média de todos os números multiplos de 3 digitados é ${media.toFixed(2)}`);