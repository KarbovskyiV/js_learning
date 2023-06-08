const obj1 = {
    name: 'Name',
    age: 27,
    favouriteFood: {
        sweet: 'chocolate',
        salty: 'pizza',
    },
};

// const obj2 = { ...obj1};
// const obj2 = Object.assign({}, obj1);
const obj2 = JSON.parse(JSON.stringify(obj1));

obj2.name = 'John';
obj2.favouriteFood.sweet = 'caramel';

console.log(obj1);
console.log(obj2);
