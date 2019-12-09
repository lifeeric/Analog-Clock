// this is the project files
require('./index.html');
require('./main.scss');
require('./images/Poster1.jpg');
require('../node_modules/materialize-css/sass/materialize.scss');
require('../node_modules/material-icons/iconfont/material-icons.scss');



// Actual code is here //

// Min, Sec, Hour elements
let hrs = document.getElementsByClassName('clock__hour')[0];
let min = document.getElementsByClassName('clock__min')[0];
let sec = document.getElementsByClassName('clock__sec')[0];



const setDate = () => {

    let now = new Date();


    // get the seconds from the now
    let seconds = now.getSeconds();
    
    // make degree
    let degreeSecond = ( ( seconds / 60) * 360 ) + 90;
    sec.style.transform = `rotate(${degreeSecond}deg)`;

    // get the minutes
    let minutes = now.getMinutes();
    
    // make degree for min
    let degreeMin = ( (minutes / 60 ) * 360) + ( (seconds / 60) * 6 ) + 90;
    min.style.transform = `rotate(${degreeMin}deg)`;

    // for hour
    let hour = now.getHours();
    let degreeHour = ((hour / 12) * 360) + ((minutes/60)*30) + 90;

    hrs.style.transform = `rotate(${degreeHour}deg)`;

}

setInterval(setDate, 1000);
setDate();