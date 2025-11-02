function getComputerChoice() {
    x=Math.floor(Math.random()*3);
    if (x<1){
        return "rock";

    }
    else if (x<2){
        return "paper";
    }
    else if (x<3){
        return "scissors";
    }
}

//Making a human choice simulator by prompting the user
function getHumanChoice() {
    let userInput = prompt("Choose rock, paper, or scissors:");
    userInput = userInput.toLowerCase();
    return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
             (humanChoice === "paper" && computerChoice === "rock") ||
             (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playGame() {
    let i=0;
    while (i<5){
        const result = playRound(humanChoice, computerChoice);
        console.log(result);
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);  
        i++;
    }
    if (humanScore > computerScore){
        console.log("Congratulations! You won the game!");
    }
    else if (computerScore > humanScore){
        console.log("Sorry! The computer won the game.");
    }
    else {
        console.log("The game is a tie!");
    }




}