const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
   let checkA = val + 2;
   let checkB = func(val); //func callback invoked with val
   if(checkA === checkB){
    return func(val);
  
   } else {
    return 'inconsistent results'
   }
  
  console.log(checkConsistentOutput(addTwo, 4)); 
  
  }
  
  
  
  
  /*Functions as Parameters
As you know, a parameter is a placeholder for the data that gets passed into a function. Since functions can behave like any other type of data in JavaScript, it might not surprise you to learn that functions can accept other functions as parameters. A higher-order function is a function that either accepts functions as parameters, returns a function, or both! We call functions that get passed in as parameters callback functions. Callback functions get invoked during the execution of the higher-order function.

When we invoke a higher-order function, and pass another function in as an argument, we don’t invoke the argument function. Invoking it would evaluate to passing in the return value of that function call. With callback functions, we pass in the function itself by typing the function name without the parentheses:

const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}
 
const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}

higherOrderFunc(anotherFunc);

We wrote a higher-order function higherOrderFunc that accepts a single parameter, param. Inside the body, param gets invoked using parentheses. And finally, a string is returned, telling us the name of the callback function that was passed in.

Below the higher-order function, we have another function aptly named anotherFunc. This function aspires to be called inside the higher-order function.

Lastly, we invoke higherOrderFunc(), passing in anotherFunc as its argument, thus fulfilling its dreams of being called by the higher-order function.

higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
});

In this example, we invoked higherOrderFunc() with an anonymous function (a function without a name) that counts to 10. Anonymous functions can be arguments too!

Let’s get some practice writing higher-order functions.

Instructions
Checkpoint 1 Passed
1.
Here we have a function, addTwo(), that adds 2 to whatever is passed into it. Below that, we’ve created what will be a higher-order function, checkConsistentOutput(). The purpose of the higher-order function will be to check the work of addTwo(). Let’s get started!

To begin, inside the body of checkConsistentOutput(), declare two variables: checkA and checkB:

checkA stores the sum val plus 2.
checkB stores the invocation of the func callback, with val as the argument.
Inside the curly braces of checkConsistentOutput():

For checkA, use + to get the sum of val and 2.
For checkB, invoke func() and pass in val as the argument.
Checkpoint 2 Passed
2.
Next, below the variables, write a conditional statement that checks if the value of checkA is equal to the value checkB. If true, return the result of the callback function. If false, return the string 'inconsistent results'.

The conditional statement can use traditional if…else syntax, or the ternary operator. Use the comparison operator, ===, to compare checkA and checkB.

Checkpoint 3 Passed
3.
Finally, using console.log(), log the invocation of checkConsistentOutput() with two arguments: the addTwo() function and any number. */