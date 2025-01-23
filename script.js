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

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  let humanChoice = prompt('your turn to play - Enter rock, paper or scissor');
  return humanChoice.toLowerCase();
  console.log(humanChoice);
}

function playRound(humanChoice, computerChoice) {
  // play 1st round with computer and human choice
  // if computer wins, incremet computerScore
  // if human winds, increment humanScore
  console.log(`Human choice: ${humanChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
  if (computerChoice === 'rock') {
    if (humanChoice === 'scissors') {
      computerScore = +1;
      console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
      console.log(`Human: ${humanScore}`);
      console.log(`Computer: ${computerScore}`);
    } else if (humanChoice === 'paper') {
      humanScore = +1;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      console.log(`Human: ${humanScore}`);
      console.log(`Computer: ${computerScore}`);
    } else if (humanChoice === 'rock') {
      console.log(`draw! you both picked up ${humanChoice}`);
    }
  } else if (computerChoice === 'paper') {
    if (humanChoice === 'paper') {
      console.log(`draw! you both picked up ${humanChoice}`);
    } else if (humanChoice === 'rock') {
      computerScore = +1;
      console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
      console.log(`Human: ${humanScore}`);
      console.log(`Computer: ${computerScore}`);
    } else if (humanChoice === 'scissors') {
      humanScore = +1;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      console.log(`Human: ${humanScore}`);
      console.log(`Computer: ${computerScore}`);
    }
  } else if (computerChoice === 'scissors') {
    if (humanChoice === 'scissors') {
      console.log(`draw! you both picked up ${humanChoice}`);
    } else if (humanChoice === 'paper') {
      computerScore = +1;
      console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
      console.log(`Human: ${humanScore}`);
      console.log(`Computer: ${computerScore}`);
    } else if (humanChoice === 'rock') {
      humanScore = +1;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      console.log(`Human: ${humanScore}`);
      console.log(`Computer: ${computerScore}`);
    }
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// function playRound(computerChoice, humanChoice) {
//   if (computerChoice === '1' && humanChoice === 'scissors') {
//     console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
//   } else if (computerChoice === 2 && humanChoice === 'rock') {
//     console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
//   } else if (computerChoice === 3 && humanChoice === 'paper') {
//     console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
//   }
//
