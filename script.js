// get computer choice as rock or paper or scissors
function getComputerChoice() {
    // randomly generate 1 or 2 or 3
    let randomNumber = Math.floor((Math.random() * 3))

    //return choices; rock for 1, paper for 2, scissors for 3
    switch (randomNumber) {
        case 0: return "Rock"
        case 1: return "Paper"
        case 2: return "Scissors"
    }
}

// get human choice as rock or paper or scissors
function getHumanChoice() {
    //get choice as string input
    let choice = prompt("What's your choice: Rock or Paper or Scissors?")
    // return the choice by making lowercased and capitalized
    let firstChar = choice.charAt(0)
    firstChar = firstChar.toUpperCase()
    choice = choice.toLowerCase().substring(1)
    choice = firstChar + choice;
    return choice
}

    // initializes the score
    let humanScore = 0
    let computerScore = 0

function playRound(humanChoice, computerChoice) {
    // record the initial score for later showing results accordingly
    let initialComputerScore = computerScore;
    let initialHumanScore = humanScore;

    // increment score according to choices
    if (humanChoice == "Rock" && computerChoice == "Paper") computerScore++
    if (humanChoice == "Rock" && computerChoice == "Scissors") humanScore++
    if (humanChoice == "Paper" && computerChoice == "Rock") humanScore++
    if (humanChoice == "Paper" && computerChoice == "Scissors") computerScore++
    if (humanChoice == "Scissors" && computerChoice == "Rock") computerScore++
    if (humanChoice == "Scissors" && computerChoice == "Paper") humanScore++

    // show result of the round
    if (computerScore > initialComputerScore) alert(`You Lose! ${computerChoice} beats ${humanChoice}.\nScore: You: ${humanScore} Computer: ${computerScore}`)
    if (humanScore > initialHumanScore) alert(`You Won! ${humanChoice} beats ${computerChoice}.\nScore: You: ${humanScore} Computer: ${computerScore}`)
    if (computerScore == initialHumanScore && humanScore == initialHumanScore) alert(`It's a Tie.\nScore: You: ${humanScore} Computer: ${computerScore}`)
}
function playGame() {

    for (let i = 0; i <= 4; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)

        //make a tie-breaker round in case if tie by decreasing the value of i
        if (i == 4 && humanScore == computerScore) i--
    }
    if (humanScore > computerScore) alert("You are the Winner")
    else if (computerScore > humanScore) alert("Computer is the Winner")
}

playGame();


