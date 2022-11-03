let roundWinner = "";
let playerScore = 0;
let computerScore = 0;

const btnRock = document.querySelector('#btnR');
rockGame = btnRock.addEventListener('click', () => {
  let choice = "Rock";
  console.log("Player has selected Rock");
  let computerSelection = getComputerChoice();
  let roundWinner = playRound(choice, computerSelection);
  console.log(roundWinner);
  console.log(playerScore);
  console.log(computerScore);
  gameOver();
  totalScore();
});

const btnPaper = document.querySelector('#btnP');
btnPaper.addEventListener('click', () => {
  let choice = "Paper";
  console.log("Player has selected Paper");
  let computerSelection = getComputerChoice();
  let roundWinner = playRound(choice, computerSelection);
  console.log(roundWinner);
  console.log(playerScore);
  console.log(computerScore);
  gameOver();
  totalScore();
});


const btnScissors = document.querySelector('#btnS');
btnScissors.addEventListener('click', () => {
  let choice = "Scissors";
  console.log("Player has selected Scissors");
  let computerSelection = getComputerChoice();
  let roundWinner = playRound(choice, computerSelection);
  console.log(roundWinner);
  console.log(playerScore);
  console.log(computerScore);
  gameOver();
  totalScore();
});


function playRound(choice, computerSelection) {

  if (choice == "Rock" && computerSelection == "Rock" ||
      choice == "Scissors" && computerSelection == "Scissors" ||
      choice == "Paper" && computerSelection == "Paper") {
    console.log("Tie, unlucky fam.");
    return "Tie";

  } else if (choice == "Rock" && computerSelection == "Paper" ||
             choice == "Paper" && computerSelection == "Scissors" ||
             choice == "Scissors" && computerSelection == "Rock") {
    console.log("Computer Wins. " + computerSelection + " beats " + choice);
    computerScore++;
    return "Computer";

  } else if (choice == "Rock" && computerSelection == "Scissors" ||
             choice == "Paper" && computerSelection == "Rock" ||
             choice == "Scissors" && computerSelection == "Paper") {
    console.log("Player Wins. " + choice + " beats " + computerSelection);
    playerScore++;
    return "Player";
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

function gameOver() {
  if (computerScore == 5) {
    alert("Computer has won! Better luck next time.")
  } if (playerScore == 5) {
    alert("Player has won! Congratulations.")
  }
}

function totalScore() {
  document.getElementById("pScore").innerHTML = "Player: " + playerScore;
  document.getElementById("cScore").innerHTML = "Computer: " + computerScore;
}