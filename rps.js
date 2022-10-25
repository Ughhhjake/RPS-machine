console.log("test")

function getPlayerChoice() {
  let randomWord = prompt("What is your selection *cap first letter no punctuation*");

  if (randomWord == "Rock") {
  console.log("Player has selected Rock.")
  return "Rock"
} else if (randomWord == "Paper") {
  console.log("Player has selected Paper.")
  return "Paper"
} else if (randomWord == "Scissors") {
  console.log("Player has selected Scissors.")
  return "Scissors"
} else {
  alert("Bro.")
  console.log("Bro, thats not an option.")
}
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);
   if (randomNumber == 1) {
     console.log("Paper")
     return "Paper"
   } else if (randomNumber == 2) {
     console.log("Rock")
     return "Rock"
   } else if (randomNumber == 3) {
     console.log("Scissors")
     return "Scissors"
   }
}

let playerSelection = getPlayerChoice();
console.log(playerSelection + " this is player select");
let computerSelection = getComputerChoice();
console.log(computerSelection + " this is computer select");

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock" && computerSelection == "Rock" ||
      playerSelection == "Scissors" && computerSelection == "Scissors" ||
      playerSelection == "Paper" && computerSelection == "Paper") {
    console.log("Tie, unlucky fam.");
  } else if (playerSelection == "Rock" && computerSelection == "Paper" ||
             playerSelection == "Paper" && computerSelection == "Scissors" ||
             playerSelection == "Scissors" && computerSelection == "Rock") {
    console.log("Computer Wins. " + computerSelection + " beats " + playerSelection)
  } else if (playerSelection == "Rock" && computerSelection == "Scissors" ||
             playerSelection == "Paper" && computerSelection == "Rock" ||
             playerSelection == "Scissors" && computerSelection == "Paper") {
    console.log("Player Wins. " + playerSelection + " beats " + computerSelection)
  }
}


console.log(playRound(playerSelection, computerSelection));
