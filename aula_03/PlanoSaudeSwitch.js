const leia = require('readline-sync');
let nome = leia.question('Digite seu nome: ');

console.log('*****Faixa Etárias*****')
console.log('1 - Idade entre 0 e 10 anos')
console.log('2 - Idade entre 11 e 29 anos')
console.log('3 - Idade entre 30 e 45 anos')
console.log('4 - Idade entre 46 e 59 anos')
console.log('5 - Idade entre 60 e 65 anos')
console.log('6 - Idade acima de 66 anos\n')

let faixaEtaria = leia.questionInt("Digite a sua faixa etária: ");
let valor;

switch(faixaEtaria){
    case 1:
        valor =100.00;
        break;
    case 2:
        valor = 200.00;
        break;    
    case 3:
        valor = 300.00;
        break;
    case 4:
        valor= 500.00;
        break;        
    case 5:
        valor =600.00;
        break;
    case 6:
        valor = 1000.00
    default:
    console.log ('Idade invalida') 
    process.exit(0);        
}
console.log (`O valor do plano de saúde do ${nome} é de R$ ${valor.toFixed(2)}\n`)