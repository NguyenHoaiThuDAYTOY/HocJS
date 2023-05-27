setInterval(() => {
    document.getElementById('12time').innerHTML = new Date().toLocaleTimeString('en-US', { hour: '2-digit', hour12: true, minute: 'numeric', second: 'numeric' })
    document.getElementById('24time').innerHTML = new Date().toLocaleTimeString()
},1000)

console.log(new Date().toLocaleTimeString('en-US'))