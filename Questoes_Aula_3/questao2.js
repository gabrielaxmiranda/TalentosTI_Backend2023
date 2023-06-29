/*Calculadora de IMC (Índice de Massa Corporal)

Descrição: Crie um programa que solicite ao usuário o seu peso (em kg) e a sua altura (em metros) e calcule o seu IMC. 
Exiba uma mensagem com o resultado, indicando se o usuário está abaixo do peso, no peso ideal ou acima do peso.*/

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Digite seu nome: ", (nome) => {
    rl.question(`Olá ${nome}, digite seu peso: `, (peso) => {
        rl.question("Digite sua altura em cm:", (altura) => {
            altura = altura / 100
            const IMC = peso / (altura * altura)
            console.log("Seu IMC é:", IMC);
            switch (true) {
                case IMC < 16.9:
                    console.log("Você está muito abaixo do peso")
                    break;
                case IMC >= 17 && IMC <= 18.4:
                    console.log("Você está abaixo do peso")
                    break;
                case IMC >= 18.5 && IMC <= 24.9:
                    console.log("Você está com o peso normal")
                    break;
                case IMC >= 25 && IMC <= 29.9:
                    console.log("Você está acima do peso")
                    break;
                case IMC >= 30 && IMC <= 34.9:
                    console.log("Você está com obesidade grau 1")
                    break;
                case IMC >= 35 && IMC <= 40:
                    console.log("Você está com obesidade grau 2")
                    break;
                case IMC > 40:
                    console.log("Você está com obesidade grau 3")
                    break;
                default:
                    console.log("IMC não identificado. Tente novamente.");
                    break;
            }
            rl.close()
        })
    })
})
