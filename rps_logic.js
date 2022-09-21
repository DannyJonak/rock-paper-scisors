function getComputerChoice() {

    //get a random number between 0 and 1 to use as a guess
    let guessNum = Math.random();

    //Convert the random number guess into one of rock, paper, or scissors depending on which third of [0,1) it falls into.
    //This should make the probability of choosing each option about 1/3.
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
        console.log(0);
        return 0;
    }
    if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log(-1);
        return -1;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log(1);
        return 1;
    } else if (playerSelection < computerSelection) {
        console.log(1)
        return 1;
    } else {
        console.log(-1);
        return -1;
    }
}

const rock_btn = document.querySelector('#Rock');
const paper_btn = document.querySelector('#Paper');
const scissors_btn = document.querySelector('#Scissors');

rock_btn.addEventListener('click', () => {
    const playerSelection = 'Rock';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

paper_btn.addEventListener('click', () => {
    const playerSelection = 'Paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

scissors_btn.addEventListener('click', () => {
    const playerSelection = 'Scissors';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});






// function getPlayerSelection() {

//     //use while loop to keep prompting user for a choice if their previous choice is invalid i.e. not one of rock, paper, or scissors
//     while(true) {
//         let playerSelection = prompt("Choose rock, paper, or scissors!");
//         //format playerSelection with only the first letter capitalized
//         playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1, playerSelection.length).toLowerCase();

//         //return if player made a valid choice
//         if (playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissors") {
//             return playerSelection;
//         }
//     }
// }

// function game() {

//     let playerScore = 0;
//     let computerScore = 0;

//     //play 5 rounds of rock paper scissors
//     for (let i = 0; i < 5; i++) {

//         //get computer and player choices
//         let computerSelection = getComputerChoice();
//         let playerSelection = getPlayerSelection();
        
//         let roundOutcome = playRound(playerSelection, computerSelection);
//         console.log(`You chose: ${playerSelection}, Computer chose: ${computerSelection}`)

//         if (!roundOutcome) {
//             console.log("This round is a tie!");
//         } else if (roundOutcome === 1) {
//             console.log("You win this round!");
//             playerScore += 1;
//         } else {
//             console.log("You lose this round!");
//             computerScore += 1;
//         }

//         console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
//     }
//     //find overall winner
//     console.log("Game Over!");
//     return ((playerScore > computerScore) ? "You Win!"
//             : (playerScore < computerScore) ? "You Lose!"
//             : "Tie!");
// }