const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//questão1
rl.question("Digite seu nome:", (nome) => {
console.log("Seja bem vindo", nome);
rl.close()
})
//utilizar ao perguntar



