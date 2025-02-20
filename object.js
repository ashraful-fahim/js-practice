// An object can hold all types of data types.

const person = {
    name : 'Fahim',
    age : 27,
    hobbies : ['biking', 'gaming', 'reading books', 'learning new things'],
    friends : {
        zakuan : 'closest',
        shiki : 'closest',
        antor : 'good friend',
        plabon : 'good friend',
    },
    isSingle : false,
    movies : [{title: 'tere nam', release: 2002}, {seies: 'GOT', watched : 2017}],
    act : function(){
        console.log('Object holding function')
    }
}

console.log(person.movies[0].title);
console.log(person.act);
person.act();