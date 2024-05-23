
// quando uma funcão é declarada ela se lembra do contexto onde ela foi declarada

function soma(x) {
    return function (y) {
        return x + y;
    }
}

const somaParcial = soma(10);

console.log(soma(10)(20))

console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))

// o contexto do y foi guardado, isso é uma closure
