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
function playGame(playRound) {
    let player_score = 0;
    let computer_score = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter Rock, Paper, or Scissors:");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
    
        console.log(result);

        if (result.includes("Win")) {
            player_score++;
        } else if (result.includes("Lose")) {
            computer_score++;
        }
    }

    if (player_score > computer_score) {
        console.log(`You Win the Game!`)
    } else if (player_score < computer_score) {
        console.log(`You Lose the Game!`)
    } 
}

playGame(playRound);