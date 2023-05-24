var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function () {
    if (this.readyState == 4){
        console.log('Check response: ', xhttp.responseText)
    }
} 
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)
xhttp.send()
