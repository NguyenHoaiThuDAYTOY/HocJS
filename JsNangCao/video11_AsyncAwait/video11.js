const getNewToDo = async (id) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    let data = await response.json()
    return data
}

getNewToDo(2).then(data => {
    console.log('Get data: ', data)
})