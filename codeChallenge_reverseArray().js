// Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

function reverseArray(arr) {
    // create a new empty array to hold the reveresed elements
    let reverseArray = [];
    // loop through the original array starting from the last elements
    for (let i = arr.length - 1; i >= 0; i--){
      reverseArray.push(arr[i]);
    }
    // return the new array with elements in reverse order
    return reverseArray;
  }
  
  // When you're ready to test your code, uncomment the below and run:
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 
  // Should print ['This', 'will', 'all', 'make', 'sense.'];

  // Method 2 using 'Arrow Function' notation (prefered)

  const reverseArray2 = (arr) => {
    let reversedArray2 = [];
  
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray2.push(arr[i]);
    }
  
    return reversedArray2;
  };
  
  const originalArray = [1, 2, 3, 4, 5];
  const reversed = reverseArray2(originalArray);

  console.log(reversed);  // Output: [5, 4, 3, 2, 1]

  1
  
  