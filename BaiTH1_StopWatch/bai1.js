let number = document.querySelectorAll('.number')

let s1 = 0
let s2 = 0
let m1 = 0
let m2 = 0

const start = () => {
    setTimer = setInterval(timer, 1000)
}

const stop = () => {
    clearInterval(setTimer)
}

const reset = () => {
    location.reload()
}

const timer = () => {
    s1++;
    number[3].innerHTML = s1 == 10 ? s1 = 0 : s1
    if(s1 == 0){
        s2++;
        number[2].innerHTML = s2 == 6 ? s2 = 0 : s2
    }
    if(s1 == 0 && s2 == 0){
        m1++;
        number[1].innerHTML = m1 == 10 ? m1 = 0 : m1
    }
    if(s1 == 0 && s2 == 0 && m1 == 0){
        m2++;
        number[0].innerHTML = m2
    }
}