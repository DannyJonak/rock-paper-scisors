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

function getPlayerSelection() {

    //ask player to provide a choice until a valid choice is provided
    while(true) {
        //prompt user to choose rock, paper or scissors. Format their response with all lowercase letters.
        let playerSelection = prompt("Choose rock, paper, or scissors!");
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1, playerSelection.length).toLowerCase();

        //check that player entered a valid choice and return choice if valid
        if (playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissors") {
            return playerSelection;
        }
    }
}

function game() {

    //initialize variables to keep track of player/computer scores
    let playerScore = 0;
    let computerScore = 0;

    //play 5 rounds
    for (let i = 0; i < 5; i++) {

        //get computer and player choices
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerSelection();
        
        //find winner between player and computer
        let roundOutcome = playRound(playerSelection, computerSelection);

        console.log(`You chose: ${playerSelection}, Computer chose: ${computerSelection}`)

        if (!roundOutcome) {
            console.log("This round is a tie!");
        } else if (roundOutcome === 1) {
            console.log("You win this round!");
            playerScore += 1;
        } else {
            console.log("You lose this round!");
            computerScore += 1;
        }
        //show current score
        console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
    }
    //get total score and find overall winner
    console.log("Game Over!");
    return ((playerScore > computerScore) ? "You Win!"
            : (playerScore < computerScore) ? "You Lose!"
            : "Tie!");
}