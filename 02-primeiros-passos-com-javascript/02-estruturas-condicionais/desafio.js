
/*
    Faça um programa para calcular o valor de uma viagem.

    Você terá 3 variáveis. Sendo elas:
      1 - Preço do etanol;
      2 - Preço da gasolina;
      3 - O tipo de combustível que está no seu carro;
      4 - Gasto médio de combustível do carro por KM;
      5 - Distância em KM da viagem;

    Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;

const tipoCombustivel = 'gasolina';
const distanciaKm = 100;
const kmPorLitro = 10;

const litroGastoPorKm = distanciaKm / kmPorLitro; 

if (['gasolina', 'etanol'].includes(tipoCombustivel) && tipoCombustivel !== null) {
    let gastoMedio;

    if (tipoCombustivel === 'gasolina') {
        gastoMedio = litroGastoPorKm * precoGasolina;
        console.log(gastoMedio.toFixed(2));
    } else {
        gastoMedio = litroGastoPorKm * precoEtanol;
        console.log(gastoMedio.toFixed(2));
    }
} else {
    console.log('O tipo de combustível informado NÃO É válido!')
}



