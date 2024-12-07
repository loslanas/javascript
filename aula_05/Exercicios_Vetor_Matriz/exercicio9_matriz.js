/*Elabore um algoritmo que leia uma Matriz 3×3 de números inteiros e em seguida, mostre na tela:
Todos os elementos da Diagonal Principal
Todos os elementos da Diagonal Secundária
A Soma de todos os elementos da Diagonal Principal
A Soma de todos os elementos da Diagonal Secundária*/

const leia = require('readline-sync');
dPrincipal = [] , dSecundaria = [];
somadPrincipal = 0 , somadSecundária = 0;

//linha
let matriz =  Array (3);

//colunas
for(i = 0; i < matriz.length; i++){
    matriz[i] = Array(3);
}
for(i = 0; i< matriz.length; i++){
    for(j=0; j < matriz.length; j++){
        matriz[i][j] =  leia.questionInt("Digite um numero: ")
    }
}
for(i = 0; i< matriz.length; i++){
    
    for(j=0; j < matriz.length; j++){
        if(i===j){
            dPrincipal[j] = matriz[i][j];
            somadPrincipal += matriz[i][j];
        }
        if(i+j === 2){
            dSecundaria[i] = matriz[i][j];
            somadSecundária += matriz[i][j];
        }

    }
}
console.table(matriz)
console.log(`Elementos da diagonal principal: ${dPrincipal}`)
console.log(`Elementos da diagonal secundaria: ${dSecundaria}`)
console.log(`Soma dos elementos da diagonal principal: ${somadPrincipal}`)
console.log(`Soma dos elementos da diagonal secundaria: ${somadSecundária}`)