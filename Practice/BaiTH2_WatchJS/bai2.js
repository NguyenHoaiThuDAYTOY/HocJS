const showTime = () => {
    const time = new Date()
    h = time.getHours()
    m = time.getMinutes()
    s = time.getSeconds()
    s = convertNumber(s)
    m = convertNumber(m)
    h = convertNumber(h)
    if(h >= 12) {
        document.getElementById('12time').innerHTML = (h-12) + ':'+ m + ':' + s + 'PM'
    } else {
        document.getElementById('12time').innerHTML = h + ':'+ m + ':' + s + 'AM'
    }
    document.getElementById('24time').innerHTML = h + ':'+ m + ':' + s 
    
    setInterval(showTime, 1000)
}
const convertNumber = (x) => {
    if (x < 10){
        x = '0' + x
    }
    return x
}