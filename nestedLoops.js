/*/When we have a loop running inside another loop, we call that a nested loop. 
One use for a nested for loop is to compare the elements in two arrays. 
For each round of the outer for loop, the inner for loop will run completely.

Let’s look at an example of a nested for loop: /*/

/*const myArray = [6, 19, 20, -1];
const yourArray = [19, 81, 2, -1];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}
  */

// Write your code below

const bobsFollowers = ['Sarah', 'Ted', 'Kate', 'Eva'];
const tinasFollowers = ['Ted', 'Adam', 'Kate'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {

  for (let j = 0; j < tinasFollowers.length; j++) {
    
    if (bobsFollowers[i] === tinasFollowers[j]) {
        mutualFollowers.push(bobsFollowers[i])
      console.log( mutualFollowers);
    }
  }
}

