let answer = ['java', 'javascript', 'php', 'python']
let randomAnswer = Math.floor(Math.random() * (answer.length - 1))
const input = document.getElementById("input");
let chosenAnswer = answer[randomAnswer];
chosenAnswer = chosenAnswer
  .replace(/[^a-zA-Z0-9]/g, "")
  .toLocaleUpperCase();
console.log(chosenAnswer);
for (let guessSpot = 0; guessSpot < chosenAnswer.length; guessSpot++) {
  input.innerHTML += '<div class="spot">_</div>';
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