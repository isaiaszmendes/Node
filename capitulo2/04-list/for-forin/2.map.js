const service = require('./service')

Array.prototype.meuMap = function(callback){
    const novoArrayMapeado = []
    for(let indice = 0; indice <= this.length -1; indice++){
        const resultado = callback(this[indice], indice)
        novoArrayMapeado.push(resultado)
    }

    return novoArrayMapeado;
}

async function main(){
    try {
        const res = await service.obterPessoas('a')
        // const names = []
        // res.results.forEach(function(pessoa) {
        //     names.push(pessoa.name)
        // })
        
        // const names = res.results.map(function(pessoa){
        //     return pessoa.name
        // })

        // const names = res.results.map(pessoa => pessoa.name)

        const names = res.results.meuMap((pessoa) => {
            return pessoa.name
        })

        console.log('names: ', names);
    } catch (error) {
        console.error('Deu Ruim ', error);
    }
}

const arr = [{name: 'asda'}, {name: 'asdasda'}].meuMap((pessoa, key) => {
    return `${pessoa.name}, ${key}`
})

// console.log(arr)

main()