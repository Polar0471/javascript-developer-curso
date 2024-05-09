/*
    Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor 
    gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaKm, precoCombustivel) {
        return distanciaKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('fiat', 'prata', 1/12);
const calculoUno = uno.calcularGastoDePercurso(70, 5);
console.log(calculoUno.toFixed(2));

const palio = new Carro('fiat', 'preto', 1/10);
const calculoPalio = palio.calcularGastoDePercurso(70, 5);
console.log(calculoPalio.toFixed(2));