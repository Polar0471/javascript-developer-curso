
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc !== null) {
        if (imc < 18.5) {
            return 'ABAIXO DO PESO';
        } else if (imc >= 18.5 && imc <= 25) {
            return 'PESO NORMAL';
        } else if (imc >= 25 && imc <= 30) {
            return 'ACIMA DO PESO';
        } else if (imc >= 30 && imc <= 40) {
            return 'OBESO';
        } else {
            return 'OBESIDADE GRAVE';
        }
    } else {
        return 'O IMC não é válido!';
    }
}

// essa também é uma outra forma de executar a função principal
(function main() {
    const peso = 67;
    const altura = 1.67;

    const imc = calcularImc(peso, altura);
    console.log('IMC = ', imc.toFixed(2));
    console.log('SITUAÇÃO = ', classificarImc(imc));
})();

// também poderia ser criada uma função não nomeada (anônima), de modo que o nome 'main' não existiria mais. 
// a função só existe dentro do parênteses, ou seja, ela não pode ser chamada lá fora pois não existe uma variável para referenciar ela.
// é utilizada para códigos que serão executados uma vez só.

// (function () {
//     const peso = 67;
//     const altura = 1.67;

//     const imc = calcularImc(peso, altura);
//     console.log('IMC = ', imc.toFixed(2));
//     console.log('SITUAÇÃO = ', classificarImc(imc));
// })();