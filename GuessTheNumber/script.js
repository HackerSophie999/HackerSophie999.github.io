
const numberr = Math.floor(Math.random()*100) + 1
console.log(numberr)

const clue = document.getElementById('indice');

function tellClue() {
    
    let guess = parseInt(document.getElementById('guess').value.trim());
    if (guess > numberr) {
        clue.textContent = "Too Hign";
    }
    if (guess < numberr) {
        clue.textContent = "Low";
    }
    if (guess === numberr) {
        clue.textContent = "Perfect";
    }
}
