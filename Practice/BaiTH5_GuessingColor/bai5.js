let guessColor
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
    guessColor = randomColor()
    document.querySelector('#colorName').innerHTML = guessColor
    const btn = document.querySelectorAll('.btn')
    const index = randomNumber(0, 5)
    for(let i = 0; i < 6; i++){
        btn[i].style.backgroundColor = i === index ? guessColor : randomColor()
    }
}
const guess = (event) => {
    if (event.style.backgroundColor === guessColor) {
        document.querySelector('#result').innerHTML = 'correct !'
    } else {
        document.querySelector('#result').innerHTML = 'wrong !'
    }
}
const start = () => {
    newColor()
}