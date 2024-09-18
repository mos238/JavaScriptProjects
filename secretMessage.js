let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();//Use an array method to remove the last string of the array secretMessage.
console.log(secretMessage.length);//Great! You can check your work by logging the .length of the array.

//At this point, the length should be 1 less than the original length.
secretMessage.push('to', 'Program');//Use an array method to add the words to and Program as separate strings to the end of the secretMessage array.
secretMessage[7] = "right"; //Change the word easily to the word right by accessing the index and replacing it.

secretMessage.shift();//Use an array method to remove the first string of the array.
secretMessage.unshift("Programming");
//Use an array method to add the string Programming to the beginning of the array.

secretMessage.splice(0, 5,"know");
//Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,Call .splice() like this:

//array.splice(indexToStart, numberOfIndices, 'stringToAdd');


console.log(secretMessage.join());





















