function getHumanChoice(choice) {
    return choice;
}

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let choice;

    if (randomNum===0) choice = "rock";
    else if (randomNum===1) choice = "paper";
    else if (randomNum===2) choice = "scissor";

    return choice;
}

function playRound() {
    let humanChoice = getHumanChoice(yourChoice);
    console.log(humanChoice);
    let yourMove = document.querySelector(".yourMoveText");
    yourMove.textContent = capitalize(humanChoice);

    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    let cpuMove = document.querySelector(".cpuMoveText");
    cpuMove.textContent = capitalize(computerChoice);

    const resultText = document.querySelector(".resultMessage");

    if (computerChoice===humanChoice) {resultText.textContent="It's a draw"}
    else if (computerChoice==="rock" && humanChoice==="paper") {++humanScore; resultText.textContent="Paper wins!"}
    else if (computerChoice==="rock" && humanChoice==="scissor") {++computerScore; resultText.textContent="Rock beats Scissors!"}
    else if (computerChoice==="paper" && humanChoice==="rock") {++computerScore; resultText.textContent="Paper wraps Rocks!"}
    else if (computerChoice==="paper" && humanChoice==="scissor") {++humanScore; resultText.textContent="Scissor cuts Paper!"}
    else if (computerChoice==="scissor" && humanChoice==="rock") {++humanScore; resultText.textContent="Rock breaks Scissors!"}
    else if (computerChoice==="scissor" && humanChoice==="paper") {++computerScore; resultText.textContent="Scissor wins!"}
    else resultText.textContent="Something went wrong!";
}

function displayScore() {
    console.log(`Computer: ${computerScore}`);
    const cpuScore = document.querySelector(".cpuScoreText");
    cpuScore.textContent = computerScore;
    console.log(`Your Score: ${humanScore}`);
    const yourScore = document.querySelector(".yourScoreText");
    yourScore.textContent = humanScore;
}

function checkGame() {

    if (humanScore===5 || computerScore===5) {

        const resultText = document.querySelector(".resultMessage");
    
        if (humanScore>computerScore) {resultText.textContent="You won! GAME OVER";
            resultText.style.backgroundColor = "greenyellow";
        }
        else if (humanScore<computerScore) {resultText.textContent="You lose! GAME OVER";
            resultText.style.backgroundColor = "red";
        }
        else resultText.textContent="Something went wrong!";
    
    }
}

function resetGame() {
    const resultText = document.querySelector(".resultMessage");

    if (humanScore===5 || computerScore===5) {
        humanScore=0;
        computerScore=0;
        resultText.style.backgroundColor = "rgb(185, 255, 250)";
        
    }
}

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
    yourChoice = "rock";
    resetGame();
    playRound();
    displayScore();
    checkGame();
})

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
    yourChoice="paper";
    resetGame();
    playRound();
    displayScore();
    checkGame();
})

const scissorButton = document.querySelector("#scissor");
scissorButton.addEventListener("click", () => {
    yourChoice="scissor";
    resetGame();
    playRound();
    displayScore();
    checkGame();
})

humanScore=0;
computerScore=0;

// if (humanScore===5 || computerScore===5) {

//     const endText = document.querySelector(".endMessage");

//     if (humanScore>computerScore) {endText.textContent="You won motherfucker!"}
//     else if (humanScore<computerScore) {endText.textContent="You lose Nigga!"}
//     else endText.textContent="Something went wrong!";

//     restartGame();
// }
function capitalize(string) {
    firstLetter = string.charAt(0).toUpperCase();
    return firstLetter+string.substr(1);
}