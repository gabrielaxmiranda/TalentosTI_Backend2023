/*Atividade 4: Verificação de disponibilidade de produto em estoque
Descrição: Crie um programa que solicite ao usuário a quantidade desejada de um determinado produto e verifique se há quantidade suficiente em estoque. 
Caso haja, exiba uma mensagem informando a disponibilidade; caso contrário, informe que o produto está indisponível.*/

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const estoque = 10

rl.question("Digite a quantidade desejada:", (quantidade) =>{
    if(quantidade <= estoque){
        console.log("Este produto está disponível, seu estoque é: ", estoque)
    }else if(quantidade > estoque) {
        console.log("Produto sem estoque.")
    } else {
        console.log("Valor inválido. Tente novamente.")
    }
    rl.close()
})