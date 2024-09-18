/*/for loop vs for…of loop
Here is an example of iterating over each element in an array using a traditional for loop with an index variable: /*/

const hobbies = ['singing', 'eating', 'quidditch', 'writing'];
 
for (let i = 0; i < hobbies.length; i++) {
  console.log(`I enjoy ${hobbies[i]}.`);
}

/*/And here is an example of iterating through the same array using a for...of loop:/*/

const hobbies2 = ['singing', 'eating', 'quidditch', 'writing'];
 
for (const hobby of hobbies2) {
  console.log(`I enjoy ${hobby}.`);
}

/*/Both examples print out the same thing:

I enjoy singing.
I enjoy eating.
I enjoy quidditch.
I enjoy writing. /*/


/*/Notice how the for...of loop has a simpler syntax which can be beneficial for code readability, especially in larger and more complex applications.

 /*/
 /*/ Iterating Through an Array
One of the primary uses of the for...of loop is iterating through the items of an array. Let’s breakdown the syntax with a new example:/*/

const fruits = ['oranges', 'apples', 'grapes'];
 
for (const fruit of fruits) {
  console.log(fruit);
}

/*/ Iterating Through a String
The for...of can also be used to iterate over strings. Here is an example: /*/

const username = 'joe';
 
for (const char of username) {
  console.log(char);
}