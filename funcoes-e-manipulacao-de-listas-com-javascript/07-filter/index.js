
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// o filter irá receber uma funcão que retorna se o elemento que estamos percorrendo se mantém ou não no resultado
// no filter estaremos criando uma nova lista
// recebe uma funcão que retorna um boolean. Se for true fica na lista filtrada, se for false não é incluído na lista
const listaDeNumerosPares = lista.filter((element) => {
    return (element % 2 === 0)
})

console.log(listaDeNumerosPares)