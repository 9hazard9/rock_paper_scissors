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

// Displays a simple table after every round
function scoreTable(playerPoints, computerPoints) {
    return console.log(`||Player: ${playerPoints}||\t\t||Computer: ${computerPoints}||`);
}

function playGame() {
    function playRound(playerSelection, computerSelection) {
        // A switch statement is used to provide unique string based on round result
        switch(playerSelection) {
            // Runs if player inputs 'rock'
            case 'rock':
                if (computerSelection === 'rock') {
                    console.log("Rock vs Rock. It's a tie!");
                    playerPoints++;
                    computerPoints++;
                } else if (computerSelection === 'paper') {
                    console.log("Rock vs Paper. Sorry, you lose!");
                    computerPoints++;
                } else {
                    console.log("Rock vs Scissors. You win! Woohoo!");
                    playerPoints++;
                }
                //Display score table
                scoreTable(playerPoints, computerPoints);
                break;
            // Runs if player inputs 'paper'
            case 'paper':
                if (computerSelection === 'rock') {
                    console.log("Paper vs Rock. Your a winner! Yay!");
                    playerPoints++;
                } else if (computerSelection === 'paper') {
                    console.log("Paper vs Paper. It's a tie!");
                    playerPoints++;
                    computerPoints++;
                } else {
                    console.log("Paper vs Scissors. You lose! Bettter luck next time!");
                    computerPoints++;
                }
                // Display score table
                scoreTable(playerPoints, computerPoints);
                break;
            // Runs if player inputs 'scissors'
            case 'scissors':
                if (computerSelection === 'rock') {
                    console.log("Scissors vs Rock. Oh no, you lose! Don't give up!");
                    computerPoints++;
                } else if(computerSelection === 'paper') {
                    console.log("Scissors vs Paper. Congratulations, you win!");
                    playerPoints++;
                } else {
                    console.log("Scissors vs Scissors. It's a tie");
                    playerPoints++;
                    computerPoints++;
                }
                //Display score table
                scoreTable(playerPoints, computerPoints);
                break;
        }
    }

    // Variable breaks out of while loop
    let continueGame = true;

    // Variables to keep track of score
    let playerPoints = 0;
    let computerPoints = 0;

    // Loop continues to initiate new rounds until player quits
    while(continueGame) {
        // Variables to break out of while loops
        let validChoice = true;
        let validContinue = true;

        // Initializes variable for player input
        let playerInput;

        // Loop checks for valid player input
        while(validChoice) {
            // Accepts player input and sets it to lower case
            playerInput = prompt("Enter your choice ('rock', 'paper', 'scissors'): ").toLowerCase();
            // The loop will continue until a valid input is provided
            (!((playerInput == 'rock') || (playerInput == 'paper') || (playerInput == 'scissors'))) ? alert("\n\nEnter a valid value!\n\n")
            : validChoice = false;
        }

        // Calls playRound function
        playRound(playerInput, getComputerChoice());

        // Loop checks for valid player input
        while(validContinue) {
             // Asks player if they wish to continue
            let continueInput = prompt("Would you like to play again ('y' or 'n')?:  ").toLowerCase();
            // Returns an alert if an invalid input is entered, else break the loop
            if(!((continueInput == 'y') || (continueInput == 'n'))) {
                alert("Enter a valid input ('y' or 'n')!");
            } else if(continueInput == 'y') {
                validContinue = false;
            } else {
                validContinue = false;
                continueGame = false;
            }
        }
    }
}

// Greeting for each new game
console.log("Welcome to Rock, Paper, Scissors! \n\n");

// Calls main function
playGame();