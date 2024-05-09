
// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par
// encontrado.

function retornaListaNumerosPares(lista) {
    let numerosPares = [];
    for(let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            numerosPares.push(lista[i]);
        }
    }
    return numerosPares;
}

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = retornaListaNumerosPares(numeros);
console.log(`NÚMEROS PARES = ${numerosPares}`);