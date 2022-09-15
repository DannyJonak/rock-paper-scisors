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

