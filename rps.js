
function getPlayerChoice() {
  let randomWord = prompt("What is your selection *cap first letter no punctuation*");
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
  console.log(randomNumber);
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


//let playerSelection = getPlayerChoice();
//console.log(playerSelection + " this is player select");
//let computerSelection = getComputerChoice();
//console.log(computerSelection + " this is computer select");



function playRound(playerSelection, computerSelection) {


  if (playerSelection == "Rock" && computerSelection == "Rock" ||
      playerSelection == "Scissors" && computerSelection == "Scissors" ||
      playerSelection == "Paper" && computerSelection == "Paper") {
    console.log("Tie, unlucky fam.");
    return "unlucky brother";

  } else if (playerSelection == "Rock" && computerSelection == "Paper" ||
             playerSelection == "Paper" && computerSelection == "Scissors" ||
             playerSelection == "Scissors" && computerSelection == "Rock") {
    console.log("Computer Wins. " + computerSelection + " beats " + playerSelection);
    return "computer dub";


  } else if (playerSelection == "Rock" && computerSelection == "Scissors" ||
             playerSelection == "Paper" && computerSelection == "Rock" ||
             playerSelection == "Scissors" && computerSelection == "Paper") {
    console.log("Player Wins. " + playerSelection + " beats " + computerSelection);
    return "player dub";

  }
}

function game() {
  for (let i = 0; i < 5; i++) {
   let playerSelection = getPlayerChoice();
   let computerSelection = getComputerChoice();
   playRound(playerSelection, computerSelection);
   console.log("---------")
  }
}

game();
console.log("Game Over.")

//console.log(playRound(playerSelection, computerSelection));
