let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  //Create a generateTarget() function. This function should return a random integer between 0 and 9
  return Math.floor(Math.random() * 10); //returns a random integer between 0 and 9.
};

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  // Calculate the absolute difference between each guess and the target number
  const userDifference = Math.abs(userGuess - targetNumber);
  const computerDifference = Math.abs(compareGuesses - targetNumber);

  // Compare the differences: if user is closer or if tied, return true
  if (userDifference <= computerDifference) {
    return true; //Human wins
  } else {
    return false; //Computer wins
  }
};
//Q.3 Create an updateScore() function
//let humanScore = 0; this is already declared in line 1
//let computerScore = 0;this is already declared in line 2
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore += 1;
  } else if (winner === "computer") {
    computerScore += 1;
  }
};
//Q4. Create an advanceRound() function. Thi sfunction should increase the value of currentRoundNumber by 1.

const advanceRound = () => {
  currentRoundNumber += 1;
};
//Q6.
const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1 - num2);
};


