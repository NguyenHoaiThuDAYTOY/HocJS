const showTime = () => {
    const time = new Date()
    h = time.getHours().toString().padStart(2, '0');
    m = time.getMinutes().toString().padStart(2, '0');
    s = time.getSeconds().toString().padStart(2, '0');
    if(h >= 12) {
        document.getElementById('12time').innerHTML = '0' + (h-12) + ':'+ m + ':' + s + ' PM'
    } else {
        document.getElementById('12time').innerHTML = h + ':'+ m + ':' + s + ' AM'
    }
    document.getElementById('24time').innerHTML = h + ':'+ m + ':' + s 
    setInterval(showTime, 1000)
}