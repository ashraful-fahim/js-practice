const fname = "Ashraful";
const lname = "lname";

console.log(`i am ${lname}`);



const sum = (...rest) => {
    return rest;
}

const result = sum(1,2,3);
console.log(result);


const numbers =  [1,2,3,4,5,6,7];
// console.log(...numbers)

const newNumbers = [...numbers, 8, 9, 10];
console.log(newNumbers);