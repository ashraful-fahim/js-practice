const friends = ['zakuan','tarek','antor','navid'];
console.log(friends);
// spread operator catches the value inside an array
console.log(...friends);

const newFriend = ['abid', ...friends];
console.log(newFriend);