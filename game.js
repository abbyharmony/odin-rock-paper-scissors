let player_score = 0;
let computer_score = 0;
let roundsPlayed = 0;
const totalRounds = 5;

//Write a function that randomly returns 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomInd = Math.floor(Math.random() * choices.length);
    return choices[randomInd];
}

function updateScoreboard() {
    document.getElementById("player_score").textContent = player_score;
    document.getElementById("computer_score").textContent = computer_score;
}

// Write a function that plays a single round of the game.
function playRound(playerSelection, computerSelection) {
    roundsPlayed++;
    let playerSelectionCap = playerSelection.toUpperCase();
    let computerSelectionCap = computerSelection.toUpperCase();
    
    if (playerSelectionCap === computerSelectionCap) {
        return "You Tie!";
    } else {
        switch (playerSelectionCap) {
            case "ROCK":
                if (computerSelectionCap === "PAPER") {
                    computer_score++
                    updateScoreboard()
                    document.addEventListener("DOMContentLoaded", )
                    return "You Lose! Paper covers Rock";
                } else {
                    player_score++
                    updateScoreboard()
                    return "You Win! Rock smashes Scissors";
                }
            case "PAPER":
                if (computerSelectionCap === "ROCK") {
                    player_score++
                    updateScoreboard()
                    return "You Win! Paper covers Rock";
                } else {
                    computer_score++
                    updateScoreboard()
                    return "You Lose! Scissors cut Paper";
                }
            case "SCISSORS":
                if (computerSelectionCap === "ROCK") {
                    computer_score++
                    updateScoreboard()
                    return "You Lose! Rock smashes Scissors";
                } else {
                    player_score++
                    updateScoreboard()
                    return "You Win! Scissors cut Paper";
                }
            default:
                return "Invalid Selection";
        } 
    } 

}  

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

        if (roundsPlayed === totalRounds) {
            displayWinner();
        }
    });
});

function displayWinner() {
    let winnerDisplay = document.getElementById("winnerDisplay");
    if (player_score > computer_score) {
        winnerDisplay.textContent = "You win the game!";
    } else if (player_score < computer_score) {
        winnerDisplay.textContent = "Computer wins the game!";
    } else {
        winnerDisplay.textContent = "You tied!";
    }
}

//Add buttons in place of a prompt and add event listeners for each
let rock = document.createElement("button");
rock.textContent = "Rock";

let paper = document.createElement("button");
paper.textContent = "Paper";

let scissors = document.createElement("button");
scissors.textContent = "Scissors";

//Add event listeners to prompt the display results from each round
rock.addEventListener("click", function () {
    let result = playRound("ROCK", getComputerChoice());
    updateResultDisplay(result); 
});

paper.addEventListener("click", function () {
    let result = playRound("PAPER", getComputerChoice());
    updateResultDisplay(result);
});

scissors.addEventListener("click", function () {
    let result = playRound("SCISSORS", getComputerChoice());
    updateResultDisplay(result); 
});

