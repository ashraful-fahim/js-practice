const handleLoadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')  //calling the API
        .then(res => res.json())     //making a promise .then, and converting the response to json and also calling it
        .then(data => {
            console.log(data);  //converting the promise JSON to an object again
        })
}