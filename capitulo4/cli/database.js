const { readFile, writeFile } = require('fs')

const { promisify } = require('util')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database {
    constructor(){
        this.NOME_ARQUIVO = 'herois.json'
    }
    async obterDadosArquivo(){
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }

    async escreverArquivo(dados){
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true
    }

    async cadastrar(heroi){
        const dados = await this.obterDadosArquivo()
        const id = heroi.id <= 2 ? heroi.id : Date.now()
        const heroiComId = {
            id,
            ...heroi
        }

        const dadosFinal = [
            ...dados,
            heroiComId
        ]

        const resultado = await this.escreverArquivo(dadosFinal)
        return resultado;
    }

    async listar(id){
        const dados = await this.obterDadosArquivo()
        const dadosFiltrados = dados.filter(item => {
            return (id ? (item.id === id ) : true) // se não passar id ele da true em todos
        })
        
        return dadosFiltrados
    }

    async atualizar(id, modificacoes){
        const dados = await this.obterDadosArquivo()
        const indice = dados.findIndex(item => item.id === parseInt(id))

        if(indice === -1){
            throw Error('O heroi informado nao existe')
        }

        const atual = dados[indice]
        dados.splice(indice, 1)
        
        const objetoAtualizar = {
            ...atual,
            ...modificacoes
        }

        return await this.escreverArquivo([
            ...dados,
            objetoAtualizar
        ])
        return false
    }

    async remover(id){

        if(!id){
            return await this.escreverArquivo([])
        }
        const dados = await this.obterDadosArquivo()
        const indice = dados.findIndex(item => item.id === parseInt(id))
        console.log('indice', indice)
        if(indice === -1) {
            throw Error('Usuário informado nao existe')
        }
        dados.splice(indice, 1) // a partir do indice remova um unico item 
        return await this.escreverArquivo(dados)
    }
}

module.exports = new Database()