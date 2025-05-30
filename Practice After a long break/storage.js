const handleAddToStorage = () => {
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    // console.log("name")
    
    const data = {id, name};
    localStorage.setItem(id,JSON.stringify(data));
}

const storedItem = localStorage.getItem("1234");  //call through ID
console.log(JSON.parse(storedItem));


const handleClear = () => {
    localStorage.clear()
}