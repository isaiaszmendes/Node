/* 
    0. Obter um user    
    1. Obter número de telefone de um user a partir de seu Id
    2. Obter o endereço do usuario pelo Id
*/

function obterUsuario(callback){
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 3000)
}

function obterTelefone(idUsuario, callback){
    setTimeout(function() {
        return callback(null, {
            numero: '110110011',
            ddd: 11
        })
    } ,2000)
}

function obterEndereco(idUsuario, callback){
    setTimeout(function(){
        return callback(null, {
            rua: 'rua dos bobos',
            numero: 0
        })
    },3000)
}


obterUsuario(function resolverUsuario(err, usuario){
    if(err){
        console.log(err)
        return
    }
    obterEndereco(usuario.id,function resolverEndereco(err2,endereco) {
        if (err2) {
            console.log(err2)
            return
        }    
        obterTelefone(usuario.id, function resolverTelefone(err3, telefone){
            if(err3){
                console.log(err3)
                return
            }    
            console.log(`
                Nome: ${usuario.nome},
                Entedeço: ${endereco.rua},${endereco.numero},
                Telefone: (${telefone.ddd}) ${telefone.numero}
            `)
        })    
    })
})
