// Objects destructuring

const person = {
    name: 'mokhles',
    age: 45,
    profession: 'private employee',
    isSmoker: false,
}

const { name, age, profession, isSmoker } = person;

console.log(isSmoker, name, age);


// Array destructuring

const people = ['bappa', 'hero-alam', 'noman', {type: 'jolly'}];

const [front, hero, junior, obj] = people;  //unlike object, anonymous variable names can be set according to the index of the array 

console.log(front, hero, obj);