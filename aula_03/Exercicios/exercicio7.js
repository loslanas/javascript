const leia = require('readline-sync');
let numA = leia.questionFloat("Digite o primeiro numero: ");
let numB = leia.questionFloat("Digite o segundo numero: ");

console.log("\n","-".repeat(20), "Operacoes", "-".repeat(20))
console.log("\n1. Soma")
console.log("2. Subtracao")
console.log("3. Multiplicacao")
console.log("4. Divisao")

let cod = leia.questionInt("\nSelecione uma opcao de acordo com a operacao matematica a ser realizada: ")

switch(cod){
    case 1:
        operacao = "soma";   
        calculo = numA + numB;
        break;
    case 2:
        operacao = "subtracao";
        calculo = numA - numB;
        break;   
    case 3:
        operacao = "multiplicao";
        calculo = numA * numB;
        break;
    case 4:
        operacao = "divisao";
        calculo = numA / numB;
        break;  
    default:
            console.log ('Codigo invalido') 
            process.exit(0);            }
console.log(`A ${operacao} entre ${numA} e ${numB} tem como resultado ${calculo.toFixed(1)}.  `)            