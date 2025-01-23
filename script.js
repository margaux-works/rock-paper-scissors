function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  let humanChoice = prompt('your turn to play - Enter rock, paper or scissor');
  return humanChoice.toLowerCase();
  console.log(humanChoice);
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    if (computerChoice === 'rock') {
      if (humanChoice === 'scissors') {
        computerScore++;
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
      } else if (humanChoice === 'paper') {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      } else if (humanChoice === 'rock') {
        console.log(`draw! you both picked up ${humanChoice}`);
      }
    } else if (computerChoice === 'paper') {
      if (humanChoice === 'paper') {
        console.log(`draw! you both picked up ${humanChoice}`);
      } else if (humanChoice === 'rock') {
        computerScore++;
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
      } else if (humanChoice === 'scissors') {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      }
    } else if (computerChoice === 'scissors') {
      if (humanChoice === 'scissors') {
        console.log(`draw! you both picked up ${humanChoice}`);
      } else if (humanChoice === 'paper') {
        computerScore++;
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
      } else if (humanChoice === 'rock') {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      }
    }
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
  }

  let numRounds = 0;
  while (numRounds <= 4) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    numRounds++;
  }

  if (humanScore > computerScore) {
    console.log('You win!');
  } else if (humanScore < computerScore) {
    console.log('sorry, you lose!');
  } else console.log('None wins!');
}

playGame();
