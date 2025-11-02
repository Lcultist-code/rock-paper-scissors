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

console.log(getComputerChoice());
console.log(getHumanChoice());
