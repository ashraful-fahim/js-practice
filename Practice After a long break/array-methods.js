const products = [
    {name: "redmi", brand: "xiaomi", price: 3000, color: "black"},
    {name: "sam", brand: "samsung", price: 5000, color: "white"},
    {name: "apple1", brand: "apple", price: 5000, color: "gold"},
    {name: "apple2", brand: "apple", price: 5000, color: "gold"},
    {name: "redmi2", brand: "xiaomi", price: 2000, color: "black"},
]

const result = products.map(product => product.brand);
console.log(result)
// map returns a specific array


products.forEach(product => console.log(product.name));
//forEach method doesn't return anything. It is used for internal processing


const filter = products.filter(product => product.price >=5000)
console.log(filter);
// returns an array of objects which meet certain condition


const find = products.find(product => product.brand === "apple");
console.log(find);