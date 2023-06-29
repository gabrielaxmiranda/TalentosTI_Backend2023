/*Atividade 8: Calculadora de desconto
Descrição: Crie um programa que solicite ao usuário o valor de um produto e a porcentagem de desconto a ser aplicada. 
Calcule o valor do desconto e exiba o valor final do produto com o desconto aplicado.*/

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite o valor do produto:", (valorProduto) =>{
    rl.question("Digite a porcentagem do desconto: ", (porcentagemDesconto) =>{
        const descontoTotal = valorProduto * (porcentagemDesconto / 100)
        const valorFinal = valorProduto - descontoTotal
        console.log("Valor final com desconto é: ", valorFinal);
        rl.close()
    })
})