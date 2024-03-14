//Write a function that randomly returns 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomInd = Math.floor(Math.random() * choices.length);
    return choices[randomInd];
}

/* Write a function that plays a single round of the game.
Should have wo parameters: the playerSelection and computerSelection
Return a string for winner/tie like so: "You Lose! Paper beats Rock"
playerSelection parameter should be case-insensitive 
Return results of function call, not console.log() them. */
function playRound(playerSelection, computerSelection) {
    let playerSelectionCap = playerSelection.toUpperCase();
    let computerSelectionCap = computerSelection.toUpperCase();
//In case of tie goes first
    if (playerSelectionCap == computerSelectionCap) {
        return "You Tie!";
    } else {
        switch (playerSelectionCap) {
            case "ROCK":
                switch (computerSelectionCap) {
                    case "PAPER":
                    return "You Lose! Paper covers Rock";
                    case "SCISSORS":
                    return "You Win! Rock smashes Scissors";
                    default:
                    return "Invalid selection";
                }
                break;

            case "PAPER":
                switch (computerSelectionCap) {
                    case "ROCK":
                    return "You Win! Paper covers Rock";
                    case "SCISSORS":
                    return "You Lose! Scissors cut Paper";
                    default:
                    return "Invalid selection";
                }
                break;

            case "SCISSORS":
                switch (computerSelectionCap) {
                    case "ROCK":
                    return "You Lose! Rock smashes Scissors";
                    case "PAPER":
                    return "You Win! Scissors cut Paper";
                    default:
                    return "Invalid selection";
                }
                break;

            default:
            return "Invalid Selection";
        }
    }
}

//Write a function to call the playRound function 5x, keep score, and report a winner/loser
    let player_score = 0;
    let computer_score = 0;
    




//Write a function to update the result display
function updateResultDisplay (result) {
    let resultDisplay = document.getElementById('resultDisplay');
    resultDisplay.textContent = result;
}

const selectionImages = document.querySelectorAll('.selection');
selectionImages.forEach(image => {
    image.addEventListener('click', function() {
        const playerSelection = this.getAttribute('data-choice');
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        updateResultDisplay(result);
    });
});

//Add buttons in place of a prompt and add event listeners for each
let rock = document.createElement("button");
rock.textContent = "Rock";
let paper = document.createElement("button");
paper.textContent = "Paper";
let scissors = document.createElement("button");
scissors.textContent = "Scissors";

rock.addEventListener("click", function () {
    console.log("Rock button clicked");
    let result = playRound("ROCK", getComputerChoice());
    console.log("Result: ", result);
    updateResultDisplay(result); 
});

paper.addEventListener("click", function () {
    console.log("Paper button clicked");
    let result = playRound("PAPER", getComputerChoice());
    console.log("Result: ", result);
    updateResultDisplay(result);
});

scissors.addEventListener("click", function () {
    console.log("Scissors button clicked");
    let result = playRound("SCISSORS", getComputerChoice());
    console.log("Result: ", result);
    updateResultDisplay(result); 
});

console.log("Rock button:", rock);
console.log("Paper button:", paper);
console.log("Scissors button:", scissors);

