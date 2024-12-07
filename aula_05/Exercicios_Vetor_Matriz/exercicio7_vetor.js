/*Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, construa um algoritmo que 
consiga pesquisar dados no vetor, onde o usuário irá digitar um número e o programa deve exibir na tela
 a posição deste número no vetor. Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve 
 ser exibida na tela. Veja os exemplos abaixo:*/

 const leia  = require('readline-sync')
 let vetor = [2,5,1,3,4,9,7,8,10,6];
 let num = leia.questionInt('Digite o numero que deseja encontrar:')
 let Nencontrado = false; //pra poder saber quando o encerrar o looping
 
 for(let contador = 0 ; contador < vetor.length; contador++){
    if(num === vetor[contador]){ //vetor[contador] representa o número do vetor
        console.log(`O numero ${num} esta localizado na posicao ${vetor.indexOf(num)}`) //indexOf retorna indice do meu vetor
        Nencontrado = true
        break

    
    }
    }
    if (Nencontrado === false)
        console.log("Não foi encontrado!")

