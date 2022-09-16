function getComputerChoice() {

    //get a random number between 0 and 1 to use as a guess
    let guessNum = Math.random();

    //convert the random number guess into one of rock, paper, or scissors depending on its size
    if (guessNum < 1/3) {
        return "Rock";
    } else if (guessNum >= 1/3 && guessNum < 2/3) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    //returns winner of playerSelection and computerSelection in a game of rock paper scissors

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1, playerSelection.length).toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper.";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win! Paper beats Scissors."
    } else if (playerSelection < computerSelection) {
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}
