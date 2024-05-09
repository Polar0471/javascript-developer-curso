
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

function main() {
    const peso = 67;
    const altura = 1.67;

    const imc = calcularImc(peso, altura);
    console.log('IMC = ', imc.toFixed(2));
    console.log('SITUAÇÃO = ', classificarImc(imc));
}

// main();

// NO JAVASCRIPT AS FUNÇÕES SE COMPORTAM COMO OBJETOS QUE PODEM SER MANIPULADOS
main = function() {
    console.log('batata');
}

main();