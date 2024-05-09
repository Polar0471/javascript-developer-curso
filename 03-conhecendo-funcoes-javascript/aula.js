
function teste() {
    console.log('teste');
}

function sayMyName(name) {
    console.log('your name is ' + name);
}

function quadrado(valor) {
    return valor * valor;
}

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}


teste();
sayMyName('Rodrigo');

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez(10));
console.log(quadradoDeDez(10) + quadradoDeDez(10));

console.log(incrementarJuros(100, 10));
