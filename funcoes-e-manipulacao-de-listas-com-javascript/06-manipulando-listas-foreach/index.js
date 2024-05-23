const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// foreach recebe um callback que possui uma assinatura que exige um value, um index e um array
// o que o foreach está fazendo é percorrer a lista como se fosse um for
lista.forEach((value, i, listRef) => {
    console.log(value, i, listRef)
})

