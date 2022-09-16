function getComputerChoice() {

    //get a random number between 0 and 1 to use as a guess
    let guessNum = Math.random();

    //convert the random number guess into one of rock, paper, or scissors depending on its size
    if (guessNum < 1/3) {
        return "rock";
    } else if (guessNum >= 1/3 && guessNum < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    //returns winner of playerSelection and computerSelection in a game of rock paper scissors

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1, playerSelection.length).toLowerCase();

    if (playerSelection === computerSelection) {
        return 0;
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        return -1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return 1;
    } else if (playerSelection < computerSelection) {
        return 1;
    } else {
        return -1;
    }
}

function getPlayerSelection() {
    //prompt user to choose rock, paper or scissors. Format their response with all lowercase letters.
    let playerSelection = prompt("Choose rock, paper, or scissors!").toLowerCase();
    return playerSelection;
}

function game() {
    
}