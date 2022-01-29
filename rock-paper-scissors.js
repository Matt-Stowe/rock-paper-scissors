function game() {

function computerPlay() {
  let selectRandom = Math.floor(Math.random() *3);
  if (selectRandom === 0) {
    return "Rock"
  }
  else if (selectRandom === 1) {
    return "Paper"
  }
  else {
    return "Scissors"
  }
}


function playerPrompt() {
  while (true) {
    let selectedPlayer = prompt("Choose Your Weapon: ", "Rock/Paper/Scissors").toLowerCase();
    if (selectedPlayer === "rock") {
      console.log('You have selected "Rock"')
      return "Rock";
      break;
    }
    else if (selectedPlayer === "paper") {
      console.log('You have selected "Paper"')
      return "Paper";
      break;
    }
    else if (selectedPlayer === "scissors") {
      console.log('You have selected "Scissors"')
      return "Scissors";
      break;
    }
    else {
      console.log("Error, not a worthy weapon! Try again.")
    }
  }
}

const playerSelection = playerPrompt();
const computerSelection = computerPlay();

const comparisonSelection = (playerSelection + computerSelection)

function playRound() {
  console.log(`The computer chose "${computerSelection}"`)
  switch (comparisonSelection) {
    case "RockPaper":
      console.log("You Lose!")
      break;
    case "RockScissors":
      console.log("You Win!")
      break;
    case "PaperRock":
      console.log("You Win!")
      break;
    case "PaperScissors":
      console.log("You Lose!")
      break;
    case "ScissorsRock":
      console.log("You Lose!")
      break;
    case "ScissorsPaper":
      console.log("You Win!")
      break;
    default:
      console.log("It's a tie!")
  }
}
const roundResult = playRound();

// console.log(computerSelection)
// console.log(playerSelection)
}

for (let i = 0; i < 5; i++) {
  game()
}