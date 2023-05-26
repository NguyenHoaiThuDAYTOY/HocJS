// let timer;
// let startTime;
// let elapsedTime = 0;

// const start = () => {
//     startTime = new Date().getTime() - elapsedTime;
//     timer = setInterval(displayTimer, 1000);
// }

// const stop = () => {
//     clearInterval(timer);
//     elapsedTime = new Date().getTime() - startTime;
// }

// const reset = () => {
//     location.reload()
// }

// const displayTimer = () => {
//     elapsedTime = new Date().getTime() - startTime;
//     var minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
//     var seconds = Math.floor((elapsedTime / 1000) % 60);
//     document.getElementById("timer").innerHTML = (minutes).toString().padStart(2, '0') + ":" + (seconds).toString().padStart(2, '0');
// }

let timer = null;
let timeStart = 0;
let oneHour = 60*60

const start = () => {
    timer = setInterval(displayTimer, 1000);
}

const stop = () => {
    clearInterval(timer);
    elapsedTime = new Date().getTime() - startTime;
}

const reset = () => {
    location.reload()
}

const displayTimer = () => {
    timeStart = timeStart === oneHour ? 0 : timeStart + 1;
    const minutes = Math.floor(timeStart/60);
    const seconds = timeStart%60;
    document.getElementById("timer").innerHTML = (minutes).toString().padStart(2, '0') + ":" + (seconds).toString().padStart(2, '0');
}