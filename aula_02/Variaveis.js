let nome = "Fernando Lana";
let profissao = "Pessoa Desenvolvedora";
let salarioBruto = 4500.50;
const bonus = 0.05;
let salario = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(salarioBruto + (bonus * salarioBruto))


console.log("Nome: ", nome)
console.log("Profissão: ", profissao)
console.log("Salário Liquido: ",new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(salarioBruto + (bonus * salarioBruto)))

//console.log(`O Salário Bruto do Colaborador ${nome} é ${salarioBruto}`)

console.log(`O Salário Bruto do Colaborador ${nome} é ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(salarioBruto)}`);


//console.log("Tipo da variável:", typeof nome)

// nome = 14

// console.log("Nome: ", nome)
// console.log("Tipo da variável:", typeof nome)

