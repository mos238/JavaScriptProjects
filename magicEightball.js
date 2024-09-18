/*Magic Eight Ball
You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.

In this project we will build a Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune. */

let userName = "";

userName ? console.log(`Hello ${userName}!`):
console.log('Hello!');

const userQuestion = "question";
console.log(`Whats your ${userQuestion} ${userName
}?`);

const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

const phrases = randomNumber;
console.log(`Magic Eight Balls response is: ${eightBall}`);
switch (phrases) {
  case 8:
    console.log('It is certain');
    break;
  case 7:
    console.log('It is decidedly so 👍');
    break;
  case 6:
    console.log('Replay hazy, try again 👌');
    break;
  case 5:
    console.log('Outlook not so good 👌');
    break;
  case 4:
    console.log('Cannot predict now 👎');
    break;
  case 3:
    console.log('Do not count on it 👎');
    break;
  case 2:
    console.log('My sources say no 👌');
    break;
  default:
    console.log('Signs point yes 👌');
}


