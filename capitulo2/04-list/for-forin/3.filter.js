const  { obterPessoas } = require('./service')

/*

    const pessoa = {
        nome: "Isaias",
        idaide: 23,
        altura: 1.80
    }

    const { nome, idade } = pessoa
    console.log(nome, idade)

*/

Array.prototype.meuFilter = function(callback){
    const lista = []
    for(let i = 0; i < this.length; i++ ){
        const item = this[i]
        const result = callback(item, i, this)
        if(!result) continue;
        lista.push(item)
    }
    return lista;
}


async function main(){
    try {        
        const {  
            results
        } = await obterPessoas(`a`)
        

        const familiaLars = results.meuFilter((item, index, lista) => {
            console.log(`index: ${index}, item: ${item}, tamanho lista: ${lista.length}`);
            return  item.name.toLowerCase().indexOf('lars') !== -1
        })

        // const names = familiaLars.map(pessoa => pessoa.name)
        // console.log(names)
    } catch (error) {
        console.error('DEU RUIM, ', error)
    }
}

main()

