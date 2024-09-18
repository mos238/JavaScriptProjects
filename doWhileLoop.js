/*Do...While Statements
In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run. 
This is where the do...while statement comes in.

A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met. 
The syntax for a do...while statement looks like this: /*/

let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);

/*.........................................................................................*/

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 

// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};

/*.........................................................................................*/

// Write your code below
// Write your code below
let cupsOfSugarNeeded = 5;
let cupsAdded = 0;
do {
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);

console.log(cupsAdded + ' cups were added');



