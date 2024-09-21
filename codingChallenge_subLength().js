/* Coding question
Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0*/

const subLength = (str, char) => {
    // Find all occurrences of the character in the string
    let indices = [];
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        indices.push(i);  // Record the index of each occurrence
      }
    }
  
    // If there are exactly 2 occurrences, return the length between them
    if (indices.length === 2) {
      return indices[1] - indices[0] + 1;  // Include both characters in the count
    } else {
      return 0;  // If there are fewer or more than 2 occurrences, return 0
    }
  }
  
console.log(subLength('Saturday', 'a'));  // Output: 6
console.log(subLength('summer', 'm'));    // Output: 2
console.log(subLength('digitize', 'i'));  // Output: 0
console.log(subLength('cheesecake', 'k')); // Output: 0

/*Explanation:
We first loop through the string to find all the indices where the character appears.
If the character appears exactly twice, we calculate the length between the first and second occurrences, 
ncluding both characters (hence the + 1).
If the character appears fewer than or more than two times, the function returns 0. */
