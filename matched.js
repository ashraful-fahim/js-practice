const products = [
    { id: 1, name: 'walton phone', price: 19000 },
    { id: 2, name: 'Zen Phone', price: 26000 },
    { id: 3, name: 'Xiaomi', price: 29000 },
    { id: 4, name: 'Google', price: 59000 },
    { id: 5, name: 'Xo phone', price: 39000 },
    { id: 6, name: 'Iphone', price: 68000 },
    { id: 7, name: 'nothing Phone', price: 38000 },
];

function matchedProducts(products, search) {
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
        // console.log(product);
    }
    return matched;
}

const result = matchedProducts(products, 'Phone');
console.log(result);