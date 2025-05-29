const friends = ["JFK", "SRK", "SFR", "AHF"];

const [element1, element3, element2, element4] = friends;

console.log(element3);
//array destructuring maintains index sequel.


const person = {
    name: "Hasu",
    age: 56,
    frnds: ["kim", "putin", "jon"],
    country: "Bangladesh"
}

const {name, age, country, frnds} = person;

console.log(frnds)
//object destructuring does not obey sequence