let input = document.querySelector('.input')
let items = document.querySelectorAll('.item')
items.forEach((btn) => {
    btn.addEventListener('click', () => {
        let arrText = Array.from(input.innerHTML)
        if(input.innerHTML == '0'){
            input.innerHTML = ''+ btn.innerHTML
        }else if(btn.innerHTML == 'C'){
            arrText.splice(arrText.length-1,1)
            if(arrText.length != 0){
                input.innerHTML = arrText.join('')
            } else {
                input.innerHTML = '0'
            }
        }else if(btn.innerHTML == '.'){
            if(arrText.indexOf('.') != -1){
                input.innerHTML += ''
            } else {
                input.innerHTML += btn.innerHTML
            }
        }else if(btn.innerHTML == '='){
            input.innerHTML = eval(input.innerHTML)
        }else {
            input.innerHTML += btn.innerHTML
        } 
    })
})