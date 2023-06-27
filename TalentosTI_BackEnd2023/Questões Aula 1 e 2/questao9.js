const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro número:", (primeiroNumero) =>{
    rl.question("Digite o segundo número:", (segundoNumero) =>{
        rl.question("Digite o terceiro número:", (terceiroNumero) =>{
            const maiorNumero = Math.max(primeiroNumero, segundoNumero, terceiroNumero);
            const menorNumero = Math.min(primeiroNumero, segundoNumero, terceiroNumero);

            console.log("O maior número é", maiorNumero);
            console.log("O menor número é", menorNumero);
            rl.close()

        })
    })
})
