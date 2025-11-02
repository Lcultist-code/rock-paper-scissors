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

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
