let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return choices[index];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Tie Game!");
  } else {
    if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
      }
      if (computerSelection === "scissors") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
      }
    }
    if (playerSelection === "paper") {
      if (computerSelection === "scissors") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
      }
      if (computerSelection === "rock") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
      }
    }
    if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
      }
      if (computerSelection === "paper") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
      }
    }
  }
}

function game() {
  let count = 0;
  while (count < 5) {
    playerSelection = prompt(
      "Please type Rock, Paper, or Scissors"
    ).toLowerCase();
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    count++;
  }
  if (playerScore === computerScore) {
    return "Tie Game After 5 Rounds!";
  } else {
    if (playerScore > computerScore) {
      return `You win ${playerScore} to ${computerScore}`;
    }
    return `You lose ${computerScore} to ${playerScore}`;
  }
}

console.log(game());
