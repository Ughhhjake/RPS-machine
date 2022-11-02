let choice = 0;
let computerSelection = 0;

const btnRock = document.querySelector('#btnR');
btnRock.addEventListener('click', () => {
  let choice = "Rock";
  console.log(choice);
  console.log("Player has selected Rock");
  let randomNumber = Math.floor(Math.random() * 3);
  //console.log(randomNumber);
   if (randomNumber == 0) {
     let computerSelection = "Paper";
     console.log(computerSelection + "computerSelection");
   } else if (randomNumber == 1) {
     let computerSelection = "Rock";
     console.log(computerSelection + "computerSelection");
   } else if (randomNumber == 2) {
     let computerSelection = "Scissors";
     console.log(computerSelection + "computerSelection");
   }  
});

const btnPaper = document.querySelector('#btnP');
btnPaper.addEventListener('click', () => {
  let choice = "Paper";
  console.log(choice);
  console.log("Player has selected Paper");
  let randomNumber = Math.floor(Math.random() * 3);
  //console.log(randomNumber);
   if (randomNumber == 0) {
     let computerSelection = "Paper";
     console.log(computerSelection + "computerSelection");
   } else if (randomNumber == 1) {
     let computerSelection = "Rock";
     console.log(computerSelection + "computerSelection");
   } else if (randomNumber == 2) {
     let computerSelection = "Scissors";
     console.log(computerSelection + "computerSelection");
   }
});


const btnScissors = document.querySelector('#btnS');
btnScissors.addEventListener('click', () => {
  let choice = "Scissors";
  console.log(choice);
  console.log("Player has selected Scissors");
  let randomNumber = Math.floor(Math.random() * 3);
  //console.log(randomNumber);
   if (randomNumber == 0) {
     let computerSelection = "Paper"
     console.log(computerSelection + "computerSelection");
   } else if (randomNumber == 1) {
     let computerSelection = "Rock"
     console.log(computerSelection + "computerSelection");
   } else if (randomNumber == 2) {
     let computerSelection = "Scissors"
     console.log(computerSelection + "computerSelection");
   }
});


function playRound(choice, computerSelection) {

  if (choice == "Rock" && computerSelection == "Rock" ||
      choice == "Scissors" && computerSelection == "Scissors" ||
      choice == "Paper" && computerSelection == "Paper") {
    console.log("Tie, unlucky fam.");
    return "tie";

  } else if (choice == "Rock" && computerSelection == "Paper" ||
             choice == "Paper" && computerSelection == "Scissors" ||
             choice == "Scissors" && computerSelection == "Rock") {
    console.log("Computer Wins. " + computerSelection + " beats " + playerSelection);
  //  computerScore++;
    return "computer";

  } else if (choice == "Rock" && computerSelection == "Scissors" ||
             choice == "Paper" && computerSelection == "Rock" ||
             choice == "Scissors" && computerSelection == "Paper") {
    console.log("Player Wins. " + choice + " beats " + computerSelection);
  //  playerScore++;
    return "player";
  }
}


console.log("Game Over.")
