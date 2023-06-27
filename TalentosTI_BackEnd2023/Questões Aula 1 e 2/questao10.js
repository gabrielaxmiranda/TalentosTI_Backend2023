const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma quantidade de horas:", (horas) =>{
    const minutos = horas * 60
    const segundos = horas * 3600

    console.log(`${horas} horas em minutos: ${minutos} e ${horas} horas em segundos: ${segundos}`);
    rl.close()
})