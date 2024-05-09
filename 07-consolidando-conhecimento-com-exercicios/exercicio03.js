
/*
    Faça um programa que calcule e imprima o salário a ser transferido para um 
    funcionário.
    Para realizar o cálculo receba o valor bruto do salário e o adicional dos
    benefícios.
    O salário a ser transferido é calculado da seguinte maneira:

    O valor bruto do salário - percentual de imposto mediante a faixa salarial + 
    adicional dos benefícios.

    Para calcular o percentual de imposto segue as aliquotas:

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a R$ 2500.00 = 10.00%
    Maior que R$ 2500.00 = 15.00%
*/

const {gets, print} = require('./funcoes-auxiliares03');

function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);
}

function calculaPercentualImposto(salario, adicional) {
    let desconto;
    let salarioLiquido;
    if (salario >= 0 && salario <= 1100) {
        desconto = calcularPorcentagem(salario, 5);
        salarioLiquido = salario - desconto;
    } else if (salario > 1100 && salario <= 2500) {
        desconto = calcularPorcentagem(salario, 10);
        salarioLiquido = salario - desconto;
    } else {
        desconto = calcularPorcentagem(salario, 15);
        salarioLiquido = salario - desconto;
    }
    return salarioLiquido + adicional;
}

const valorSalarioBruto = gets();
const valorAdicionais = gets();

print(calculaPercentualImposto(valorSalarioBruto, valorAdicionais).toFixed(2));

