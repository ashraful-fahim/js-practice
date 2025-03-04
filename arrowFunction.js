// incase of normal function:

const sum = function sum(num1 = 0, num2 = 0) {
    return num1 + num2;
}

console.log(sum(10, 20));


/* arrow functions are shorter than the normal functions
It returns the value implicitly without the need for declaring a return key in a single line code.
*/
const sum2 = (num1, num2) => num1 + num2;
console.log(sum2(10, 20));


// But it needed to use a return function for multiple lines of function.
const pos = (num1, num2) => {
    const sum = num1 + num2;
    const product = num1 * num2;
    const result = sum * product;
    return result;
}

console.log(pos(3, 4));

//ways to use arrow function 
const test = () => console.log('hello empty!');
test();

//another way
const square = x => x * x;
console.log(square(10));