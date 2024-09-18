const numberDigits =(x)=> {
    
    if (x >= 0 && x <= 9) {
        return `One digit: ${x}`;
    } else if (x >= 10 && x <= 99) {
        return `Two digits: ${x}`;
    } else {
        return `The number is: ${x}`;
    }
}

// Examples to demonstrate the function
console.log(numberDigits(5));     // Output: One digit: 5
console.log(numberDigits(12));    // Output: Two digits: 12
console.log(numberDigits(-202));  // Output: The number is: -202
