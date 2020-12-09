const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const timePeriod = document.getElementById('timePeriod');

function showCurrentTime() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour.textContent = (hr < 10) ? ('0' + hr) : hr;
    minute.textContent = (min < 10) ? ('0' + min) : min;
    second.textContent = (sec < 10) ? ('0' + sec) : sec;
    timePeriod.textContent = (hr >= 12) ? 'pm' : 'am';
}

setInterval(showCurrentTime, 1000);