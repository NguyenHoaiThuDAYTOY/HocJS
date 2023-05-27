window.onkeydown = (key) => {
    const audio = document.querySelector(`audio[data-key='${key.keyCode}']`)
    if(!audio) return
    audio.currentTime = 0
    audio.play()
};