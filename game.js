let player_score = 0;
let computer_score = 0;
let roundsPlayed = 0;


//Write a function that randomly returns 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomInd = Math.floor(Math.random() * choices.length);
    return choices[randomInd];
}

//Update player_score vs computer_score on the scoreboard
function updateScoreBoard() {
    document.getElementById("player_score").textContent = player_score;
    document.getElementById("computer_score").textContent = computer_score;
}

// Write a function that plays a single round of the game. It updates scores accordingly
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
                    computer_score++;
                    updateScoreBoard();
                    return "You Lose! Paper covers Rock";
                } else {
                    player_score++;
                    updateScoreBoard();
                    return "You Win! Rock smashes Scissors";
                }
            case "PAPER":
                if (computerSelectionCap === "ROCK") {
                    player_score++;
                    updateScoreBoard();
                    return "You Win! Paper covers Rock";
                } else {
                    computer_score++;
                    updateScoreBoard();
                    return "You Lose! Scissors cut Paper";
                }
            case "SCISSORS":
                if (computerSelectionCap === "ROCK") {
                    computer_score++;
                    updateScoreBoard();
                    return "You Lose! Rock smashes Scissors";
                } else {
                    player_score++;
                    updateScoreBoard();
                    return "You Win! Scissors cut Paper";
                }
            default:
                return "Invalid Selection";
        } 
    } 
}  

//Update the results display when called and removes round win/lose messages at end of game
function updateResultDisplay (result) {
    let resultDisplay = document.getElementById('resultDisplay');
    resultDisplay.textContent = result;
    if (player_score === 5 || computer_score === 5) {
        document.getElementById("resultDisplay").style.display = "none";
        document.getElementById("scoreBoard").style.display = "none";
    }
}

//Allows clickable images, calls updateResultsDisplay/displayWinner functions
const selectionImages = document.querySelectorAll('.selection');
selectionImages.forEach(image => {
    image.addEventListener('click', function() {
        const playerSelection = this.getAttribute('data-choice');
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        updateResultDisplay(result);
        displayWinner();
    });
});

//Display message at end of game
function displayWinner() {
    let winnerDisplay = document.getElementById("winnerDisplay");
    if (player_score === 5 && player_score > computer_score) {
        winnerDisplay.textContent = "You won the game!";
    } else if (computer_score === 5 && player_score < computer_score) {
        winnerDisplay.textContent = "You lost the game!";
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

