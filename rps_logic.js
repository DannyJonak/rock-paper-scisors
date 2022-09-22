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

function updateDisplay(playerSelection, computerSelection, playerScore, computerScore) {

    const playerSelectionDisplay = document.querySelector('.player-selection');
    const computerSelectionDisplay = document.querySelector('.computer-selection');
    const playerScoreDisplay = document.querySelector('.player-score');
    const computerScoreDisplay = document.querySelector('.computer-score');

    playerSelectionDisplay.textContent = `${playerSelection}`;
    computerSelectionDisplay.textContent = `${computerSelection}`;
    playerScoreDisplay.textContent = `${playerScore}`;
    computerScoreDisplay.textContent = `${computerScore}`;
}

function isOver(playerScore, computerScore) {
    return (playerScore === 5) || (computerScore === 5);
}

function resetGame() {

    const playerSelectDisplay = document.querySelector('.player-selection');
    const computerSelectDisplay = document.querySelector('.computer-selection');
    const playerScoreDisplay = document.querySelector('.player-score');
    const computerScoreDisplay = document.querySelector('.computer-score');
    const choices = document.querySelector('.choices');

    while(choices.firstChild) {
        choices.removeChild(choices.firstChild);
    }
    
    playerSelectDisplay.textContent = '';
    computerSelectDisplay.textContent = '';
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
}

function endGame(playerScore, computerScore) {
    const choices = document.querySelector('.choices');
    while(choices.firstChild) {
        choices.removeChild(choices.firstChild);
    }
    choices.textContent = (playerScore > computerScore) ? 'You Win!' 
                                                        : (playerScore < computerScore) ? 'You Lose!' 
                                                        : "It's a Tie!";
}

function createChoiceButtons() {

    const choices = document.querySelector('.choices');

    const rock_btn = document.createElement('button');
    rock_btn.setAttribute('id', 'Rock');
    rock_btn.textContent = 'Rock';
    const paper_btn = document.createElement('button');
    paper_btn.setAttribute('id', 'Paper');
    paper_btn.textContent = 'Paper';
    const scissors_btn = document.createElement('button');
    scissors_btn.setAttribute('id', 'Scissors');
    scissors_btn.textContent = 'Scissors';

    choices.appendChild(rock_btn);
    choices.appendChild(paper_btn);
    choices.appendChild(scissors_btn);
}

function playGame() {

    playerScore = 0;
    computerScore = 0;

    createChoiceButtons();

    const rock_btn = document.querySelector('#Rock');
    const paper_btn = document.querySelector('#Paper');
    const scissors_btn = document.querySelector('#Scissors');

    rock_btn.addEventListener('click', () => {
        const playerSelection = 'Rock';
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result === 1) playerScore++;
        if (result === -1) computerScore++;
        updateDisplay(playerSelection, computerSelection, playerScore, computerScore);
        if (isOver(playerScore, computerScore)) endGame(playerScore, computerScore);
        
    });
    
    paper_btn.addEventListener('click', () => {
        const playerSelection = 'Paper';
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result === 1) playerScore++;
        if (result === -1) computerScore++;
        updateDisplay(playerSelection, computerSelection, playerScore, computerScore);
        if (isOver(playerScore, computerScore)) endGame(playerScore, computerScore);
    });
    
    scissors_btn.addEventListener('click', () => {
        const playerSelection = 'Scissors';
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result === 1) playerScore++;
        if (result === -1) computerScore++;
        updateDisplay(playerSelection, computerSelection, playerScore, computerScore);
        if (isOver(playerScore, computerScore)) endGame(playerScore, computerScore);
    });
}


let playerScore;
let computerScore;

const newGameBtn = document.querySelector('#new-game');
newGameBtn.addEventListener('click', () => {
    resetGame();
    playGame();
})