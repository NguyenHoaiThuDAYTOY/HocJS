let guessColor = document.querySelector('#colorName')
let btn = document.querySelectorAll('.btn')
const randomNumber = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
} 
const randomColor = () => {
    r = randomNumber(0, 225)
    g = randomNumber(0, 225)
    b = randomNumber(0, 225)
    return `rgb(${r}, ${g}, ${b})`
}
const newColor = () => {
    document.querySelector('#result').innerHTML = 'result !'
    for(let i = 0; i < 6; i++){
        btn[i].style.backgroundColor = randomColor()
        console.log(btn[i].style.backgroundColor)
    }
}
const start = () => {
    newColor()
    let index = randomNumber(0, 5)
    guessColor.innerHTML = btn[index].style.backgroundColor
}
const guess = (event) => {
    if (event.style.backgroundColor === guessColor.innerHTML) {
        document.querySelector('#result').innerHTML = 'correct !'
    } else {
        document.querySelector('#result').innerHTML = 'wrong !'
    }
}