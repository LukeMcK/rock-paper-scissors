function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie Game!";
  } else {
    if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
      }
      if (computerSelection === "scissors") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
      }
    }
    if (playerSelection === "paper") {
      if (computerSelection === "scissors") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
      }
      if (computerSelection === "rock") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
      }
    }
    if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
      }
      if (computerSelection === "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
      }
    }
  }
}

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return choices[index];
}

const playerSelection = prompt(
  "Please type Rock, Paper, or Scissors"
).toLowerCase();

console.log("Player Selection: " + playerSelection);
const computerSelection = computerPlay();

console.log("Computer Selection: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
