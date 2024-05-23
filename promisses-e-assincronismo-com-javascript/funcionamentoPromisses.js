
// assincronismo se baseia em uma tarefa que não entrega um resultado imediato de processamento

// criando uma promisse
// se o processamento der certo retorna um resolve() e se der errado retorna um reject()
const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000)
})


promessaDeUmNumeroQualquer
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        console.log("finalizou!")
    })