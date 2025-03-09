const handleLoadUser = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        displayUser(data)
    })
}

const displayUser = (users) =>{
    console.log(users[8]);
}

/* in the then method inside handleLoadUser, the data (which is the array of users fetched from the API) is passed to displayUser(data). In this context, data becomes the value of the users parameter in the displayUser function.*/