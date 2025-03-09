const loadUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => showUser(data))
}

const showUser = (users) => {
    const userList = document.getElementById("user");
    for(const user of users){
        const li = document.createElement("li");
        li.innerText = user.name;
        userList.append(li);
    }
}