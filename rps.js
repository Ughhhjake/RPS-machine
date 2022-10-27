function getPlayerChoice() {
  let randomWord = prompt("Rock, Paper, or Scissors");
  const playerWord = randomWord.toLowerCase();

  if (playerWord == "rock") {
  console.log("Player has selected Rock.")
  return "Rock"
} else if (playerWord == "paper") {
  console.log("Player has selected Paper.")
  return "Paper"
} else if (playerWord == "scissors") {
  console.log("Player has selected Scissors.")
  return "Scissors"
} else {
  alert("Bruh, L selection.")
  console.log("Bro, thats not an option.")
}
}


function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  //console.log(randomNumber);
   if (randomNumber == 0) {
     console.log("Paper")
     return "Paper"
   } else if (randomNumber == 1) {
     console.log("Rock")
     return "Rock"
   } else if (randomNumber == 2) {
     console.log("Scissors")
     return "Scissors"
   }
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection == "Rock" && computerSelection == "Rock" ||
      playerSelection == "Scissors" && computerSelection == "Scissors" ||
      playerSelection == "Paper" && computerSelection == "Paper") {
    console.log("Tie, unlucky fam.");
    return "tie";

  } else if (playerSelection == "Rock" && computerSelection == "Paper" ||
             playerSelection == "Paper" && computerSelection == "Scissors" ||
             playerSelection == "Scissors" && computerSelection == "Rock") {
    console.log("Computer Wins. " + computerSelection + " beats " + playerSelection);
  //  computerScore++;
    return "computer";

  } else if (playerSelection == "Rock" && computerSelection == "Scissors" ||
             playerSelection == "Paper" && computerSelection == "Rock" ||
             playerSelection == "Scissors" && computerSelection == "Paper") {
    console.log("Player Wins. " + playerSelection + " beats " + computerSelection);
  //  playerScore++;
    return "player";
  }
}

function game() {
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 0; i < 5; i++) {
   let playerSelection = getPlayerChoice();
   let computerSelection = getComputerChoice();
   let winner = playRound(playerSelection, computerSelection);
        if (winner == "player") {
          playerScore++;
      } if (winner == "computer") {
          computerScore++;
      }
      console.log(playerScore + " player wins and " + computerScore + " computer wins.")
      console.log("---------")

  }
     if (playerScore > computerScore) {
       console.log("Player has won!")
     } if (computerScore > playerScore) {
       console.log("Computer has won.")
     } if (playerScore == computerScore) {
       console.log("That's a draw!")
     }
}

game();
console.log("Game Over.")
