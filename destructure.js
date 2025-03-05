// In the following way we destructure objects

const person ={
    name: 'mokhles',
    age: 45,
    profession: 'private employee',
    isSmoker: false,
}

const {name, age, profession, isSmoker} = person;

console.log(isSmoker,name);