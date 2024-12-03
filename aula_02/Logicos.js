const leia = require("readline-sync")

// Dados Usuário
const usuario = 'user@gmail.com'
const senha = "user235"
const isAdmin = false
const isGerente = false
const isBlock = false

console.log('\nTela de Login')

let usuarioLogin = leia.question('Digite o seu usuário: ')

let senhaLogin = leia.question('Digite a sua senha: ',{
    hideEchoBack: true
})

if (usuarioLogin === usuario && senhaLogin === senha){
    var mensagem = "Seja Bem Vinde!  Usuário Autenticado com Sucesso"

}
else {
    var mensagem = 'Acesso Negado!!!'
}

console.log(mensagem)
if (isBlock){
    console.log("Usuário está inativo. Contate o Administrador!")
    process.exit(0)
}else {
    console.log("Usuário está ativo.")
    
}
 if(isAdmin || isGerente){
    console.log("Acesso ao painel Administrativo Liberado!")
 } else {
    console.log("Acesso ao painel Administrativo Negado!")
 }