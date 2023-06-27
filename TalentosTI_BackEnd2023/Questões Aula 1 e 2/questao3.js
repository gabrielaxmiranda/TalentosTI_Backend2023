const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Verifique se o número é par ou ímpar:", (numero) =>{
   if (numero % 2 === 0){
    console.log("É par");
   }else{
    console.log("É impar");
   }
   rl.close()
})