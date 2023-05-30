let imgSrc = ['dimsum', 'sushi', 'rice', 'takoyaki', 'tokbokki']
let imgSrcList = [...imgSrc, ...imgSrc]
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
let randomImgSrc = getRandomElement(imgSrcList)
let tiles = document.querySelectorAll('.tile')
let count = 0
let activeTile = null
let chooseTile = false
for(let i = 0; i < 10; i++){
    let imgSrc = randomImgSrc[i]
    console.log(imgSrc)
    tiles[i].setAttribute('data-color', imgSrc)
    tiles[i].setAttribute('data-choosed', 'false')
}
const choose = (element) => {
    const choosed = element.getAttribute('data-choosed')
    let imgSrc = element.getAttribute('data-color')
    let img = document.createElement('img')
    img.setAttribute('src', `./image/${imgSrc}.png`)
    element.append(img)
    if(chooseTile || choosed === 'true'){
        return
    }
    if(element && !activeTile){
        activeTile = element
        return
    }
    let imgSrcMatch = activeTile.getAttribute('data-color')
    if(imgSrcMatch.localeCompare(imgSrc) == 0){
        activeTile.setAttribute('data-choosed', 'true')
        element.setAttribute('data-choosed', 'true')
        chooseTile = false
        activeTile = null
        count += 2
        return count
    }
    if(imgSrcMatch.localeCompare(imgSrc) != 0){
        chooseTile = true
        setTimeout(() => {
            element.removeChild(element.firstElementChild)
            activeTile.removeChild(activeTile.firstElementChild)
            chooseTile = false
            activeTile = null
        }, 2000)
    }  
}
const newGame = () => {
    location.reload()
}