var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && xhttp.status == 200){
        console.log('Check response: ', xhttp.responseText)
    } else {
        console.log('Status: ', xhttp.status)
    }
} 
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos/1abc', true)
xhttp.send()
