/*Atividade 6: Lista de compras
Descrição: Crie um programa que solicite ao usuário uma lista de compras, permitindo que ele digite vários itens separados por vírgula.
 Em seguida, exiba a lista de compras digitada pelo usuário.*/

 const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite a lista de compras, separando itens com vírgula: ", (listaDeCompras) =>{
  const itens = listaDeCompras.split(',')
  console.log("Lista de compras:")
  for(let i = 0; i < itens.length; i++){
    console.log(itens[i].trim())
  }
  rl.close();
})