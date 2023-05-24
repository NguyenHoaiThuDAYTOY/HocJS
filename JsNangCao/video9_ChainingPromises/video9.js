function getToDo(id) {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest()
        request.onreadystatechange = function () {
            if(this.readyState == 4 && request.status == 200){
                const data = JSON.parse(request.responseText)
                const dataString = JSON.stringify(data)
                resolve(data)
            }
            if(this.readyState == 4 && request.status !== 200){
                reject('Somthing wrongs')
            }
        }
        request.open('GET', `https://jsonplaceholder.typicode.com/todos/${id}`, true)
        request.send()
    })
    
} 
getToDo(1).then(data => {
    console.log(data)
    return getToDo(2)
}).then(data => {
    console.log(data)
    return getToDo(3)
}).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})