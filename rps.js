console.log("test")
let randomWord = prompt("What is your selection *no caps or punctuation*");

function getPlayerChoice() {
} if (randomWord == "rock") {
  console.log("Player has selected Rock.")
} else if (randomWord == "paper") {
  console.log("Player has selected Paper.")
} else if (randomWord == "scissors") {
  console.log("Player has selected Scissors.")
} else {
  alert("Bro.")
  console.log("Bro, thats not an option.")
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);
   if (randomNumber == 1) {
     console.log("Paper")
   } else if (randomNumber == 2) {
     console.log("Rock")
   } else if (randomNumber == 3) {
     console.log("Scissors")
   }
}

let playerSelection = getPlayerChoice();
console.log(playerSelection);
let computerSelection = getComputerChoice();
console.log(computerSelection);
