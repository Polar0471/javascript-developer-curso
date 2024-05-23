
// async e await são uma forma diferente de manipular as promisses

const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

async function buscarArquivo() {
    try {
        // o await transforma a promise em algo pseudo procedural
        const arquivo = await fs.promises.readFile(filePath)
        const textoDoArquivo = arquivo.toString('utf8')
        console.log(textoDoArquivo)
    } catch(error) {
        console.log(error)
    } finally {
        console.log('finalizou!')
    }
}

buscarArquivo()