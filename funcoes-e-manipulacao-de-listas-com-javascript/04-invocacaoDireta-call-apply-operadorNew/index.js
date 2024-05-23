
// formas pelas quais vc pode invocar uma funcão

const pessoa = {
    nome: 'Rodrigo',
    idade: 21
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

// invocacão direta
// teste()

// invocacão com apply -> podemos invocar uma funcão dentro do contexto de um objeto
gritar.apply(pessoa, ['Olaaaaa'])

// invocacão com call -> é tipo o apply mas não precisamos passar os argumentos dentro de um array
gritar.call(pessoa, 'Olaaaaa')

// invocacão pelo operador New -> por exemplo a funcão construtora