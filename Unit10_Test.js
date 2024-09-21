/* Select the option that correctly assigns the increment function to the variable incrementHolder.
Q1. 
Code
const increment = (salary) => {
  const revisedSalary = salary + 5;
  console.log(revisedSalary);
  return revisedSalary;
}
  -----------------------------------------------
Answer Choices

const incrementHolder = increment(5500);

--------------------------------------------------
const incrementHolder = incrementSalary;

--------------------------------------------------
increment(5500);

--------------------------------------------------
const incrementHolder = increment; (correct answer)

Q2.
Examine the below code. Which of the functions represents a higher-order function?

Code
let multiplyTwoValues = (val1, val2) => { 
  return val1 * val2; 
}

let square = (val) => { 
  return val * val; 
}

let getFunctionString = (func) => { 
  return func.toString(); 
}

let result = multiplyTwoValues(2, 2);
square(result);

Answer Choices

getFunctionString() -----------Correct answer


result


square()


multiplyTwoValues()

Q3.

Which of the following methods returns an array with values that evaluate to truthy based on the condition in the method’s block?

Answer Choices

.some()


.filter() ------------correct answer


.map()


.forEach()

Q4.
Use the .map() method on the oddNumbers array to return each number multiplied by 2 into the evenNumbers array.

Code
const oddNumbers = [1, 3, 5, 7];

const evenNumbers = oddNumbers.map(number => {
  return number * 2  ------------------------------------- correct
});

Answer Choices
Call the .map() method on the oddNumbers array.

Q5.
Fill in the blanks to make addItUp log 100 to the console.

Code
Fill in the blanks to make addItUp log 100 to the console.

Code
const nums = [1, 2, 3, 4];
const initializer = 90;

const addItUp = nums.reduce((accumulator, currentValue) => { -------------------correct
  return accumulator + currentValue;
}, initializer);

console.log(addItUp);

Answer Choices
The .reduce() method can get the sum of an array by iterating through the array and adding the values of two parameters together. 
The value of the second parameter is added to the first parameter.

Q6.
What is the value of foundElement after the code runs?

Code
const randomNums = [1, 123, 25, 90, 3543, 42];

const foundElement = randomNums.findIndex(num => num > 200);
Answer Choices

3543


true


undefined


4 --------------correct ans

Q7.

In the following Javascript code snippet, the callback function cb is a function that sums the value of two numbers.

Fill in the blank so that when the function is passed into the higher order function hof, it is then invoked so that the value returned is 8.

Code
let cb = (n1, n2) => {return n1 + n2};

let hof = (func) => {
  let value = func(3, 5); ---------------correct
  return `this function returned ${value}`;
}

hof(cb) // 'this function returned 8'
Answer Choices
Use the parameter func with the correct values to yield 8.

Q8.
The code snippet includes a function assigned to the variable sum. Given the fact that JavaScript functions are first-class objects, fill in the blanks so that a property of sum called alias is assigned the string value, 'summation'.

Code
const sum = (x, y) => x + y;
sum.alias ='summation';     ---------------correct
Answer Choices
The notation used to show that alias is a property of sum.

Q9.
Which of the following iterator methods returns undefined?

Answer Choices

.map()


.some()

(Selected)Correct:
.forEach()

👏
Correct! Calling .forEach() on an array returns undefined.

.filter()