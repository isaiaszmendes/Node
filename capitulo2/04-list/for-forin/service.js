const axios = require('axios') 
const URL = `https://swapi.co/api/people`

async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    
    return response.data

}

module.exports = {
    // se a chave do Object for o mesmo nome do valor, então posso 
    // obterPessoas: obterPessoas 
    obterPessoas
}