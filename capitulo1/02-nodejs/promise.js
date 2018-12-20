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
        } ,2000)
    })

}

function obterEndereco(idUsuario, callback){
    setTimeout(function(){
        return callback(null, {
            rua: 'rua dos bobos',
            numero: 0
        })
    },3000)
}


const usuarioPromise = obterUsuario()

usuarioPromise
    .then((usuario) => {
        return obterTelefone(usuario.id)
        .then(function resolverTelefone(telefone){
            return {
                usuario: {
                    id: usuario.id,
                    nome: usuario.nome,
                    dataNascimento: usuario.dataNascimento
                },
                telefone: telefone
            }
        })
    })
    .then(function(resultado){
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result){
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function(res){
        console.log(`
        ID:         ${res.usuario.id}
        Nome:       ${res.usuario.nome}
        Endereço:   ${res.endereco.rua}, ${res.endereco.numero}
        Telefone:   (${res.telefone.ddd}) ${res.telefone.numero}
        `) 
    }).catch(function(error){
        console.log('DEU RUIM', error)
    })


// Para manipular o sucesso usamos o .then
// Para manipular erros, usamos o .catch

// usuario -> telefone -> 



