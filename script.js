const interval = 1000; // 1000 ms 
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const time = document.querySelector('.time');
let amPM; 
const days = ['Sun','Mon','Tue','Wed',
              'Thu','Fri','Sat'];
const months = ['Jan','Feb','March','April','May','June',
                'July','Aug','Sept','Oct','Nov','Dec'];

function rotate(clockHand, degree){
    clockHand.style.transform = `rotate(${degree}deg) translateX(50%)`;
}

function clock(){
    let date = new Date(); 
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = (date.getHours() + 24) % 12 || 12;;
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let hourHandDeg = (hour * 360) / 12;       // 12 hours on clock 
    let minuteHandDeg = (minute * 360 ) / 60;  // 60 minutes per hour 
    let secondHandDeg =  (second * 360) / 60;  // 60 seconds per minute 

    rotate(hourHand,hourHandDeg);
    rotate(minuteHand,minuteHandDeg);
    rotate(secondHand,secondHandDeg);

    if (date.getHours() >= 12){
        amPm = 'pm';
    }else{
        amPm = 'am';
    }
    if(minute < 10){
        minute = '0' + minute; 
    }

    time.innerHTML = `${hour}:${minute}${amPm} - ${days[day]},${months[month]} ${year}`;
}
clock();
setInterval(clock,interval);