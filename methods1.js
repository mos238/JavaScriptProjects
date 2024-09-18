let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
/*/ Q1.Below the retreatMessage variable in the code editor, create an alienShip object. 
It should contain a method retreat() which will console.log() the retreatMessage. /*/

// Write your code below

let alienShip = { //create object called alienShip 
  retreat() { // This is a method called retreat()
    console.log(retreatMessage);
  },
  takeOff() { /*/Q2.Add another method to your object literal. This method, takeOff(), 
    should console.log() the string 'Spim... Borp... Glix... Blastoff!'. /*/
    console.log('Spim... Borp... Glix... Blastoff!');
  
 } 
};
/*/Q3.
Invoke your two methods: first .retreat() then .takeOff(). /*/
alienShip.retreat();
alienShip.takeOff();
  



