let display = document.querySelector('#display')

const wipe = () => {
    display.value = ''
}

const show = (n) => {
    display.value += n
}

const dot = () => {
    if (display.value.split(/[-+\\/\\*]/).pop().split('.').length == 1 && display.value.split(/[-+\\/\\*]/).pop().length != 0) {
        display.value += '.'
    } else {
        display.value = display.value
    }
}

const cal = (n) => {
    console.log(display.value.split(/[-+\\/\\*]/).pop().length)
    if (display.value.split(/[-+\\/\\*]/).pop().length != 0) {
        display.value += n
    } else {
        display.value = display.value
    }
}

const calc = () => {
    display.value = eval(display.value)
}

const keyup = (event) => {
    if (event.keyCode == 190) {
        event.preventDefault();
        dot()
    }
}