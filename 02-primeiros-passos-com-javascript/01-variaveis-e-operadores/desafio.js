/*  Faça um programa para calcular o valor de uma viagem.

    Você terá 3 variáveis, sendo elas:
    1 - preço do combustível;
    2 - Gasto médio do combustível do carro por KM;
    3 - Distância em KM da viagem;

    Imprima no console o valor que será gasto para realizar esta viagem.
*/

console.log("PRIMEIRO DESAFIO");

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaKm = 1580;

const calculo = (distanciaKm / kmPorLitro) * precoCombustivel;
console.log(calculo.toFixed(2));        // transforma a variável para um texto e limita o número de casas decimais
