var arr = [0, 1, 2, 3, 4, 5]
let r = Math.floor((Math.random())*256)
let g = Math.floor((Math.random())*256)
let b = Math.floor((Math.random())*256)
document.querySelector('#colorName').innerHTML = `rgb(${r}, ${g}, ${b})`
let index = Math.floor((Math.random())*6)
document.getElementById(index).style.background = `rgb(${r}, ${g}, ${b})`
arr.slice(index, 1)

let r1 = Math.floor((Math.random())*256)
let g1 = Math.floor((Math.random())*256)
let b1 = Math.floor((Math.random())*256)
document.getElementById(arr[0]).style.background = `rgb(${r1}, ${g1}, ${b1})`

let r2 = Math.floor((Math.random())*256)
let g2 = Math.floor((Math.random())*256)
let b2 = Math.floor((Math.random())*256)
document.getElementById(arr[1]).style.background = `rgb(${r2}, ${g2}, ${b2})`

let r3 = Math.floor((Math.random())*256)
let g3 = Math.floor((Math.random())*256)
let b3 = Math.floor((Math.random())*256)
document.getElementById(arr[2]).style.background = `rgb(${r3}, ${g3}, ${b3})`

let r4 = Math.floor((Math.random())*256)
let g4 = Math.floor((Math.random())*256)
let b4 = Math.floor((Math.random())*256)
document.getElementById(arr[3]).style.background = `rgb(${r4}, ${g4}, ${b4})`

let r5 = Math.floor((Math.random())*256)
let g5 = Math.floor((Math.random())*256)
let b5 = Math.floor((Math.random())*256)
document.getElementById(arr[4]).style.background = `rgb(${r5}, ${g5}, ${b5})`

const guess = () => {
    if(document.activeElement.id == index){
        document.querySelector('#result').innerHTML = 'correct !'
    } else {
        document.querySelector('#result').innerHTML = 'wrong !'
    }
    document.getElementsByClassName('btn')[0].removeAttribute('onclick')
    document.getElementsByClassName('btn')[1].removeAttribute('onclick')
    document.getElementsByClassName('btn')[2].removeAttribute('onclick')
    document.getElementsByClassName('btn')[3].removeAttribute('onclick')
    document.getElementsByClassName('btn')[4].removeAttribute('onclick')
    document.getElementsByClassName('btn')[5].removeAttribute('onclick')
}
const newColor = () => {
    location.reload()
}