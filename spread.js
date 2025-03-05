const friends = ['zakuan','tarek','antor','navid'];
console.log(friends);
// spread operator catches the value inside an array
console.log(...friends);

const newFriend = ['abid', ...friends];
console.log(newFriend);


const numbers = [12,134,345,2,4,567,36,363,47];
console.log(Math.max(numbers));
console.log(Math.max(...numbers));


//often used for copying and pasting and adding

const circle = {
    radius: 10
};

const style= {
    backgroundColor: 'red'
};

const solidCircle = {
    ...circle,
    ...style
};

console.log(solidCircle);