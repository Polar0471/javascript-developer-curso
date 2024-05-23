
class Pessoa {
    constructor(name) {
        this.name = name
    }
}

const lista = [new Pessoa('Rodrigo'), new Pessoa('Gabriel'), new Pessoa('João'), new Pessoa('Paulo')]

// imagine que vc queira transformar essa lista de objetos em uma lista de nomes
// map -> uma funcão que objetiva transformar um elemento em outro

const listaNomes = lista.map((element) => element.name)

console.log(listaNomes)