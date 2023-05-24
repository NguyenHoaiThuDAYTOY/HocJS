const getNewToDo = async (id) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if(response && response.status !== 200){
        throw new Error('Somthing wrongs: ' + response.status)
        //vào TH reject
    }
    let data = await response.json()
    return data
    // vào TH resolve
}

getNewToDo('rrr').then(data => {
    console.log('Get data: ', data)
}).catch(err => {
    console.log('Get error: ', err.message)
})

const getNewToDowithTryCatch = async (id) => {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        if(response && response.status !== 200){
            throw new Error('Somthing wrongs: ' + response.status)
            //vào TH reject
        }
        let data = await response.json()
        return data
    } catch(e){
        console.log('Get catch: ', e.message)
    }
}

getNewToDowithTryCatch('rrr').then(data => {
    if (data){
        console.log('Get data: ', data)
    }
})