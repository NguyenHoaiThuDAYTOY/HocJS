let myDisplayer = (print) => {
    console.log('Tổng a + b = ', print)
}

let myCalc = (a, b, myCallback) => {
    let sum = a + b
    myCallback(sum)
}

myCalc(5, 7, myDisplayer)

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
            callback(undefined, request.responseText)
        }
        if(this.readyState == 4 && request.status !== 200){
            callback('Somthing wrongs' ,undefined)
        }
    }
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)
    request.send()
} 
console.log(1)
console.log(2)
getToDo(callback)
console.log(3)
console.log(4)
