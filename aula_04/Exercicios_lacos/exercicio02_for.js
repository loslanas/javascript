const leia  = require('readline-sync')
let  impar = 0, par = 0;
for(let contador = 1; contador <= 10; contador++){
    let num = leia.questionInt(`Digite o ${contador} numero :\n `);
    if (num%2==0){
        par++;
    } else{
        impar++;
    }
    }
    console.log(` Foram digitados ${impar} numero(s) impar(es) e ${par} numero(s) par(es)`)