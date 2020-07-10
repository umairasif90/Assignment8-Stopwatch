var miniutes = 00;
var seconds = 00;
var hundreds = 00;
var minHeading = document.getElementById("minutes");
var secHeading = document.getElementById("seconds");
var hunHeading = document.getElementById("hundreds");
var interval;

function timer(){
    hundreds++;
    hunHeading.innerHTML = hundreds;
    if(hundreds >= 99){
        seconds++;
        secHeading.innerHTML = seconds;
        hundreds = 00;
    }
 else if(seconds >= 60){
    seconds = 00;
    minutes++;
            minHeading.innerHTML = minutes;
            
    }   
}
function start(){
    interval = setInterval(timer,10);
    document.getElementById('pause').disabled = false;
    document.getElementById('reset').disabled = false;
}
function stop(){
    clearInterval(interval);
    document.getElementById('start').disabled = false;
}
function reset(){
    minutes = 00;
    seconds = 00;
    hundreds = 00;
    hunHeading.innerHTML = hundreds;
    secHeading.innerHTML = seconds;
    minHeading.innerHTML = minutes;
    clearInterval(interval);
    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;
    document.getElementById('reset').disabled = true;
}