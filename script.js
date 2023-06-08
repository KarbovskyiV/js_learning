const arr1 = [
    {
        name: 'Name 1',
        age: 18,
        sayHello() {
            console.log('hello');
        },
    },
    {
        name: 'Name 2',
        age: 21,
    },
    {
        name: 'Name 3',
        age: 25,
    },
]

// const arr2 = JSON.parse(JSON.stringify(arr1));
const arr2 = _.cloneDeep(arr1);

arr2.push({
    name: 'Rick',
    age: 30,
});

arr2[0].age = 45;
arr2[0].name = 'Test';

console.log(arr1);
console.log(arr2);
