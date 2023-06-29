/*Atividade 7: Verificação de login e senha
Descrição: Crie um programa que solicite ao usuário um login e uma senha. 
Em seguida, verifique se o login e a senha correspondem aos valores pré-definidos. 
Exiba uma mensagem indicando se o login foi bem-sucedido ou não.*/

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const login = "pokegabx"
const senha = "1234"
rl.question("Digite o nome de usuário: ", (loginUser) =>{
    rl.question("Digite a senha: ", (senhaUser) =>{
        if (loginUser === login && senhaUser === senha){
            console.log("Login Autorizado.")
        }else{
            console.log("Login ou senha incorretos. Tente novamente.")
        }
        rl.close()
    })
})

//falando de senhas, não deveria deixar como número?