
// Crie um programa que dado um número imprima a sua tabuada


function exibirTabuada(numero) {
    for(let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} * ${i} = ${resultado}`)
    }
}

const numero = 7;
exibirTabuada(numero);
