const leia  = require('readline-sync')

let num1 = leia.questionInt(`Digite o primeiro numero :`);
let num2 = leia.questionInt(`Digite o segundo numero : `);

if(num1 >= num2){
    console.log("Intervalo Inválido");
    process.exit();
} 
else{

for(let contador = num1; contador <= num2; contador++){
    
    if (contador % 3 == 0 && contador % 5 == 0 ){
        console.log(`${contador} é multiplo de 3 e 5`)
    } 
    }}
  