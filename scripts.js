function getComputerChoice() {
    
    let randomChoice = Math.floor(Math.random()*3);
    
    switch (randomChoice) {
        case 0: return "rock";
        break;
        case 1: return "paper";
        break;
        case 2: return "scissors";
        break;
        default: return "error";
    }
}

function getHumanChoice() {
    
    let humanChoice = window.prompt("Choose Rock, Paper or Scissors", "Default").toLowerCase() ;
    const validChoices = ["rock", "paper","scissors"];
    if (validChoices.includes(humanChoice) )
    {return humanChoice.toLocaleLowerCase();}
    return "default";

}

let humanScore = 0;
let computerScore = 0;



function getRoundResult(humanInput, computerInput) {
    
    if (humanInput === "default") {
        return "Computer";
    }

    if (humanInput === computerInput) {
        return "Tie";
    }

    if ((humanInput == "paper" && computerInput == "scissors") ||
        (humanInput == "scissors" && computerInput == "rock") ||
        (humanInput == "rock" && computerInput == "paper") )
        return "Computer";
    else return "Human";

}

function updateScores(roundWinner) {
    switch (roundWinner) {
        case "Human": 
            humanScore +=1;
            break;
        case "Computer":
            computerScore +=1;
            break;
        default:
            break;
    }
}

function resultMessage(roundWinner) {
    switch (roundWinner) {
        case "Human": 
            return "You Won!!";
            break;
        case "Computer":
            return "You Lost!!";
            break;
        default:
            return "It's a Tie!!    "
            break;
    }
}

function playRound() {
    let computerInput = getComputerChoice();
    let humanInput = getHumanChoice("Choose rock, paper or scissors.\nNote: Any other choice is your loss.");
    let result = getRoundResult(humanInput, computerInput);
    updateScores(result);
    console.log(resultMessage(result)+` Computer chose ${computerInput} and you chose ${humanInput}.
    Current score: Player ${humanScore}, Computer ${computerScore}`);
}

playRound();
playRound();
playRound();
playRound();
playRound();

