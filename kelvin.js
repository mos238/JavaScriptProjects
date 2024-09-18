//this is a constant set to 293
const kelvin = 0;
//subtract 273 from kelvin variable
const celsius = kelvin -273;
//equation to convert celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32; 
//use.floor() method to store decimal 
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
