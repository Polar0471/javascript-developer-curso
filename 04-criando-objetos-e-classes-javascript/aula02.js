// classe
class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

// instância
const rodrigo = new Pessoa();
rodrigo.nome = 'Rodrigo';
rodrigo.idade = 21;

const arthur = new Pessoa();
arthur.nome = 'Arthur';
arthur.idade = 22;

rodrigo.descrever();
arthur.descrever();


// Cosntructor -> dita o que acontece quando uma pessoa é instanciada
class Pessoa2 {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const rodrigo2 = new Pessoa2('Rodrigo', 21);
const arthur2 = new Pessoa2('Arthur', 22);

rodrigo2.descrever();
arthur2.descrever();