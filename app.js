var hr = document.getElementById('hr');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var interval;
var  startbtn = document.getElementById("start")
var  stopbtn = document.getElementById("stop")
var hour = '00';
var minuts = '00';
var secn = '00';

function val() {
    hr.innerHTML = hour;
    min.innerHTML = minuts;
    sec.innerHTML = secn;

}

val()

function timer() {
    secn++
    val()
    if (secn == 60) {
        minuts++
        val()
        secn = 0;
    } else if (minuts == 60) {
        hour++
        val()
        minuts = 0;
    }


}

function start() {
    interval = setInterval(timer, 1000)
startbtn.style.display = "none";
}

function stop() {
    clearInterval(interval)
    startbtn.style.display = "inline";

}

function reset() {
    clearInterval(interval)
     hour = '00';
     minuts = '00';
     secn = '00';
    
    val()


}