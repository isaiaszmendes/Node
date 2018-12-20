
const pessoas = [
    {name: 'Isaias', 
    title: '',
    idade: 23},
    {name: 'Isabelle', 
    title: '',
    idade: 23},
    {name: 'Isayne', 
    title: 'cafe com leite',
    idade: 23},
    {name: 'Ygor', 
    title: 'manteiga',
    idade: 23},
    {name: 'Cama', 
    title: 'cama de casal',
    idade: 23},
    {name: 'Cadeira', 
    title: 'suave',
    idade: 23},
    {name: 'Sofa',
    title: 'vai qualquer um', 
    idade: 23},
    {name: 'Cama2', 
    title: 'sa fa do',
    idade: 23},
    {name: 'Cadeira 3',
    title: 'bla blo blu', 
    idade: 23},
    {name: 'Zcarias', 
    title: 'kkkkk rssrr',
    idade: 23},
    {name: 'CAma', 
    title: 'fone de ouvido',
    idade: 23},
    {name: 'ygor', 
    title: 'ferreira mendes',
    idade: 23}    
]

const MySearch = (obj, pesq) => {
    const lista = []
    for(let i=0; i < obj.length; i++){
        const nome  = obj[i].name.toLowerCase().indexOf(pesq) !== -1
        const title  = obj[i].title.toLowerCase().indexOf(pesq) !== -1
        if(nome || title){
            lista.push(obj[i])
        }
    }
    return lista
}
const fil = MySearch(pessoas, 'isa')
console.log(fil);