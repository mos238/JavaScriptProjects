/*The .filter() Method
Another useful iterator method is .filter(). Like .map(), .filter() returns a new array. 
However, .filter() returns an array of elements after filtering out certain elements from the original array. 
The callback function for the .filter() method should return true or false depending on the element that is passed to it. 
The elements that cause the callback function to return true are added to the new array. 
Take a look at the following example below: */

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; //words is an array that contains string elements.

const shortWords = words.filter(word => {//const shortWords = declares a new variable that will store the returned array from invoking .filter().
  //The callback function is an arrow function that has a single parameter, 'word' or foo. 
  //Each element in the words array will be passed to this function as an argument.

    return word.length < 6; // word.length < 6; is the condition in the callback function. 
     //Any word from the words array that has fewer than 6 characters will be added to the shortWords array.
});
console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door'] : 
console.log(shortWords); //[ 'chair', 'music', 'brick', 'pen', 'door' ] 
//:NB 'Pillow' is 6 letters in length so is NOT in new array as per condition.
/*------------------------------------------------------------------------------------------------------------------------- */
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(foo =>{
  return foo < 250;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(foo =>{
  return foo.length > 7;
})

console.log(smallNumbers);
console.log(longFavoriteWords);





