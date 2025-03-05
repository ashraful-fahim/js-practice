const person = {
     name: 'fahim',
     age: 27,
     sex: 'male',
}

for (let key in person){
    console.log(`Key : ${key}, Value : ${person[key]}`);
}