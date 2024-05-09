
function verificarIdade(idade) {
    if (idade >= 18) {
        return 'Maior de idade';
    } else {
        return 'Menor de idade';
    }
}

const idade = 21;
const resultado = verificarIdade(idade);
console.log(resultado);