/* 
    0. Obter um user    
    1. Obter número de telefone de um user a partir de seu Id
    2. Obter o endereço do usuario pelo Id
*/
// importamos um módulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)


function obterUsuario(){
    // quando der algum problema -> reject(erro)
    // quando sucess -> resolve
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function () {
            // return reject(new Error('DEU RUIM MESMO'))
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 3000)
    })

}

function obterTelefone(idUsuario){
    return new Promise(function resolverPromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                numero: '110110011',
                ddd: 11
            })
        } ,3000)
    })

}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'rua dos bobos',
            numero: 0
        })
    },2000)
}

// 1. Add a palavra async -> automaticamente ela retornará uma Promise
main()
async function main(){
    try{
        console.time('medida-promise')
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id)

        const resultado = await Promise.all([ // como as duas não dependem uma da outra            
            obterTelefone(usuario.id),  // podemos rodar as duas em Promise.all
            obterEnderecoAsync(usuario.id)
        ]) // com isso reduzi dois segundos do time

        const endereco = resultado[1] 
        const telefone = resultado[0]

        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.numero}, 
            Endereco: ${endereco.rua} ${endereco.numero}
        `)
        console.timeEnd('medida-promise')
    } catch(error){
        console.error('DEU RUIM', error)
    }
}
