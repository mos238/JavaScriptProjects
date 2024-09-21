/* Coding question

Write a function factorial() that takes a number as an argument and returns the factorial of the number.

Example:
factorial(6); 
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 

Assume only positive numbers will be given as an argument for the factorial() function.*/


const factorial = num => {
    if(num === 0 || num === 1){
        return 1; // The factorial of 0 or 1 is 1

    }else {
        return num * factorial(num -1); //Recusively calculate the factorial
    }
    
}

console.log(factorial(6)); //720
console.log(factorial(5)); //120

/*Explanation:
The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. 
For example, 5! = 5 * 4 * 3 * 2 * 1 = 120.

The base case in the recursive function checks if num is 0 or 1, and returns 1 since 0! = 1! = 1.
The function then recursively multiplies the number by the factorial of num - 1 until the base case is reached. */