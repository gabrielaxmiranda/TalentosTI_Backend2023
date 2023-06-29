/*Atividade 3: Conversão de moeda
Descrição: Crie um programa que solicite ao usuário um valor em reais e faça a conversão desse valor para dólares, 
utilizando uma taxa de câmbio fixa. 
Exiba o valor convertido.*/

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite um valor em reais para conversão(reais/dólar):", (valorReais) =>{
    const valorTaxa = 0.5
    const valorDolar = 4.9
    const valorCambio = valorReais / valorDolar - valorTaxa
    console.log(`Você terá $${valorCambio}(Valor já cambiado).`); // Valor já cambiado.
    rl.close()
})