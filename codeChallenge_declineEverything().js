/*1.
Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.

The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline().

You can test your function when you’re ready by passing in the veggies array or by making your own array! */


const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

// Fix the forEach loop syntax
veggies.forEach(vegItem => {
  console.log(`I want to eat ${vegItem}.`);
});

// politelyDecline function to politely refuse vegetables
const politelyDecline = (veg) => {
  console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write the declineEverything function:
const declineEverything = arr => {
  arr.forEach(politelyDecline);  // Loop through array and decline each item
}

const acceptEverything = arr => {
  arr.forEach( item => {
 console.log(`Ok, I guess I will eat some ${item}.`);
  });
 


}

// Example usage:
declineEverything(veggies);
acceptEverything(veggies);
