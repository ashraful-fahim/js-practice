const person = {
    name: "Kader Miah",
    age: 34,
    friends: ["Rohim", "Korim", "Jabbar"],
    family: {
        father: "Faruk",
        mother: "Jorina"
    }
}

const jsonData = JSON.stringify(person);  //converts plain text to json format
console.log(jsonData);

const plainData = JSON.parse(jsonData);   //converts json data to plain format
console.log(plainData);


const keys = Object.keys(person);
console.log(keys)
const values = Object.values(person);
console.log(values)



//Various ways of manipulating array of objects 

const products = [
    {name: "redmi", brand: "xiaomi", price: 3000, color: "black"},
    {name: "sam", brand: "samsung", price: 5000, color: "white"},
    {name: "apple1", brand: "apple", price: 5000, color: "gold"},
    {name: "apple2", brand: "apple", price: 5000, color: "gold"},
    {name: "redmi2", brand: "xiaomi", price: 2000, color: "black"},
]

const newData = {
    name: "walton",
    brand: "walton",
    price: 3000,
    color: "grey"
}

//including the newData object to the existing array
// const newArray = [...products, newData];
// console.log(newArray)

//create a new array of object where there is no xiaomi brand and add the new brand
const remainingProduct = products.filter(product => product.brand !== "xiaomi")
// console.log(remainingProduct);
const revisedArray = [...remainingProduct, newData];
console.log(revisedArray)