/*Atividade 1: Verificação de idade para entrada em uma festa

Descrição: Crie um programa que solicite ao usuário a sua idade e verifique se ele pode entrar em uma festa (idade mínima de 18 anos). 
Exiba uma mensagem informando se a entrada é permitida ou não.*/

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite sua idade:", (idade) =>{
    if (idade >= 18){
        console.log("ENTRADA PERMITIDA.");
    }else if(idade < 18){
        console.log("ENTRADA NÃO PERMITIDA.");
    }else{
        console.log("Idade inválida. Tente novamente.");
    }
    rl.close()
})