// let newDate = new Date();
// let time = newDate.getTime();
// // time = time.toString;
// const second = time / 1000;
// const minute = second / 60;
// console.log(second,minute);

let today = new Date();

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

// checking whether AM or PM
let newFormat = hours >= 12 ? 'PM' : 'AM';

// converting to 12 hour format
hours = hours % 12;

// setting 0 as 12
hours = hours ? hours : 12;

minutes = minutes < 10 ? '0' + minutes : minutes;

seconds = seconds < 10 ? '0' + seconds : seconds;

console.log(hours + ':' + minutes + ':' + seconds + ' ' + newFormat);



function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
}
// Outputs a number between 0 and 255 inclusive 
console.log(randomInteger(255));

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    const bgColor = "rgb(" + r + "," + g + "," + b + ")";
    // return [r,g,b];
    return bgColor;
}
// for(i = 0; i < 5; i++) {
//     console.log(randomRgbColor());
// }

// console.log(randomRgbColor());

function dateTime() {
    const dateTime = new Date();

    let daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = dateTime.getDay();
    let dayName = daysArray[day];

    let date = dateTime.getDate();
    date = date < 10 ? '0' + date : date;

    let month = dateTime.toLocaleString('default', { month: 'short' });
    // let month = date.getMonth() + 1;
    let year = dateTime.getFullYear();

    let currentDay = dayName;
    let currentDate = `${date}-${month}-${year}`;
    return [currentDay, currentDate];
}


// function updateTime() {
//     let curren = dateTime();
//     return curren;
// }

const time = dateTime();
console.log(time);



<script>
        const time = document.getElementById('time');
        const div = document.createElement('div')
        div.innerHTML = `
        <p> ${dateTime()} </p>
        `
        time.appendChild(div);
    </script>