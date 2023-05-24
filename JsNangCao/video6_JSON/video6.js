const callback = (error, data) => {
    if(error){
        console.log('Callback with error: ', error)
    }
    if(data){
        console.log('Callback with data: ', data)
    }
}
function getToDo(callback) {
    var request = new XMLHttpRequest()
    request.onreadystatechange = function () {
        if(this.readyState == 4 && request.status == 200){
            const data = JSON.parse(request.responseText)
            const dataString = JSON.stringify(data)
            callback(undefined, dataString)
        }
        if(this.readyState == 4 && request.status !== 200){
            callback('Somthing wrongs' ,undefined)
        }
    }
    //request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)
    request.open('GET', 'data.json', true)
    request.send()
} 
getToDo(callback)