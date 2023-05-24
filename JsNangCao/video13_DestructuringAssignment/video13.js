let arr1 = [1, 2, 3, 4, 5]
console.log(arr1)
let arr2 = [0, ...arr1, 6]
console.log(arr2) 

let state = {
    myname: 'Thu',
    age: 22,
    address: 'Hà Nội'
}

let {myname, age, address} = state
console.log(myname, age, address)
