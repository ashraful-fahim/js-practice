const person = {
    name: 'hena',
    age: 23,
    country: 'BD'
}

person.status = 'offline'; //adding a new property to the object

Object.seal(person); // prevents from adding new properties to the object

person.profession = 'student'; //result

person.age = 24;     //replacing the value of a property

Object.freeze(person); //prevents from replacing the value of properties

person.age = 25; //result



const keys = Object.keys(person); 
const values = Object.values(person); 
const entries = Object.entries(person);  //returns all the entries of an objects in arrays in an array
console.log(keys, values, entries);