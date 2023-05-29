let colors = ['blue', 'purple', 'orange', 'red', 'green']
let colorsList = [...colors, ...colors]
const elements = [];
const getRandomElement = (arr) => {
    if (elements.length < 10) {
        const index = Math.floor(Math.random() * arr.length)
        const element = arr.splice(index, 1)[0];
        elements.push(element)
        return getRandomElement(arr)
    } else {
        return elements
    }
}
let randomColor = getRandomElement(colorsList)
let tiles = document.querySelectorAll('.tile')
let count = 0
let activeTile = null
let chooseTile = false
for(let i = 0; i < 10; i++){
    let color = randomColor[i]
    tiles[i].setAttribute('data-color', color)
    tiles[i].setAttribute('data-choosed', 'false')
}
const choose = (element) => {
    const choosed = element.getAttribute('data-choosed')
    if(chooseTile || choosed === 'true'){
        return
    }
    let color = element.getAttribute('data-color')
    element.style.background = color
    if(!activeTile){
        activeTile = element
        return
    }
    let colorMatch = activeTile.getAttribute('data-color')
    if(colorMatch == color){
        activeTile.setAttribute('data-choosed', 'true')
        element.setAttribute('data-choosed', 'true')
        chooseTile = false
        activeTile = null
        count += 2
        if (count === 10) {
            alert("You win");
            location.reload()
        }
        return;
    }
    if(colorMatch != color){
        chooseTile = true
        setTimeout(() => {
            element.style.background = null
            activeTile.style.backgroundColor = null
            chooseTile = false
            activeTile = null
        }, 800)
    }  
}
