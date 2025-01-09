function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let choice;

    if (randomNum===0) choice = "rock";
    else if (randomNum===1) choice = "paper";
    else if (randomNum===2) choice = "scissor";

    return choice;
}

function getHumanChoice(choice) {
    return choice;
}

function displayScore() {
    console.log(`Computer: ${computerScore}`);
    const cpuScore = document.querySelector(".cpuScoreText");
    cpuScore.textContent = computerScore;
    console.log(`Your Score: ${humanScore}`);
    const yourScore = document.querySelector(".yourScoreText");
    yourScore.textContent = humanScore;
}


function playRound(computerChoice, humanChoice) {
    humanChoice = getHumanChoice();
    console.log(humanChoice);
    const yourMove = document.querySelector(".yourMoveText");
    yourMove.textContent = humanChoice;

    computerChoice = getComputerChoice();
    console.log(computerChoice);
    const cpuMove = document.querySelector(".cpuMoveText");
    cpuMove.textContent = computerChoice;

    if (computerChoice===humanChoice) {console.log("It's a draw")}
    else if (computerChoice==="rock" && humanChoice==="paper") {humanScore++; console.log("Paper wins!")}
    else if (computerChoice==="rock" && humanChoice==="scissor") {computerScore++; console.log("Rock beats Scissors!")}
    else if (computerChoice==="paper" && humanChoice==="rock") {computerScore++; console.log("Paper wraps Rocks!")}
    else if (computerChoice==="paper" && humanChoice==="scissor") {humanScore++; console.log("Scissor cuts Paper!")}
    else if (computerChoice==="scissor" && humanChoice==="rock") {humanScore++; console.log("Rock breaks Scissors")}
    else if (computerChoice==="scissor" && humanChoice==="paper") {computerScore++; console.log("Scissor wins!")}
    else console.log("Something went wrong!");
}

function playGame() {

    humanScore = 0;
    computerScore = 0;

    for (let i=0; i<5; i++) {
        playRound();
        displayScore();
    }

    if (humanScore===computerScore) {console.log("It's a fucking draw!")}
    else if (humanScore>computerScore) {console.log("You won motherfucker!")}
    else if (humanScore<computerScore) {console.log("You lose Nigga!")}
    else console.log("Something went wrong!");

}

// playGame();

const btn = document.querySelector(".buttons");
btn.addEventListener("click", (event) => {
    const target = event.target;
    
    switch(target.id) {
        case 'rock':
            getHumanChoice("rock");
            break;
        case 'paper':
            getHumanChoice("paper");
            break;
        case 'scissor':
            getHumanChoice("scissor");
            break;
    }
});

