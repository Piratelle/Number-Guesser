let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
	  return Math.floor(Math.random() * 10);
	}

function compareGuesses(humanGuess, computerGuess, targetNumber) {
	const humanOffBy = Math.abs(targetNumber - humanGuess);
	const computerOffBy = Math.abs(targetNumber - computerGuess);
	return (humanOffBy <= computerOffBy);
}