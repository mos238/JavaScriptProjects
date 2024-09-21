/*1.
Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, 
returns a new array with each string in the array prepended with 'baby '. */

// Write your code here:
const convertToBaby = arr => { // takes array 'arr' as an argument
    let babyArray = []; //remember to add this empy array
    for (let i = 0; i < arr.length; i++){//use a for loop
      babyArray.push(`baby ${arr[i]}`)
     
    }
    return babyArray;
  }
  
  

  // When you're ready to test your code, uncomment the below and run:
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)) 
  
  