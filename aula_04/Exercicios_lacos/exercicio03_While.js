const leia  = require('readline-sync')

let idade = 1, menorq21 = 0, maiorq50 = 0;

while(idade > 0 ){
    if(idade <21 )
        menorq21++;
    if(idade > 50)
        maiorq50++;
     idade = leia.questionInt("Digite a idade: ");
    console.log("\nCaso queirar encerrar a consulta, digite uma idade negativa.");
}
console.log(` Total de pessoas menores de 21 anos: ${menorq21}\nTotal de pessoas maiores de 50 anos: ${maiorq50}`)