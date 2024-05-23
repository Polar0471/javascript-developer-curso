
// as funcões no javaScript são first class functions e high order functions
// na prática isso quer dizer que uma funcão pode ser passada como uma variável, pode ser passada como parâmetro e pode ser retornada 

// as funcões podem ser atribuídas a variáveis
function falarMeuNome() {
    console.log('Meu nome é Rodrigo');
}

const referenciaNova = falarMeuNome;

referenciaNova()



// uma funcão também pode ser passada como parâmetro
function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome()
    console.log('Johannsen de Paula')
}

falarMeuNomeCompleto(falarMeuNome)