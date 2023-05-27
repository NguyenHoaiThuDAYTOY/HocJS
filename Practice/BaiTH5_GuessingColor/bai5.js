document.querySelectorAll('.btn').forEach(() => {
    let r = Math.floor((Math.random())*256)
    let g = Math.floor((Math.random())*256)
    let b = Math.floor((Math.random())*256)
    let index = Math.floor((Math.random())*6)
    document.getElementById(index).style.background = `rgb(${r}, ${g}, ${b})`
});
let r = Math.floor((Math.random())*256)
let g = Math.floor((Math.random())*256)
let b = Math.floor((Math.random())*256)
let index = Math.floor((Math.random())*6)
document.querySelector('#colorName').innerHTML = `rgb(${r}, ${g}, ${b})`

const guess = () => {
    if(document.activeElement.id == index){
        document.querySelector('#result').innerHTML = 'correct !'
    } else {
        document.querySelector('#result').innerHTML = 'wrong !'
    }
}

const newColor = () => {
    location.reload()
}