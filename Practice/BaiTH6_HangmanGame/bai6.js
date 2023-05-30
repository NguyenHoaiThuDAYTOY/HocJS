let data = [
  {ques: 'quả xoài', ans: 'mango'},
  {ques: 'dâu tây', ans: 'strawberry'},
  {ques: 'con gà', ans: 'chicken'},
  {ques: 'bạch tuộc', ans: 'octopus'},
  {ques: 'tôm hùm', ans: 'lobster'},
  {ques: 'cà chua', ans: 'tomato'},
]
let randomData = Math.floor(Math.random() * (data.length - 1))
document.querySelector('.question').innerHTML = data[randomData].ques
let chosenAnswer = data[randomData].ans;
chosenAnswer = chosenAnswer
  .replace(/[^a-zA-Z0-9]/g, "")
  .toLocaleUpperCase();
console.log(chosenAnswer);
for (let guessSpot = 0; guessSpot < chosenAnswer.length; guessSpot++) {
  document.getElementById("input").innerHTML += '<div class="spot">_</div>';
}
let div = document.querySelectorAll('.letters')
for (let i = 65; i < 78; i++) {
  let button = document.createElement("button");
  button.classList.add("letter");
  button.setAttribute('onclick','guess(this)')
  button.innerText = String.fromCharCode(i);
  div[0].append(button)
}
for (let i = 78; i < 91; i++) {
  let button = document.createElement("button");
  button.classList.add("letter");
  button.setAttribute('onclick','guess(this)')
  button.innerText = String.fromCharCode(i);
  div[1].append(button)
}
let listSpots = document.getElementsByClassName("spot")
let remainingLives = 10;
let countCorrect = 0;
const guess = (letter) => {
    letter.classList.add("hide");
    if (chosenAnswer.includes(letter.innerHTML)) {
      for (let target = 0; target < chosenAnswer.length; target++) {
            if (chosenAnswer[target] == letter.innerHTML) {
                listSpots[target].innerHTML = letter.innerHTML;
              countCorrect += 1;
            }
        }
    }
    if (countCorrect < chosenAnswer.length && !chosenAnswer.includes(letter.innerHTML) ) {
      remainingLives -= 1;
      if (remainingLives == 0) {
        alert("Game over! The answer is " + chosenAnswer);
        window.location.reload();
      }
    }
    if (countCorrect == chosenAnswer.length) {
        setTimeout(() => {
            alert("You win!");
            window.location.reload();
        }, 1000)
    }
    document.getElementById("lives").innerHTML =
      "You have " + remainingLives + " lives";
}