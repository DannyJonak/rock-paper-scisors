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

    //ask player to provide a choice until a valid choice is provided
    while(true) {
        //prompt user to choose rock, paper or scissors. Format their response with all lowercase letters.
        let playerSelection = prompt("Choose rock, paper, or scissors!").toLowerCase();

        //check that player entered a valid choice and return choice if valid
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
            return playerSelection;
        }
    }
}

function game() {

    //initialize variables to keep track of player/computer scores
    let playerScore = 0;
    let computerScore = 0;

    //play 5 games
    for (let i = 0; i < 5; i++) {

        //get computer and player choices
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerSelection();
        
    }
}