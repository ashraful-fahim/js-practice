//Array destructuring:

const friends = ['zakuan', 'fahim', 'shiki', 'faysal'];

const [element1, element2, element3, element4] = friends;

console.log(element3)     //maintains sequence


//object destructuring:

const person = {
    name: 'Zakuan',
    age: 26,
    profession: 'student',
    politics: 'active'
};

const {name, politics, age, profession} = person;

console.log(politics);     //does not maintain sequence