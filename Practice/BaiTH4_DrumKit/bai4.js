const mappingAudio = {
    "e": "E-crash.wav",
    "r": "R-ride.wav",
    "f": "F-floortom.mp3",
    "g": "G-midtom.mp3",
    "h": "H-hightom.mp3",
    "v": "V&B-kick.wav",
    "b": "V&B-kick.wav",
    "j": "J-snare.wav",
    "i": "I-hithat-open.wav",
    "k": "K-hihat-closed.mp3",
};
window.onkeydown = (event) => {
    const sound = mappingAudio[event.key];
    if(!sound) return
    sound.currentTime = 0
    new Audio('./sounds/' + sound).play()
};