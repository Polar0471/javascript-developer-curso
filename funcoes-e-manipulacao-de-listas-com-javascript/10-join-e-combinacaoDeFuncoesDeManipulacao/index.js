
const lista = [{nome: 'Rodrigo'}, {nome: 'Paulo'}, {nome: 'João'}]

// basicamente o que o join vai fazer é juntar 
console.log(lista.map((e) => e.nome).join('; '))

const listaNomesR = lista.map((e) => e.nome)
    .filter((e) => e.startsWith('R'))
    .join('; ')

console.log(listaNomesR)

const elementosEmHtml = lista
    .filter((e) => e.nome.startsWith('R'))
    .map(e => `<li>${e.nome}</li>`)
    .join('')

console.log(elementosEmHtml)