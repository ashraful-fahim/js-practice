const age = 22;

// if (age > 18){
//     console.log('Vote dio')
// }
// else{
//     console.log('Ghumai thako')
// }

// simple ternary-----------------

// age >= 18 ? console.log('vote dio') : console.log('ghumai thako')

// advanced ternary----------

// let price = 500;
// const isLeader = true;

// if (isLeader === true){
//     price = 0;
// }
// else{
//     price = price + 100;
// }
// console.log(price)

// price = isLeader === true ? 0 : price + 100;
// console.log(price)

// advanced ternary nesting
price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 1000;