const num = 120;

if (num >= 5 && num <= 10) {
    console.log("Yes")
}
else {
    console.log("Noo")
}

const friends = ["JFK", "SRK", "SFR", "AHF"];

console.log(friends.length);
console.log(friends[1]);
friends.push("ANT");
console.log(friends)
friends.pop();   //to remove the last item from the array
console.log(friends)

friends.unshift("BD");  //to push an element at the starting of an array
console.log(friends)

friends.shift("BD");
console.log(friends)    //to remove an item from the starting of an array

//console.log(friends.slice(2,3))     //takes the index before the last
//console.log(friends.splice(2,3))   //takes also the last index

for (let index = 0; index < friends.length; index++) {
    const element = friends[index];
    console.log(element)
}


function sum(a,b){
    console.log(arguments)
    console.log(...arguments)
    const result = a + b;
    return result;
}

const output = sum(6,9);
console.log(output);
console.log(sum.length) //length of a function



const person = {
    name : "Fahim",
    age : 25,
    friends : friends
}

person.name = "HERO ALOM";

console.log(person)
console.log(person.friends[2])