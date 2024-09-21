/*The .reduce() Method
Another widely used iteration method is .reduce(). The .reduce() method returns a single value after iterating 
through the elements of an array, thereby reducing the array. Take a look at the example below: */


const numbers = [1, 2, 4, 10]; //numbers is an array that contains numbers.

const summedNums = numbers.reduce((accumulator, currentValue) => {/*summedNums is a variable that stores 
    the returned value of invoking .reduce() on numbers.*/ 
    //numbers.reduce() calls the .reduce() method on the numbers array and takes in a callback function as argument.
  return accumulator + currentValue
})

console.log(summedNums) // Output: 17

/*-------------------------------------------------------------------------------------------------------------------- */
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
}, 10); /*The .reduce() method can also take an optional second parameter to set an initial value for accumulator 
(remember, the first argument is the callback function!). For instance: }, 10 in this case. */

console.log(newSum);

