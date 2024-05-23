
function funcao1() {
    console.log(this)
}

// function expression com arrow function
const funcao2 = () => {
    console.log(this)
}

const rodrigo = {
    nome: 'Rodrigo',
    funcao1,
    funcao2
}

rodrigo.funcao1()
rodrigo.funcao2()

// uma arrow function não possui um contexto, ela não tem um this