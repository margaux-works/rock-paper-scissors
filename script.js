function getComputerChoice() {
  // return a random number between 1 and 3. integer number - use math.random.math.floor
  let computerChoice = Math.ceil(Math.random() * 3);
  // matches 1 to rock, 2 to paper, 3 to scissors
  if (computerChoice === 1) {
    return 'rock';
  } else if (computerChoice === 2) {
    return 'paper';
  } else if (computerChoice === 3) {
    return 'scissors';
  }
}

console.log(getComputerChoice());

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  let humanChoice = prompt('your turn to play - Enter rock, paper or scissor');
  return humanChoice.toLowerCase();
}

console.log(getHumanChoice());

// write playRound function
// play 1st round with computer and human choice
// if computer wins, incremet computerScore
// if human winds, increment humanScore

// function playRound(computerChoice, humanChoice) {
//   if (computerChoice === '1' && humanChoice === 'scissors') {
//     console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
//   } else if (computerChoice === 2 && humanChoice === 'rock') {
//     console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
//   } else if (computerChoice === 3 && humanChoice === 'paper') {
//     console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
//   }
// }
