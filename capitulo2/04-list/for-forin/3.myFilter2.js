
const pessoas = [
    {name: 'Isaias', 
    idade: 23},
    {name: 'Isabelle', 
    idade: 23},
    {name: 'Isayne', 
    idade: 23},
    {name: 'Ygor', 
    idade: 23},
    {name: 'Cama', 
    idade: 23},
    {name: 'Cadeira', 
    idade: 23},
    {name: 'Sofa', 
    idade: 23},
    {name: 'Cama2', 
    idade: 23},
    {name: 'Cadeira 3', 
    idade: 23},
    {name: 'Isaias', 
    idade: 23},
    {name: 'CAma', 
    idade: 23},
    {name: 'ygor', 
    idade: 23}    
]


const search = (obj, text) => {
    const res = obj.filter((item,i, j) => {
        console.log( j)
        // return item[i].name.toLoweCase().indexOf(text) !== -1
    })

    return res
}

const fil = search(pessoas, 'isaias')
console.log(fil);