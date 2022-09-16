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
        return 0;
    }
    if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return -1;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return 1;
    } else if (playerSelection < computerSelection) {
        return 1;
    } else {
        return -1;
    }
}



function game() {
    for (let i = 0; i < 5; i++) {
        //get computer and player choices
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Choose rock, paper, or scissors!");
    }
}