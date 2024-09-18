
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'poo'){
        return userInput;

    } else {
        console.log('Error, please type: rock, paper or scissors. ');

    }
}
/*/console.log(getUserchoice('paper'));
//console.log(getUserchoice('potatoe'))
//console.log(getUserchoice('rock'));
//console.log(getUserchoice('scissors')); */

const getComputerChoice = () => {
   const randomNumber = Math.floor(Math.random() *3 );
   switch (randomNumber) {
    case 0: 
        return 'rock';
    case 1: 
        return 'paper';
    case 2: 
        return 'scissors'; 
   }

};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'This game is a tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return "Sorry, computer won!";
        } else {
            return "Congratulations, you won!";

        }
    }

     if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return "Sorry, computer won!";
        } else {
            return "Congratulations, you won!";

        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return "Sorry, computer won!"
        } else {
            return "Congratulations, you won!"
        }
    }
    if (userChoice === 'poo'){
        return 'Congrats, you winner winner chicken dinner!';
    }

}; /* Now we are ready tot test the function */

/* console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('rock', 'rock')); */

/* NOW WE ARE READY TO START THE GAME, using above logic created with functions  */

const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);


    console.log(determineWinner(userChoice, computerChoice));

};

/* Lastly we must call the function! */

playGame();