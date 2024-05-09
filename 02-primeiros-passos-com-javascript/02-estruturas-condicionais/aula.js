
/*
    condicionais: <, >, <=, >=, ===, !==

    = -> será utilizado para atribuição
    == e === -> será utilizado para igualdade

    Obs: o == ignora a tipagem da variável e o === já leva a tipagem em consideração

*/

const numero = 10;
const numeroPar = numero % 2 === 0;

// neste caso será retornado true
console.log(numeroPar);

// PRATICANDO COM A ESTRUTURA CONDICIONAL IF
if (numeroPar) {
    console.log('Par');
} else {
    console.log('Ímpar')
}

if (!numeroPar) {
    console.log('Ímpar')
} else {
    console.log('Par');
}


// Testando com um exemplo diferente 
const numero2 = 12;
const numeroDivisivelPor5 = (numero2 % 5) === 0;

if (numero2 === 0) {
    console.log('O número é inválido')
} else if (numeroDivisivelPor5) {
    console.log('Sim, o número É divisível por 5')
} else {
    console.log('Não, o número NÃO É divisível por 5')
}