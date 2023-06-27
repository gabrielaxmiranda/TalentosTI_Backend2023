const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro número:", (primeiroNumero) => {
    rl.question("Digite o segundo número:", (segundoNumero) => {
        const soma = Number(primeiroNumero) + Number(segundoNumero);
        console.log("A soma dos números é:", soma);
    })
})