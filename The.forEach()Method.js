/*The .forEach() Method
The first iteration method that we’re going to learn is .forEach(). Aptly named, .forEach() will execute the same code 
for each element of an array.

Diagram outlining the parts of an array iterator including the array identifier, 
the section that is the iterator, and the callback function */


const fruits = ['mango', 'papaya', 'pineapple', 'apple']; //elements of the array 'fruit' 

// Iterate over fruits below

fruits.forEach(fruitItem => { // forEach takes an argument of callback function. 
    //It then loops through the array and executes the callback function for each element in the array.
  console.log(`I want to eat a ${fruitItem}.`)
})

/* other equivalent iteration methods are:

1. Another way to pass a callback for .forEach() is to use arrow function syntax (as used in above code)

groceries.forEach(groceryItem => console.log(groceryItem));

2. We can also define a function beforehand to be used as the callback function.

function printGrocery(element){
  console.log(element);
}

groceries.forEach(printGrocery);

The above example uses a function declaration but you can also use a function expression or arrow function as well.


*/
