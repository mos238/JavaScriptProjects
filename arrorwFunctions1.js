// using normal bulit in 'Function' syntax
function sum(a, b) {
    return a + b
}

// using arrow function notation to do the same function as above!
let sum2 = (a, b) => {
    return a + b
}

// Even shorter way to write above code without 'return' or brackects would be:
let sum3 = (a, b) => a + b

function isPositive(number) {
    return number >= 0
}

//above fumction, but using arrow function notation instead:
let isPositive2 = number  => number >= 0 //also single parameter function do not need the (*)

function randomNumber() {
    return Math.random
}

// above function but using arror function:
let randomNumber2 = () => Math.random //Now it's a lot cleaner and easier to read.



console.log(sum(4,6));
console.log(isPositive(-1));
console.log(randomNumber()); 
console.log(sum2(4,7));
console.log(sum3(5,9));
console.log(isPositive2(9));
console.log(randomNumber2());