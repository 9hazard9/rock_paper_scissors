function getComputerChoice() {
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    // Math.random() gets random number between(0-1, 1 exclusive)
    // The number from Math.random() is multiplied by the array length to get the numbers between(0-3)
    // Math.floor() gets the index ranging from(0 to arrayLength-1)
    let randomChoice = computerChoices[(Math.floor(Math.random() * computerChoices.length))];
    return randomChoice;
}

function displayScoreTable(playerPoints, computerPoints) {
    return console.log(`\n||Player: ${playerPoints}||\t\t||Computer: ${computerPoints}||\n`);
}

function playGame() {
    function playRound(playerSelection, computerSelection) {
        switch(playerSelection) {
            case 'Rock':
                if (computerSelection === 'Rock') {
                    console.log("Rock vs Rock. It's a tie!");
                } else if (computerSelection === 'Paper') {
                    console.log("Rock vs Paper. Sorry, you lose!");
                    computerPoints++;
                } else {
                    console.log("Rock vs Scissors. You win! Woohoo!");
                    playerPoints++;
                }
                displayScoreTable(playerPoints, computerPoints);
                break;
            case 'Paper':
                if (computerSelection === 'Rock') {
                    console.log("Paper vs Rock. Your a winner! Yay!");
                    playerPoints++;
                } else if (computerSelection === 'Paper') {
                    console.log("Paper vs Paper. It's a tie!");
                    playerPoints++;
                } else {
                    console.log("Paper vs Scissors. You lose! Bettter luck next time!");
                    computerPoints++;
                }
                displayScoreTable(playerPoints, computerPoints);
                break;
            case 'Scissors':
                if (computerSelection === 'Rock') {
                    console.log("Scissors vs Rock. Oh no, you lose! Don't give up!");
                    computerPoints++;
                } else if(computerSelection === 'Paper') {
                    console.log("Scissors vs Paper. Congratulations, you win!");
                    playerPoints++;
                } else {
                    console.log("Scissors vs Scissors. It's a tie");
                    playerPoints++;
                    computerPoints++;
                }
                displayScoreTable(playerPoints, computerPoints);
                break;
        }
    }

    let playerPoints = 0;
    let computerPoints = 0;

    const allButtons = document.querySelectorAll(".button");

    allButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            playRound(event.target.name, getComputerChoice());
        })
    });
}

playGame();