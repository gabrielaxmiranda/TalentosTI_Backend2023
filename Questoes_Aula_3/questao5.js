/*Atividade 5: Cálculo de média ponderada
Descrição: Crie um programa que solicite ao usuário as notas de três provas e seus respectivos pesos. 
Calcule a média ponderada dessas provas e exiba o resultado.*/

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite a primeira nota: ", (primeiraNota) =>{
    rl.question("Digite o peso da primeira nota: ", (peso1) =>{
        rl.question("Digite a segunda nota: ", (segundaNota) =>{
            rl.question("Digite o peso da segunda nota: ", (peso2) =>{
                rl.question("Digite a terceira nota: ", (terceiraNota) =>{
                    rl.question("Digite o peso da terceira nota: ", (peso3) =>{
                        let somaPesos = (+peso1)+(+peso2)+(+peso3)
                        let somaNotas = (+primeiraNota * +peso1) + (+segundaNota * +peso2) + (+terceiraNota * +peso3)
                        const mediaPonderada = Number(somaNotas/somaPesos)
                        console.log("A média ponderada é: ", mediaPonderada.toFixed(2))
                        // console.log("Soma das notas: ",somaNotas)
                        // console.log("Soma dos pesos: ",somaPesos)
                        rl.close()
                    })
                })
            })
        })
    } )
})