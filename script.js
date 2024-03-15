// Randomly returns either 'rock', 'paper', 'scissors'
function getComputerChoice() {
    // Array holding all possible computer choices
    const choices = ['rock', 'paper', 'scissors'];
    // Math.random() gets random number between(0-1, 1 exclusive)
    // The number from Math.random() is multiplied by the array length to get the numbers between(0-3)
    // Math.floor() gets the index ranging from(0 to arrayLength-1)
    let rand = choices[(Math.floor(Math.random() * choices.length))];
    return console.log(rand);
}

getComputerChoice();