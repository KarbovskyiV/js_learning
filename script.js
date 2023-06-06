// write function, that accept array of object, go through it and add adjective
// that describe external beauty of a person accordingly to their sex (beautiful, handsome)

const people = [
    {
        name: 'Ross',
        sex: 'male',
    },
    {
        name: 'Monica',
        sex: 'female',
    },
    {
        name: 'Chandler',
        sex: 'male',
    },
    {
        name: 'Phoebe',
        sex: 'female',
    },
    {
        name: 'Joey',
        sex: 'male',
    },
    {
        name: 'Rachel',
        sex: 'female',
    },
]

function addAdjectiveToName(array) {
    for (const arrayElement of array) {
        arrayElement.sex === 'male' ? arrayElement.name += ' handsome.' : arrayElement.name += ' beautiful.';
    }
    return array;
}

console.log(addAdjectiveToName(people));
