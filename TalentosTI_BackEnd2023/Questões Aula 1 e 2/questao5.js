//5.Desenvolva um programa que solicite ao usuário o raio de um círculo e 
//calcule a área desse círculo. 
//Exiba o resultado.

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite o raio de um círculo:", (raio) =>{
    const area = Math.PI * (raio * raio);
    console.log((`O valor da área do círculo é ${area}`));
    rl.close()
})