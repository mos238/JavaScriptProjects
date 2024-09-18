// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
    console.log(counterOne);
  }
  
  // A while loop that prints 1, 2, and 3
  let counterTwo = 1;// counterTwo variable declared before the while loop
  while (counterTwo < 4) { // 'While' keyword followed by our 'stopping condition' or test condition
    console.log(counterTwo); //this is th e'code block'
    counterTwo++;
  }

  /*/ A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
} /*/

// Write your code below
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard = [];
while (currentCard !== 'spade'){
  currentCard = cards[Math.floor(Math.random()*4)];
  console.log(currentCard);

}





