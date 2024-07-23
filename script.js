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

// initializes the score
let humanScore = 0
let computerScore = 0

function playRound(e) {
    // this is done to reset(in DOM) the score of both human and computer to 0 after a full game is played and another is started.
    human.textContent = humanScore;
    computer.textContent = computerScore;

    //these variable had been used for later purposes to check who have won the round
    let initialComputerScore = computerScore;
    let initialHumanScore = humanScore;


    let humanChoice = e.target.getAttribute('data-choice');
    let computerChoice = getComputerChoice();

    // increment score according to choices
    if (humanChoice == "Rock" && computerChoice == "Paper") computerScore++
    if (humanChoice == "Rock" && computerChoice == "Scissors") humanScore++
    if (humanChoice == "Paper" && computerChoice == "Rock") humanScore++
    if (humanChoice == "Paper" && computerChoice == "Scissors") computerScore++
    if (humanChoice == "Scissors" && computerChoice == "Rock") computerScore++
    if (humanChoice == "Scissors" && computerChoice == "Paper") humanScore++

    // show result of the round
    if (computerScore > initialComputerScore) {
        result.textContent = `Computer's ${computerChoice} defeated your ${humanChoice}.`;
    }
    else if (humanScore > initialHumanScore) {
        result.textContent = `Your ${humanChoice} defeated Computer's ${computerChoice}.`;
    }
    else if (computerScore == initialComputerScore && humanScore == initialHumanScore) {
        result.textContent = `It's a Tie. Both chose ${(humanChoice || computerChoice)}.`;
    }

    human.textContent = humanScore;
    computer.textContent = computerScore;

    if (humanScore == 5 || computerScore == 5) {
        if (humanScore == 5) {
            result.textContent = `You won the game. Click any option to Replay.`;
        }
        else if (computerScore == 5) {
            result.textContent = `You lose the game. Click any option to Replay.`;
        }
        humanScore = 0;
        computerScore = 0;

    }
}

const human = document.querySelector('.humanScore span');
const computer = document.querySelector('.computerScore span');
const result = document.querySelector('.result');

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);


