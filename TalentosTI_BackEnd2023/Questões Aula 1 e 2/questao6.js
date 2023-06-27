//6. Escreva um programa que solicite ao usuário dois números e exiba o maior entre eles.

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite um número:", (primeiroNumero) =>{
    rl.question("Digite outro número:", (segundoNumero) =>{
        if(primeiroNumero > segundoNumero){
            console.log(`${primeiroNumero} é maior que ${segundoNumero}.`);
        }else{
            console.log(`${segundoNumero} é maior que ${primeiroNumero}.`)
        }
        rl.close()
    })
})