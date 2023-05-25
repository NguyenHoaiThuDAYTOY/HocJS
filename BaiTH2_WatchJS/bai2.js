let number = document.querySelectorAll('.number')
let day = document.querySelector('.day')
let h = 0
let m = 0
let s = 0

const showTime = () => {
    const time = new Date()
    h = time.getHours()
    m = time.getMinutes()
    s = time.getSeconds()
    s = convertNumber(s)
    m = convertNumber(m)
    h = convertNumber(h)
    if(h >= 12) {
        day.innerHTML = 'PM'
    } else {
        day.innerHTML = 'AM'
    }
    number[0].innerHTML = h
    number[1].innerHTML = m
    number[2].innerHTML = s
    setTimeout(showTime, 1000)
}

const convertNumber = (x) => {
    if (x < 10){
        x = '0' + x
    }
    return x
}