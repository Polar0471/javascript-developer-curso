
/*  
    O IMC - é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de
    uma pessoa adulta.

    Fórmula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela
    abaixo.

    IMC em adultos Condição:
    - abaixo de 18.5 (Abaixo do peso);
    - entre 18.5 e 25 (Peso normal);
    - entre 25 e 30 (Acima do peso);
    - entre 30 e 40 (Obeso);
    - Acima de 40 Obesidade Grave;
*/

const peso = 67;
const altura = 1.67;
const imc = peso / Math.pow(altura, 2);

if (imc !== null) {
    let situacao;

    if (imc < 18.5) {

        situacao = 'ABAIXO DO PESO'
        console.log('SITUAÇÃO = ', situacao);
        console.log('IMC: ', imc.toFixed(2));

    } else if (imc >= 18.5 && imc <= 25) {
        
        situacao = 'PESO NORMAL'
        console.log('SITUAÇÃO = ', situacao);
        console.log('IMC: ', imc.toFixed(2));

    } else if (imc >= 25 && imc <= 30) {

        situacao = 'ACIMA DO PESO'
        console.log('SITUAÇÃO = ', situacao);
        console.log('IMC: ', imc.toFixed(2));

    } else if (imc >= 30 && imc <= 40) {

        situacao = 'OBESO'
        console.log('SITUAÇÃO = ', situacao);
        console.log('IMC: ', imc.toFixed(2));

    } else {

        situacao = 'OBESIDADE GRAVE'
        console.log('SITUAÇÃO = ', situacao);
        console.log('IMC: ', imc.toFixed(2));

    }
} else {
    console.log('O IMC não é válido!')
}