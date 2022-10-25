console.log("test")

function getPlayerChoice() {
  let randomWord = prompt("What is your selection *no caps or punctuation*");

  if (randomWord == "rock") {
  console.log("Player has selected Rock.")
  return "rock"
} else if (randomWord == "paper") {
  console.log("Player has selected Paper.")
  return "paper"
} else if (randomWord == "scissors") {
  console.log("Player has selected Scissors.")
  return "scissors"
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
  if (playerSelection == "rock" && computerSelection == "Rock") {
    console.log("Tie, unlucky fam.")
  }
}

console.log(playRound(playerSelection, computerSelection));
