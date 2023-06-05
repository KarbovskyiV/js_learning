// alert(123123);

const bigInt = 9999999999999999n;
console.log(bigInt);
console.log(typeof bigInt);

const user = {
    id: 10,
    age: 20,
    height: 170,
}

const id = Symbol('Some new symbol');
user[id] = 500;
console.log(user);
console.log(typeof id);

//relation operator
const obj = {
    age: 22,
    name: 'name',
    gender: 'male'
}

console.log('name' in obj);
