// get computer choice as rock or paper or scissors
function getComputerChoice() {
    // randomly generate 1 or 2 or 3
    let randomNumber = Math.floor((Math.random() * 3)) + 1;

    //return choices; rock for 1, paper for 2, scissors for 3
    if (randomNumber == 1) return "rock"
    else if (randomNumber == 2) return "paper"
    else return "scissors"
}

// get human choice as rock or paper or scissors
function getHumanChoice() {
    //get choice as string input
    let choice = prompt("What's your choice: Rock or Paper or Scissors?")
    // return the choice by making lowercased
    return choice.toLowerCase()
}

// initializes the score
let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") computerScore++
    else if (humanChoice == "rock" && computerChoice == "scissors") humanScore++
    else if (humanChoice == "paper" && computerChoice == "rock") humanScore++
    else if (humanChoice == "paper" && computerChoice == "scissors") computerScore++
    else if (humanChoice == "scissors" && computerChoice == "rock") computerScore++
    else if (humanChoice == "scissors" && computerChoice == "paper") humanScore++
    alert(`You chose ${humanChoice} and Computer chose ${computerChoice} \n Score: Computer: ${computerScore}  You: ${humanScore}`)
}
for (let i = 0; i <= 4; i++) {
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()

    playRound(humanSelection, computerSelection)
    if (i == 4 && humanScore == computerScore) {
        alert("It's a tie, so let's do a tie-breaker round:")
        i--
    }
}

if (humanScore > computerScore) alert("You are the Winner")
else if (computerScore > humanScore) alert("Computer is the Winner")
