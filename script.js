const interval = 1000; // 1000 ms 
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

clock();
function rotate(clockHand, degree){
    if (degree >= 180){
        clockHand.style.transform = `rotate(${degree}deg) translateX(50%)`;
    }else{
        clockHand.style.transform = `rotate(${degree}deg) translateX(50%)`;
    }
}
function clock(){
    let date = new Date(); 
    //console.log("date: "+date);
    let hour = (date.getHours() + 24) % 12 || 12;;
    //console.log("hour: "+ hour);
    let minute = date.getMinutes();
    //console.log("min: " + minute);
    let second = date.getSeconds();
    //console.log("sec: "+ second);
    let hourHandDeg = (hour * 360) / 12;       // 12 hours on clock 
    //console.log(hourHandDeg);
    let minuteHandDeg = (minute * 360 ) / 60;  // 60 minutes per hour 
    //console.log(minuteHandDeg);
    let secondHandDeg =  (second * 360) / 60;  // 60 seconds per minute 
    //console.log(secondHandDeg);
    rotate(hourHand,hourHandDeg);
    rotate(minuteHand,minuteHandDeg);
    rotate(secondHand,secondHandDeg);
}

setInterval(clock,interval);