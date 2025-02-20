function add(num1, num2){
    console.log(num1,num2);
    console.log(arguments);
    console.log(arguments[2]);
}

add(12,123,234,425,56);

// The arguments can only be used inside a function and it returns all the parameters exactly like an array, although it is not an array. It's called an Array like object.