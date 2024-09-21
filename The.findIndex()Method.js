/*The .findIndex() Method
We sometimes want to find the location of an element in an array. 
That’s where the .findIndex() method comes in! Calling .findIndex() on an array will return the index of 
the first element that evaluates to true in the callback function. */

const jumbledNums = [123, 25, 78, 5, 9]; 

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});
console.log(lessThanTen); // Output: 3 
//If we check what element has index of 3:
console.log(jumbledNums[3]); // print index 3 from jumledNums array : Output: 5
//Great, the element in index 3 is the number 5. This makes sense since 5 is the first element that is less than 10.

const greaterThan1000 = jumbledNums.findIndex(num => {
    return num > 1000;
  });
  //If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.
  console.log(greaterThan1000); // Output: -1

  //*--------------------------------------------------------------------------------------------------------------------- */

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

/*Q1.
Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' a
nd save the returned value to a const variable named foundAnimal. */
const foundAnimal = animals.findIndex(foo => foo === 'elephant'); 

console.log(foundAnimal);
/*Q2.
Let’s see if we can find the index of the first animal that starts with the letter 's'.
Call .findIndex() on the animals array and return the index of the first element that starts with 's'. 
Assign the returned value to a const variable named startsWithS. */

const startsWithS = animals.findIndex(animal => animal[0].toLowerCase() === 's');

console.log(startsWithS);// output: 3 
  
  
  
