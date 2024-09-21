
/*Choose the Right Iterator
There are many iteration methods you can choose. In addition to learning the correct syntax for the use of iteration methods, it is also important to learn how to choose the correct method for different scenarios. The exercises below will give you the opportunity to do just that!

You’ll see errors pop up in the terminal as you work through this exercise, but by the end the errors will be gone! */

/*Tasks 1 to 5 
1. Replace the word method in the first method call with a method that will do something to each of the values in the array and return undefined.

Think about what iteration method will return undefined.

Checkpoint 2 Passed
2.
In the second method call, replace the word method with a method that will return a new array with only those elements longer than 7 characters.

Checkpoint 3 Passed
3.
In the third method call, replace the word method with a method that accepts an array containing multiple values and returns a single value.

Checkpoint 4 Passed
4.
In the fourth method call, replace the word method with a method that will return a new array of numbers returned from the function.

What method would create new array that will have the same length of the original array?

Checkpoint 5 Passed
5.
In the fifth method call, replace the word method with a method that will return a boolean value. */
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach((city) => console.log('Have you visited ' + city + '?')); // 1. cities.method replaced with .forEach

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);// 2. cities.method replaced with .filter

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => { // 3. cities.method replaced with .reduce
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5); // 4. cities.method replaced with .map

// Choose a method that will return a boolean value
nums.some(num => num < 0); // 5. cities.method replaced with .some
