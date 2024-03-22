function getComputerChoice() {
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    // Math.random() gets random number between(0-1, 1 exclusive)
    // The number from Math.random() is multiplied by the array length to get the numbers between(0-3)
    // Math.floor() gets the index ranging from(0 to arrayLength-1)
    let randomChoice = computerChoices[(Math.floor(Math.random() * computerChoices.length))];
    return randomChoice;
}

function displayScoreTable(playerPoints, computerPoints) {
    return `\n||Player: ${playerPoints}||\t\t||Computer: ${computerPoints}||\n`;
}

function disableButtons() {
    document.querySelectorAll('.button').forEach(button => button.setAttribute('disabled', true));
}

function playGame() {
    function playRound(playerSelection, computerSelection) {
        let roundResult = "";

        if ((playerSelection === 'Rock') && (computerSelection === 'Rock')) {
            roundResult = "Rock vs Rock. It's a tie!\n";
            return roundResult;
        } else if ((playerSelection === 'Rock') && (computerSelection === 'Paper')) {
            computerPoints++;
            roundResult = "Rock vs Paper. Sorry, you lose!\n";
            return roundResult;
        } else if((playerSelection === 'Rock') && (computerSelection === 'Scissors')){
            playerPoints++;
            roundResult = "Rock vs Scissors. You win! Woohoo!\n";
            return roundResult;
        } else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
            playerPoints++;
            roundResult = "Paper vs Rock. Your a winner! Yay!\n";
            return roundResult;
        } else if ((playerSelection === 'Paper') && (computerSelection === 'Paper')) {
            roundResult = "Paper vs Paper. It's a tie!\n";
            return roundResult;
        } else  if((playerSelection === 'Paper') && (computerSelection === 'Scissors')){
            computerPoints++;
            roundResult = "Paper vs Scissors. You lose! Bettter luck next time!\n";
            return roundResult;
        } else if((playerSelection === 'Scissors') && (computerSelection === 'Rock')) {
            computerPoints++;
            roundResult = "Scissors vs Rock. Oh no, you lose! Don't give up!\n";
            return roundResult;
        } else if((playerSelection === 'Scissors') && (computerSelection === 'Paper')) {
            playerPoints++;
            roundResult = "Scissors vs Paper. Congratulations, you win!\n";
            return roundResult;
        } else {
            roundResult = "Scissors vs Scissors. It's a tie.\n";
            return roundResult;
        }
    }


    let playerPoints = 0;
    let computerPoints = 0;

    const allButtons = document.querySelectorAll(".button");

    allButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const container = document.querySelector("#container");
            const table = document.createElement("p");
            const result = document.createElement("p");

            result.textContent = playRound(event.target.name, getComputerChoice());
            container.appendChild(result);

            table.textContent = displayScoreTable(playerPoints, computerPoints);
            container.appendChild(table);

            if (playerPoints === 5) {
                disableButtons();
                result.textContent = "\nYou are the winner!!!";
                container.appendChild(result);
            } else if(computerPoints === 5) {
                disableButtons();
                result.textContent = "\nSorry, the computer wins. Try Again!";
                container.appendChild(result);
            }
        })
    });
}

playGame();