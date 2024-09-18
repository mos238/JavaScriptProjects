/*The .map() Method
The second iterator we’re going to cover is .map(). When .map() is called on an array, 
it takes an argument of a callback function and returns a new array! Take a look at an example below of calling .map(): */

const numbers = [1, 2, 3, 4, 5]; //array of numbers called 'numbers'

const bigNumbers = numbers.map(foo => { //bigNumbers will store the return value of calling .map() on numbers.
  return foo * 10; //numbers.map will iterate through each element in the numbers array and pass the element 
  //into the callback function. NB: 'foo' = File or Object. It is used in place of an object or file name/placeholder.
});

console.log(numbers); //Output: [1, 2, 3, 4, 5]
console.log(bigNumbers);// Output: [10, 20, 30, 40, 50]


/*-------------------------------------------------------------------------------------------------- */

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

const secretMessage = animals.map(animals => animals[0] 

);
console.log(secretMessage.join(''));

const bigNumbers2 = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(foo => {
  return foo / 100;
});
console.log(smallNumbers);

