let timer;
let startTime;
let elapsedTime = 0;

const start = () => {
    startTime = new Date().getTime() - elapsedTime;
    timer = setInterval(displayTimer, 10);
}

const stop = () => {
    clearInterval(timer);
    elapsedTime = new Date().getTime() - startTime;
}

const reset = () => {
    location.reload()
}

const displayTimer = () => {
    elapsedTime = new Date().getTime() - startTime;
    var minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
    var seconds = Math.floor((elapsedTime / 1000) % 60);
    document.getElementById("timer").innerHTML = formatTime(minutes) + ":" + formatTime(seconds);
}

const formatTime = (time) => {
    if (time < 10) {
        return "0" + time;
    } else {
        return time;
    }
}