const friends = ['zakuan','tarek','antor','navid'];
console.log(friends);
// spread operator catches the value inside an array
console.log(...friends);

const newFriend = ['abid', ...friends];
console.log(newFriend);


const numbers = [12,134,345,2,4,567,36,363,47];
console.log(Math.max(numbers));
console.log(Math.max(...numbers));