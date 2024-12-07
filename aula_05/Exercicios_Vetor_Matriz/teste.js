const leia = require('readline-sync');

// Inicializando o vetor e variáveis
let vetor = [10];
let soma = 0;

// Lendo 10 números do usuário e preenchendo o vetor
for (let contador = 0; contador < 10; contador++) {
    let numero = leia.questionInt(`Digite o numero inteiro para a posicao ${contador}: `);
    vetor.push(numero);
    soma += numero; // Calculando a soma durante a leitura
}

// Cálculo da média
let media = soma / vetor.length;

// Elementos nos índices ímpares
console.log("\nElementos nos índices ímpares:");
for (let contador = 1; contador < vetor.length; contador += 2) {
    console.log(`Índice ${contador}: ${vetor[contador]}`);
}

// Elementos pares do vetor
console.log("\nElementos que são números pares:");
vetor.forEach((numero) => {
    if (numero % 2 === 0) {
        console.log(numero);
    }
});

// Exibindo soma e média
console.log("\nSoma de todos os elementos:", soma);
console.log("Média de todos os elementos:", media.toFixed(2));
