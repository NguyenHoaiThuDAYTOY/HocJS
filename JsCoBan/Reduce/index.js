let arr = [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array){
    return previousValue + currentValue
})
console.log('Tổng các phần tử mảng arr: ', arr)

let arrInit = [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array){
    return previousValue + currentValue
}, 10)
console.log('Tổng các phần tử mảng arr và giá trị init: ', arrInit)

let a = 'hh'
if (a % 2 === 0){
    console.log('Số chẵn')
} else if (a % 2 === 1){
    console.log('Số lẻ')
} else {
    console.log('Không phải là số')
}