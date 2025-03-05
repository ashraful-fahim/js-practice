const person = {
     name: 'fahim',
     age: 27,
     sex: 'male',
}

for (let key in person){             //for of cannot be used in looping objects
    console.log(`Key : ${key}, Value : ${person[key]}`);
}


/*incase of using FOR OF in objects, we have to call it's entries
and we know the entries are returned in arrays.
*/ 
const cars = {
    brand: 'Toyota',
    model: 'corolla',
    type: 'sedan',
}

for (let [key,value] of Object.entries(cars)){          
     //here we destructure the returned array by assigning variables to it's index
    console.log(`key: ${key}, value: ${value}`);
}

