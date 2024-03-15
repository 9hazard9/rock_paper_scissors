// Randomly returns either 'rock', 'paper', 'scissors'
function getComputerChoice() {
    // Array holding all possible computer choices
    const choices = ['rock', 'paper', 'scissors'];
    // Math.random() gets random number between(0-1, 1 exclusive)
    // The number from Math.random() is multiplied by the array length to get the numbers between(0-3)
    // Math.floor() gets the index ranging from(0 to arrayLength-1)
    let rand = choices[(Math.floor(Math.random() * choices.length))];
    return rand;
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case 'rock':
            computerSelection === 'rock' ? console.log("Rock vs Rock. It's a tie!")
            : computerSelection === 'paper' ? console.log("Rock vs Paper. Sorry, you lose!")
            : console.log("Rock vs Scissors. You win! Woohoo!");
            break;
        case 'paper':
            computerSelection === 'rock' ? console.log("Paper vs Rock. Your a winner! Yay!")
            : computerSelection === 'paper' ? console.log("Paper vs Paper. It's a tie!")
            : console.log("Paper vs Scissors. You lose! Bettter luck next time!");
            break;
        case 'scissors':
            computerSelection === 'rock' ? console.log("Scissors vs Rock. Oh no, you lose! Don't give up!")
            : computerSelection === 'paper' ? console.log("Scissors vs Paper. Congratulations, you win!")
            : console.log("Scissors vs Scissors. You win! Woohoo!");
            break;
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));