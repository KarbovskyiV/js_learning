const obj1 = {
    name: 'Name',
    age: 27,
    favouriteFood: {
        sweet: 'chocolate',
        salty: 'pizza',
    },
};

// const obj2 = { ...obj1};
const obj2 = Object.assign({color: 'red'}, obj1);

console.log(obj1);
console.log(obj2);
