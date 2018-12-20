const service = require('./service')

async function main(){
    try {
        const resultado  = await service.obterPessoas('a')
        
        const names = []
        console.time('for');
        for(let i=0; i <= resultado.results.length -1; i++){
            const pessoa = resultado.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('for');
        console.time('forIN');
        for(let i in resultado.results){
            const pessoa = resultado.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('forIN');

        console.time('forOf');
        for(let pessoa of resultado.results){
            names.push(pessoa.name)
        }
        console.timeEnd('forOf');
        console.log('names',names);

    } catch(error){
        console.error('Deu ruim');
    }
}

main()
