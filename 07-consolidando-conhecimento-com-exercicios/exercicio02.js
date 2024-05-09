
/*
    Faça um programa que receba N (quantidade de números) e seus respectivos valores.
    Imprima o maior número par e o menor número ímpar.

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8

        Saída:
            Maior número par: 10
            Menor número ímpar: 1
*/

const {gets, print} = require('./funcoes-auxiliares02');

function maiorNumeroPar(listaNumeros) {
    let maiorNumeroPar = listaNumeros[0];
    for(let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] % 2 === 0) {
            if (listaNumeros[i] > maiorNumeroPar) {
                maiorNumeroPar = listaNumeros[i];
            }
        }
    }
    return maiorNumeroPar;
}

function menorNumeroImpar(listaNumeros) {
    let menorNumeroImpar = listaNumeros[0];
    for(let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] % 2 !== 0) {
            if (listaNumeros[i] < menorNumeroImpar) {
                menorNumeroImpar = listaNumeros[i];
            }
        }
    }
    return menorNumeroImpar;
}

const listaNumeros = gets();
print("MAIOR NÚMERO PAR = " + maiorNumeroPar(listaNumeros));
print("MENOR NÚMERO ÍMPAR = " + menorNumeroImpar(listaNumeros));
