const leia = require('readline-sync');
let nome = leia.question('Digite o nome do colaborador: ');
let salario = leia.questionFloat('Digite o salario do colaborador: ');



console.log("\n","-".repeat(20), "Codigo do Cargo", "-".repeat(20))
console.log("\n1. Gerente")
console.log("2. Vendedor")
console.log("3. Supervisor")
console.log("4. Motorista")
console.log("5. Estoquista")
console.log("6. Tecnico de TI\n")

let cargo = leia.questionInt('Digite o codigo do cargo: ');
switch(cargo){
    case 1:
        novoSalario = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(salario * 1.1);    
        cargo = "Gerente";
        break;
    case 2:
        novoSalario = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(salario * 1.07);    
        cargo = "Vendedor";
        break;   
    case 3:
        novoSalario = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(salario * 1.09);
        cargo = "Supervisor";
        break;
    case 4:
        novoSalario = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(salario * 1.06);
        cargo = "Motorista";
        break;        
    case 5:
        novoSalario = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(salario * 1.05);    
        cargo = "Estoquista";
        break;
    case 6:
        novoSalario = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(salario * 1.08);    
        cargo = "Tecnico de TI";
    default:
    console.log ('Codigo de funcionario invalido') 
    process.exit(0);       
}
console.log(`${nome} que executa a função ${cargo}, seu novo salario sera ${novoSalario}`);