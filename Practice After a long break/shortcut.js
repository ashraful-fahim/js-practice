//truthy value- "sdassdf", 2345, {}, []. true

const test = {};

// if (test){
//     console.log("truthy")
// }
// else{
//     console.log("falsy")
// }

test ? console.log("truthy") : console.log("falsy")


const num = 30;
const result = (num >= 10 && num <= 20) ? "true" : "false";
console.log(result);
 


const isActive = true;

const showUser = () => console.log("Green Light!");

const hideUser = () => console.log("Hide User");

// isActive ? showUser() : hideUser();

//in case of responsing only when the condition is true otherwise no response:
isActive && showUser();   

//in case of responsing only when the condition is false otherwise no response:
// isActive || hideUser();


let num2 = "10";
// const rr = +num2
const rr = num2 - 0; //subtracting anything from a string makes it a number
console.log(typeof rr)

const str = 2345;

const pp = str + ""; //adding an empty string to a number makes it a string
console.log(typeof pp)