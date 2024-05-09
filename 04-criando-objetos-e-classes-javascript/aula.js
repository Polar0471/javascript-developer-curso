


// Objetos
const pessoa = {
    nome: 'Rodrigo Arthur Lima Ferreira',
    idade: 21,

    descrever: function() {
        return `Nome = ${this.nome} \nIdade = ${this.idade}`;
    }
}

// pessoa
pessoa['nome'] = 'teste';


console.log(pessoa.descrever());