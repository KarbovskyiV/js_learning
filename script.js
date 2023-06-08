const obj1 = {
    name: 'Name',
    age: 27,
    favouriteFood: {
        sweet: 'chocolate',
        salty: 'pizza',
    },
    sayHello: function() {
        console.log('hello');
    } ,
};

// Shallow cloning
// const obj2 = { ...obj1};
// const obj2 = Object.assign({}, obj1);

// Deep cloning without methods
// const obj2 = JSON.parse(JSON.stringify(obj1));

// Deep cloning and with methods
// lodash_.cloneDeep(value)

obj2.name = 'John';
obj2.favouriteFood.sweet = 'caramel';

console.log(obj1);
console.log(obj2);
