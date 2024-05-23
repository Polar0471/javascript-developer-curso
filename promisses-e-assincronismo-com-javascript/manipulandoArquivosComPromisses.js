
// no node temos um módulo para fazer a leitura de arquivos

const fs = require('fs')

const path = require('path')
const filePath = path.resolve(__dirname, 'tarefas.csv')

const promessaDaLeituraDoArquivo = fs.promises.readFile(filePath)

promessaDaLeituraDoArquivo
    .then((arquivo) => arquivo.toString('utf8'))
    .then((textoDoArquivo) => console.log(textoDoArquivo.split('\n').slice(1)))
    .then((linhasSemOCabecalho) => linhasSemOCabecalho.map((linha) => {
        const [nome, feito] = linha.split(';')
        return {
            nome,
            feito: feito.trim() === 'true'
        }
    }))
    .then((listaDeTarefas) => console.log(listaDeTarefas))
    .catch((error) => {
        console.log("Deu ruim!", error)
    })

