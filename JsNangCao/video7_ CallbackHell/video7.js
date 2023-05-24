const callback = (error, data) => {
    if(error){
        console.log('Callback with error: ', error)
    }
    if(data){
        console.log('Callback with data: ', data)
    }
}
function getToDo(id, callback) {
    var request = new XMLHttpRequest()
    request.onreadystatechange = function () {
        if(this.readyState == 4 && request.status == 200){
            const data = JSON.parse(request.responseText)
            const dataString = JSON.stringify(data)
            callback(undefined, data)
        }
        if(this.readyState == 4 && request.status !== 200){
            callback('Somthing wrongs' ,undefined)
        }
    }
    request.open('GET', `https://jsonplaceholder.typicode.com/todos/${id}`, true)
    request.send()
} 
getToDo(1, (error, data) => {
    if(error){
        console.log('Callback with error: ', error)
    }
    if(data){
        console.log('Callback with data: ', data)
        getToDo(2, (error, data) => {
            if(error){
                console.log('Callback with error: ', error)
            }
            if(data){
                console.log('Callback with data: ', data)
                getToDo(3, (error, data) => {
                    if(error){
                        console.log('Callback with error: ', error)
                    }
                    if(data){
                        console.log('Callback with data: ', data)
                    }
                })
            }
        })
    }
})